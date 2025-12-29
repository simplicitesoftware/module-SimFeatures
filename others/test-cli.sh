#!/bin/bash

STACK_NAME="curl-test"
MODULE_NAME="SimFeatures"
source .env.local

# Update bashly command
cd sim-cicd
bashly generate
cd ..

# Test manually
export PORTAINER_API_TOKEN="${PORTAINER_API_TOKEN}"
export IO_PASSWORD="${IO_PASSWORD}"

# ./sim-cicd/simci portainer-stack-get-id -v $STACK_NAME $PORTAINER_SERVER
# ./sim-cicd/simci portainer-stack-delete $STACK_NAME $PORTAINER_SERVER
# ./sim-cicd/simci portainer-stack-deploy -f portainer-stack.yml $STACK_NAME $PORTAINER_SERVER
# ./sim-cicd/simci portainer-stack-start -v $STACK_NAME $PORTAINER_SERVER
# ./sim-cicd/simci simplicite-run-unit-tests $MODULE_NAME $STACK_NAME $PORTAINER_SERVER
#./sim-cicd/simci portainer-stack-get-file -v $STACK_NAME $PORTAINER_SERVER
./sim-cicd/simci portainer-stack-get-coverage -v $STACK_NAME $PORTAINER_SERVER