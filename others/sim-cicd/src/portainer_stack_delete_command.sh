portainer_server=${args[portainer_server]}
portainer_url="portainer.$portainer_server"
stack=${args[stack]}
env_id=${args[--environment]}

echo "[sim-cicd] === DELETE PORTAINER STACK"
# Get stack ID using shared function (non-verbose mode)
stack_id=$("$0" portainer-stack-get-id --environment "$env_id" "$stack" "$portainer_server" 2>/dev/null || true)

if [ -z "$stack_id" ] || [ "$stack_id" = "null" ]; then
    echo "[sim-cicd] Stack '$stack' not found. Nothing to delete."
else
    echo "[sim-cicd] $stack's ID found: $stack_id => Deleting stack..."
    curl -s -X DELETE "https://$portainer_url/api/stacks/$stack_id?endpointId=$env_id" \
        -H "X-API-Key:$PORTAINER_API_TOKEN"
fi