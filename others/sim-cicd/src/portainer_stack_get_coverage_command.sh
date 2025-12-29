portainer_server=${args[portainer_server]}
stack=${args[stack]}
env_id=${args[--environment]}

portainer_url="portainer.$portainer_server"
instance="$stack.$portainer_server"

echo "[sim-cicd] === GET COVERAGE FROM PORTAINER STACK"

simci_portainer_stack_stop_command "$stack" "$portainer_server" "$env_id" ""
simci_portainer_stack_start_command "$stack" "$portainer_server" "$env_id" ""

curl -fL $instance/content/jacoco/jacoco.xml > jacoco.xml