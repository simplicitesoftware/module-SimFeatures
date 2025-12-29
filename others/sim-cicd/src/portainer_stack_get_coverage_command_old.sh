portainer_server=${args[portainer_server]}
stack=${args[stack]}
env_id=${args[--environment]}

portainer_url="portainer.$portainer_server"

echo "[sim-cicd] === GET COVERAGE FROM PORTAINER STACK"

# Get the main container ID from the stack
CONTAINER_ID=$(curl -s "https://$portainer_url/api/endpoints/$env_id/docker/containers/json?all=1" \
    -H "X-API-Key:$PORTAINER_API_TOKEN" \
    | jq -r ".[] | select(.Labels[\"com.docker.compose.project\"]==\"$stack\") | .Id" | head -n 1)

if [ -z "$CONTAINER_ID" ]; then
    echo "[sim-cicd] No container found for stack '$stack'" >&2
    exit 1
fi

# Paths - the main container already has jacoco-data mounted
TOMCAT_ROOT="/usr/local/tomcat"
JACOCO_DATA_PATH="/usr/local/tomcat/webapps/ROOT/WEB-INF/dbdoc/content/jacoco"
JACOCO_EXEC_PATH="$JACOCO_DATA_PATH/jacoco.exec"
JACOCO_XML_PATH="$JACOCO_DATA_PATH/jacoco.xml"
SOURCEFILES_PATH="$TOMCAT_ROOT/webapps/ROOT/WEB-INF/src"
CLASSFILES_PATH="$TOMCAT_ROOT/webapps/ROOT/WEB-INF/bin"

# Copy source and class files from main container to jacoco-data volume
curl -s -X POST \
  -H "X-API-Key:$PORTAINER_API_TOKEN" \
  -H "Content-Type: application/json" \
  "https://$portainer_url/api/endpoints/$env_id/docker/containers/$CONTAINER_ID/exec" \
  -d "{
    \"AttachStdout\": true,
    \"AttachStderr\": true,
    \"Cmd\": [\"sh\", \"-c\", \"cp -r $SOURCEFILES_PATH $JACOCO_DATA_PATH/src && cp -r $CLASSFILES_PATH $JACOCO_DATA_PATH/bin\"]
  }" | jq -r .Id | xargs -I {} curl -s -X POST \
    -H "X-API-Key:$PORTAINER_API_TOKEN" \
    -H "Content-Type: application/json" \
    "https://$portainer_url/api/endpoints/$env_id/docker/exec/{}/start" \
    -d "{\"Detach\": false, \"Tty\": false}" > /dev/null

# Update paths for the Maven container (volume will be mounted at /data)
JACOCO_DATA_MOUNT="/data"
JACOCO_EXEC_MOUNT="$JACOCO_DATA_MOUNT/jacoco.exec"
JACOCO_XML_MOUNT="$JACOCO_DATA_MOUNT/jacoco.xml"
SOURCEFILES_MOUNT="$JACOCO_DATA_MOUNT/src"
CLASSFILES_MOUNT="$JACOCO_DATA_MOUNT/bin"

# Create Maven container to convert jacoco.exec to XML
TEMP_CONTAINER_ID=$(curl -s -X POST \
  -H "X-API-Key:$PORTAINER_API_TOKEN" \
  -H "Content-Type: application/json" \
  "https://$portainer_url/api/endpoints/$env_id/docker/containers/create" \
  -d "{
    \"Image\": \"maven:3.9-eclipse-temurin-17\",
    \"Cmd\": [\"sh\", \"-c\", \"apt-get update -qq && apt-get install -y -qq unzip > /dev/null 2>&1 && curl -fL https://repo1.maven.org/maven2/org/jacoco/jacoco/0.8.12/jacoco-0.8.12.zip -o /tmp/jacoco.zip && cd /tmp && unzip -q jacoco.zip && java -jar /tmp/lib/jacococli.jar report $JACOCO_EXEC_MOUNT --xml $JACOCO_XML_MOUNT --sourcefiles $SOURCEFILES_MOUNT --classfiles $CLASSFILES_MOUNT\"],
    \"HostConfig\": {
      \"Binds\": [\"${stack}_jacoco-data:$JACOCO_DATA_MOUNT\"]
    }
  }" | jq -r .Id)

if [ -z "$TEMP_CONTAINER_ID" ] || [ "$TEMP_CONTAINER_ID" = "null" ]; then
    echo "[sim-cicd] Failed to create container" >&2
    exit 1
fi

# Start container and wait for completion
curl -s -X POST \
  -H "X-API-Key:$PORTAINER_API_TOKEN" \
  "https://$portainer_url/api/endpoints/$env_id/docker/containers/$TEMP_CONTAINER_ID/start" > /dev/null

# Wait for container to finish
for i in $(seq 1 30); do
    STATUS=$(curl -s "https://$portainer_url/api/endpoints/$env_id/docker/containers/$TEMP_CONTAINER_ID/json" \
        -H "X-API-Key:$PORTAINER_API_TOKEN" \
        | jq -r .State.Status 2>/dev/null)
    [ "$STATUS" = "exited" ] && break
    sleep 1
done

# Check exit code
EXIT_CODE=$(curl -s "https://$portainer_url/api/endpoints/$env_id/docker/containers/$TEMP_CONTAINER_ID/json" \
    -H "X-API-Key:$PORTAINER_API_TOKEN" \
    | jq -r .State.ExitCode 2>/dev/null)

if [ "$EXIT_CODE" != "0" ]; then
    echo "[sim-cicd] Conversion failed (exit code: $EXIT_CODE)" >&2
    exit 1
fi

# Read XML file from volume
XML_CONTAINER_ID=$(curl -s -X POST \
  -H "X-API-Key:$PORTAINER_API_TOKEN" \
  -H "Content-Type: application/json" \
  "https://$portainer_url/api/endpoints/$env_id/docker/containers/create" \
  -d "{
    \"Image\": \"busybox\",
    \"Cmd\": [\"cat\", \"$JACOCO_XML_MOUNT\"],
    \"HostConfig\": {
      \"Binds\": [\"${stack}_jacoco-data:$JACOCO_DATA_MOUNT\"]
    }
  }" | jq -r .Id)

curl -s -X POST \
  -H "X-API-Key:$PORTAINER_API_TOKEN" \
  "https://$portainer_url/api/endpoints/$env_id/docker/containers/$XML_CONTAINER_ID/start" > /dev/null

sleep 1

# Decode Docker log format and save XML
TEMP_XML_LOG=$(mktemp)
curl -s \
  -H "X-API-Key:$PORTAINER_API_TOKEN" \
  "https://$portainer_url/api/endpoints/$env_id/docker/containers/$XML_CONTAINER_ID/logs?stdout=1" \
  > "$TEMP_XML_LOG"

perl -pe 'BEGIN { binmode STDIN; binmode STDOUT; } if (length >= 8) { $len = unpack("N", substr($_, 4, 4)); $_ = substr($_, 8, $len) if $len > 0 && $len <= length($_)-8; }' < "$TEMP_XML_LOG" > jacoco.xml 2>/dev/null
rm -f "$TEMP_XML_LOG"

# Clean up
curl -s -X DELETE \
  -H "X-API-Key:$PORTAINER_API_TOKEN" \
  "https://$portainer_url/api/endpoints/$env_id/docker/containers/$XML_CONTAINER_ID" > /dev/null

if [ ! -s jacoco.xml ]; then
    echo "[sim-cicd] Error: XML file is empty" >&2
    exit 1
fi

echo "[sim-cicd] Coverage report generated: jacoco.xml"