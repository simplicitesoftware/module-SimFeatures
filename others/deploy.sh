#!/bin/bash

PORTAINER_URL=""
ENV_ID=1
PORTAINER_API_TOKEN=""
STACK_NAME="curl-test"

# debug auth
# curl -s -H "X-API-Key:$PORTAINER_API_TOKEN" https://$PORTAINER_URL/api/stacks | jq

# Create a new stack
STACK_CREATE=$(curl -s -X POST https://$PORTAINER_URL/api/stacks/create/standalone/file?endpointId=$ENV_ID \
    -H "X-API-Key:$PORTAINER_API_TOKEN" \
    -F "Name=$STACK_NAME" \
    -F "file=@portainer-stack.yml")

# Get the image ID
IMAGE_ID=$(curl -s \
    -H "X-API-Key:$PORTAINER_API_TOKEN" \
    "https://$PORTAINER_URL/api/endpoints/$ENV_ID/docker/containers/json?all=1" \
    | jq -r ".[] | select(.Labels[\"com.docker.compose.project\"]==\"$STACK_NAME\") | .Id")

INTERVAL=3
ELAPSED=0
while true; do
    IMAGE_HEALTH=$(curl -s \
        -H "X-API-Key:$PORTAINER_API_TOKEN" \
        "https://$PORTAINER_URL/api/endpoints/$ENV_ID/docker/containers/$IMAGE_ID/json" \
        | jq -r ".State | .Health | .Status")
    ELAPSED=$((ELAPSED + INTERVAL))
    if [[ "$IMAGE_HEALTH" == "healthy" ]]; then
        echo "Container is healthy!"
        break
    elif [[ "$IMAGE_HEALTH" == "unhealthy" ]]; then
        echo "Container is unhealthy!" >&2
        exit 1
    else
        echo "Waiting for container health check... (current: ${IMAGE_HEALTH:-starting} - ${ELAPSED}s)"
        sleep $INTERVAL
    fi
done
