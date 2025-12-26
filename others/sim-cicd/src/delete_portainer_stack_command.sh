portainer_server=${args[portainer_server]}
portainer_url="portainer.$portainer_server"
stack=${args[stack]}
env_id=${args[--environment]}


echo "[sim-cicd] === DELETE PORTAINER STACK"
echo "[sim-cicd] Getting stacks on $portainer_url (endpoint $env_id)."
stacks=$(curl -s -G "https://$portainer_url/api/stacks" \
    -H "X-API-Key:$PORTAINER_API_TOKEN" \
    -d "filter={'EndpointID':$env_id}")
stack_id=$(jq -r --arg s "$stack" '.[] | select(.Name==$s) | .Id' <<<"$stacks")

if [ -z "$stack_id" ] || [ "$stack_id" = "null" ]; then
    echo "[sim-cicd] Stack '$stack' not found. Nothing to delete."
else
    echo "[sim-cicd] $stack's ID found: $stack_id => Deleting stack..."
    curl -s -X DELETE "https://$portainer_url/api/stacks/$stack_id?endpointId=$env_id" \
        -H "X-API-Key:$PORTAINER_API_TOKEN"
fi