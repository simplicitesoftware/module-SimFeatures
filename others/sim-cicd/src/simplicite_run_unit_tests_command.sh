portainer_server=${args[portainer_server]}
stack=${args[stack]}
instance="$stack.$portainer_server"
module=${args[module]}

echo "[sim-cicd] === RUN UNIT TESTS"
curl -s -u designer:$IO_PASSWORD --form service=unittests --form module=$module https://$instance/io