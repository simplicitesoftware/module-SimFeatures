portainer_server=${args[portainer_server]}
portainer_url="portainer.$portainer_server"
stack=${args[stack]}
env_id=${args[--environment]}
verbose=${args[--verbose]}

if [ -n "$verbose" ]; then
    echo "[sim-cicd] === START PORTAINER STACK"
    echo "[sim-cicd] Getting stacks on $portainer_url (endpoint $env_id)."
fi

# Get stack ID (non-verbose mode - no --verbose flag)
stack_id=$("$0" portainer-stack-get-id --environment "$env_id" "$stack" "$portainer_server" 2>/dev/null || true)

if [ -z "$stack_id" ] || [ "$stack_id" = "null" ]; then
    if [ -n "$verbose" ]; then
        echo "[sim-cicd] Stack '$stack' not found. Nothing to start."
    fi
else
    if [ -n "$verbose" ]; then
        echo "[sim-cicd] $stack's ID found: $stack_id => Starting stack..."
    fi
    curl -s -X POST "https://$portainer_url/api/stacks/$stack_id/start?endpointId=$env_id" \
        -H "X-API-Key:$PORTAINER_API_TOKEN" > /dev/null
    
    # Get container ID and wait for health
    container_id=$(curl -s "https://$portainer_url/api/endpoints/$env_id/docker/containers/json?all=1" \
        -H "X-API-Key:$PORTAINER_API_TOKEN" \
        | jq -r ".[] | select(.Labels[\"com.docker.compose.project\"]==\"$stack\") | .Id" | head -n 1)
    
    if [ -n "$container_id" ]; then
        if [ -n "$verbose" ]; then
            echo "[sim-cicd] Waiting for container to be healthy..."
        fi
        if ! _sim_cicd_wait_for_container_health "$portainer_url" "$env_id" "$container_id"; then
            exit 1
        fi
    fi
    
    if [ -n "$verbose" ]; then
        echo "[sim-cicd] Stack started successfully."
    fi
fi