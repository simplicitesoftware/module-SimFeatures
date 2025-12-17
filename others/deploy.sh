#!/bin/bash

PORTAINER_URL="portainer.sca.simplicite.io"
ENV_ID=1
PORTAINER_API_TOKEN="ptr_ez1gqDCpFgADiOIYf717VwJNBnDhuqqVR6tV/+Kmue8="
STACK_NAME="curl-test"

# Source the sim-cicd functions
source "$(dirname "$0")/sim-cicd.sh"

# Deploy the stack
sim_cicd_deploy_stack "$STACK_NAME" "portainer-stack.yml"
