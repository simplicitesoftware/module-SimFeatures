#!/usr/bin/env bash

set -euo pipefail

# Default configuration (can be overridden via environment variables)
ENV_ID="${ENV_ID:-1}"

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

# sim_cicd_deploy_stack [stack_name] [compose_file]
# Creates a stack and waits for its container to be healthy.
sim_cicd_deploy_stack() {
  local name="${1:-$STACK_NAME}"
  local compose_file="${2:-portainer-stack.yml}"

  # Ensure tools are available (install if missing)
  _sim_cicd_require_tools

  # Check API token
  if [[ -z "$PORTAINER_API_TOKEN" ]]; then
    echo "[sim-cicd] PORTAINER_API_TOKEN is not set. Export it before running." >&2
    exit 1
  fi

  # Check compose file exists
  if [[ ! -f "$compose_file" ]]; then
    echo "[sim-cicd] Compose file not found: $compose_file" >&2
    exit 1
  fi

  # Create stack
  echo "[sim-cicd] Creating stack '$name' on $PORTAINER_URL (endpoint $ENV_ID) from $compose_file..."
  curl -v -X POST "https://$PORTAINER_URL/api/stacks/create/standalone/file?endpointId=$ENV_ID" \
    -H "X-API-Key:$PORTAINER_API_TOKEN" \
    -F "Name=$name" \
    -F "file=@$compose_file"

  # Get container ID
  local container_id
  container_id=$(curl -s \
    -H "X-API-Key:$PORTAINER_API_TOKEN" \
    "https://$PORTAINER_URL/api/endpoints/$ENV_ID/docker/containers/json?all=1" \
    | jq -r ".[] | select(.Labels[\"com.docker.compose.project\"]==\"$name\") | .Id" | head -n 1)

  if [[ -z "$container_id" ]]; then
    echo "[sim-cicd] No container found for stack '$name'" >&2
    exit 1
  fi

  # Wait for container to be healthy
  local interval=3
  local elapsed=0
  while true; do
    local status
    status=$(curl -s \
      -H "X-API-Key:$PORTAINER_API_TOKEN" \
      "https://$PORTAINER_URL/api/endpoints/$ENV_ID/docker/containers/$container_id/json" \
      | jq -r ".State | .Health | .Status")

    elapsed=$((elapsed + interval))

    if [[ "$status" == "healthy" ]]; then
      echo "[sim-cicd] Container is healthy after ${elapsed}s!"
      break
    elif [[ "$status" == "unhealthy" ]]; then
      echo "[sim-cicd] Container is unhealthy after ${elapsed}s!" >&2
      exit 1
    else
      echo "[sim-cicd] Waiting for container health check... (current: ${status:-starting} - ${elapsed}s)"
      sleep "$interval"
    fi
  done
}
