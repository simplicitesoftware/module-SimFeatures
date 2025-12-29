portainer_server=${args[portainer_server]}
stack=${args[stack]}
env_id=${args[--environment]}

portainer_url="portainer.$portainer_server"

echo "[sim-cicd] === GET FILE FROM PORTAINER STACK"

simci_portainer_stack_stop_command "$stack" "$portainer_server" "$env_id" ""

# Retrieve volume's file using a temporary busybox container
CONTAINER_ID=$(curl -s -X POST \
  -H "X-API-Key:$PORTAINER_API_TOKEN" \
  -H "Content-Type: application/json" \
  "https://$portainer_url/api/endpoints/$env_id/docker/containers/create" \
  -d "{
    \"Image\": \"busybox\",
    \"Cmd\": [\"cat\", \"/data/jacoco.exec\"],
    \"HostConfig\": {
      \"Binds\": [\"${stack}_jacoco-data:/data\"]
    }
  }" | jq -r .Id)

echo $CONTAINER_ID

curl -s -X POST \
  -H "X-API-Key:$PORTAINER_API_TOKEN" \
  "https://$portainer_url/api/endpoints/$env_id/docker/containers/$CONTAINER_ID/start"

curl -s \
  -H "X-API-Key:$PORTAINER_API_TOKEN" \
  "https://$portainer_url/api/endpoints/$env_id/docker/containers/$CONTAINER_ID/logs?stdout=1" \
  > jacoco.exec

curl -s -X DELETE \
  -H "X-API-Key:$PORTAINER_API_TOKEN" \
  "https://$portainer_url/api/endpoints/$env_id/docker/containers/$CONTAINER_ID"

simci_portainer_stack_start_command "$stack" "$portainer_server" "$env_id" ""