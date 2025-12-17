#!/usr/bin/env bash

set -euo pipefail

# Default configuration (can be overridden via environment variables)
ENV_ID="${ENV_ID:-1}"

# sim_cicd_deploy_stack [stack_name] [compose_file]
# Creates a stack and waits for its container to be healthy.
sim_cicd_deploy_stack() {
  local name="${1:-$STACK_NAME}"
  local compose_file="${2:-portainer-stack.yml}"

  # Check required tools
  for cmd in curl jq; do
    if ! command -v "$cmd" >/dev/null 2>&1; then
      echo "[sim-cicd] Missing required command: $cmd" >&2
      exit 1
    fi
  done

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
  curl -s -X POST "https://$PORTAINER_URL/api/stacks/create/standalone/file?endpointId=$ENV_ID" \
    -H "X-API-Key:$PORTAINER_API_TOKEN" \
    -F "Name=$name" \
    -F "file=@$compose_file" >/dev/null

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
