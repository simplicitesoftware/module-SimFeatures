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
./sim-cicd/simci deploy-portainer-stack -f portainer-stack.yml $STACK_NAME $PORTAINER_SERVER
./sim-cicd/simci run-unit-tests $MODULE_NAME $STACK_NAME $PORTAINER_SERVER
