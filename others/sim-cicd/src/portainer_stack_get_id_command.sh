portainer_server=${args[portainer_server]}
portainer_url="portainer.$portainer_server"
stack=${args[stack]}
env_id=${args[--environment]}
verbose=${args[--verbose]}

if [ -n "$verbose" ]; then
    echo "[sim-cicd] === GET PORTAINER STACK ID"
    echo "[sim-cicd] Getting stacks on $portainer_url (endpoint $env_id)."
fi

stacks=$(curl -s -G "https://$portainer_url/api/stacks" \
    -H "X-API-Key:$PORTAINER_API_TOKEN" \
    -d "filter={'EndpointID':$env_id}")
stack_id=$(jq -r --arg s "$stack" '.[] | select(.Name==$s) | .Id' <<<"$stacks")

if [ -z "$stack_id" ] || [ "$stack_id" = "null" ]; then
    if [ -n "$verbose" ]; then
        echo "[sim-cicd] Stack '$stack' not found."
    fi
    exit 1
else
    if [ -n "$verbose" ]; then
        echo "[sim-cicd] $stack's ID found: $stack_id"
    else
        echo "$stack_id"
    fi
fi