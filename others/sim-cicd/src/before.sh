# Ensure required tools are installed (curl, jq)
_sim_cicd_require_tools() {
  local install_cmd
  for cmd in curl jq; do
    if ! command -v "$cmd" >/dev/null 2>&1; then
      echo "[sim-cicd] Missing required command: $cmd, attempting to install..."
      
      # Detect package manager and install
      if command -v apt-get >/dev/null 2>&1; then
        install_cmd="apt-get update -qq && apt-get install -y $cmd"
      elif command -v yum >/dev/null 2>&1; then
        install_cmd="yum install -y $cmd"
      elif command -v dnf >/dev/null 2>&1; then
        install_cmd="dnf install -y $cmd"
      elif command -v apk >/dev/null 2>&1; then
        install_cmd="apk add --no-cache $cmd"
      elif command -v brew >/dev/null 2>&1; then
        install_cmd="brew install $cmd"
      else
        echo "[sim-cicd] Could not detect package manager to install $cmd" >&2
        exit 1
      fi
      
      if eval "$install_cmd"; then
        echo "[sim-cicd] Successfully installed $cmd"
      else
        echo "[sim-cicd] Failed to install $cmd" >&2
        exit 1
      fi
    fi
  done

  return 0
}

# Wait for container to be healthy
_sim_cicd_wait_for_container_health() {
  local portainer_url="$1"
  local env_id="$2"
  local container_id="$3"
  local interval="${4:-3}"
  local max_wait="${5:-300}"
  
  local elapsed=0
  while [ $elapsed -lt $max_wait ]; do
    local status
    status=$(curl -s "https://$portainer_url/api/endpoints/$env_id/docker/containers/$container_id/json" \
        -H "X-API-Key:$PORTAINER_API_TOKEN" \
        | jq -r ".State | .Health | .Status" 2>/dev/null)
    
    if [ "$status" = "healthy" ]; then
      echo "[sim-cicd] Container is healthy after ${elapsed}s!"
      return 0
    elif [ "$status" = "unhealthy" ]; then
      echo "[sim-cicd] Container is unhealthy after ${elapsed}s!" >&2
      return 1
    fi
    
    echo "[sim-cicd] Waiting for container health check... (current: ${status:-starting} - ${elapsed}s)"
    sleep "$interval"
    elapsed=$((elapsed + interval))
  done
  
  echo "[sim-cicd] Timeout waiting for container to become healthy (${elapsed}s)" >&2
  return 1
}

_sim_cicd_require_tools
