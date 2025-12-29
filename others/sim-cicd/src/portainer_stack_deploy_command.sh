portainer_server=${args[portainer_server]}
portainer_url="portainer.$portainer_server"
stack=${args[stack]}
compose_file=${args[--file]}
env_id=${args[--environment]}

echo "[sim-cicd] === DEPLOY PORTAINER STACK"
# Create stack
echo "[sim-cicd] Creating stack '$stack' on $portainer_url (endpoint $env_id) from $compose_file..."
curl -s -X POST "https://$portainer_url/api/stacks/create/standalone/file?endpointId=$env_id" \
    -H "X-API-Key:$PORTAINER_API_TOKEN" \
    -F "Name=$stack" \
    -F "Env=[{\"name\":\"IO_PASSWORD\",\"value\":\"$IO_PASSWORD\"}]" \
    -F "file=@$compose_file"

# Get container ID
local container_id
container_id=$(curl -s "https://$portainer_url/api/endpoints/$env_id/docker/containers/json?all=1" \
    -H "X-API-Key:$PORTAINER_API_TOKEN" \
    | jq -r ".[] | select(.Labels[\"com.docker.compose.project\"]==\"$stack\") | .Id" | head -n 1)

if [[ -z "$container_id" ]]; then
    echo "[sim-cicd] No container found for stack '$stack'" >&2
    exit 1
fi

# Wait for container to be healthy
if ! _sim_cicd_wait_for_container_health "$portainer_url" "$env_id" "$container_id"; then
    exit 1
fi