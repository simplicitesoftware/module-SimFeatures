#!/bin/bash

STACK_NAME="curl-test"
MODULE_NAME="SimFeatures"
source .env.local

# Update bashly command
curl -O https://raw.githubusercontent.com/simplicitesoftware/simci/refs/heads/main/simci
chmod +x simci

# Test manually
export PORTAINER_API_TOKEN="${PORTAINER_API_TOKEN}"
export IO_PASSWORD="${IO_PASSWORD}"

# ./simci portainer-stack-get-id -v $STACK_NAME $PORTAINER_SERVER
# ./simci portainer-stack-delete $STACK_NAME $PORTAINER_SERVER
./simci portainer-stack-deploy -f portainer-stack.yml $STACK_NAME $PORTAINER_SERVER
# # # ./simci portainer-stack-start -v $STACK_NAME $PORTAINER_SERVER
# #sleep 30
# ./simci simplicite-run-unit-tests $MODULE_NAME $STACK_NAME $PORTAINER_SERVER
# #./simci portainer-stack-get-file -v $STACK_NAME $PORTAINER_SERVER
# ./simci portainer-stack-get-coverage -v $STACK_NAME $PORTAINER_SERVER