#!/bin/bash

PORTAINER_SERVER="sca.simplicite.io"
PORTAINER_API_TOKEN="ptr_ez1gqDCpFgADiOIYf717VwJNBnDhuqqVR6tV/+Kmue8="
STACK_NAME="curl-test"
IO_PASSWORD="R1xUATk7i39osda1yCxpO1Awvry99OP0c"

export PORTAINER_API_TOKEN="${PORTAINER_API_TOKEN}"
export IO_PASSWORD="${IO_PASSWORD}"
./sim-cicd/simci deploy-portainer-stack -n $STACK_NAME -f portainer-stack.yml $PORTAINER_SERVER