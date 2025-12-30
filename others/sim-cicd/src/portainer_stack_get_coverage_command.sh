portainer_server=${args[portainer_server]}
stack=${args[stack]}
env_id=${args[--environment]}

portainer_url="portainer.$portainer_server"
instance="$stack.$portainer_server"

echo "[sim-cicd] === GET COVERAGE FROM PORTAINER STACK"

# Get the main container ID from the stack
CONTAINER_ID=$(curl -s "https://$portainer_url/api/endpoints/$env_id/docker/containers/json?all=1" \
    -H "X-API-Key:$PORTAINER_API_TOKEN" \
    | jq -r ".[] | select(.Labels[\"com.docker.compose.project\"]==\"$stack\") | .Id" | head -n 1)

if [ -z "$CONTAINER_ID" ]; then
    echo "[sim-cicd] No container found for stack '$stack'" >&2
    exit 1
fi

# Restart container
curl -s -X POST "https://$portainer_url/api/endpoints/$env_id/docker/containers/$CONTAINER_ID/restart" \
    -H "X-API-Key:$PORTAINER_API_TOKEN"

# Wait for container to be healthy
if ! _sim_cicd_wait_for_container_health "$portainer_url" "$env_id" "$CONTAINER_ID"; then
    exit 1
fi

curl https://$instance/content/jacoco/jacoco.xml > jacoco.xml