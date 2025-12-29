portainer_server=${args[portainer_server]}
portainer_url="portainer.$portainer_server"
stack=${args[stack]}
env_id=${args[--environment]}
verbose=${args[--verbose]}

if [ -n "$verbose" ]; then
    echo "[sim-cicd] === STOP PORTAINER STACK"
    echo "[sim-cicd] Getting stacks on $portainer_url (endpoint $env_id)."
fi

# Get stack ID (non-verbose mode - no --verbose flag)
stack_id=$("$0" portainer-stack-get-id --environment "$env_id" "$stack" "$portainer_server" 2>/dev/null || true)

if [ -z "$stack_id" ] || [ "$stack_id" = "null" ]; then
    if [ -n "$verbose" ]; then
        echo "[sim-cicd] Stack '$stack' not found. Nothing to stop."
    fi
else
    if [ -n "$verbose" ]; then
        echo "[sim-cicd] $stack's ID found: $stack_id => Stopping stack..."
    fi
    curl -s -X POST "https://$portainer_url/api/stacks/$stack_id/stop?endpointId=$env_id" \
        -H "X-API-Key:$PORTAINER_API_TOKEN"
    if [ -n "$verbose" ]; then
        echo "[sim-cicd] Stack stopped successfully."
    fi
fi