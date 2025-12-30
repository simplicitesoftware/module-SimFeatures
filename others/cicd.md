CI/CD
=====

Let's configure CI/CD for the SimFeatures module.

Target infrastructure:

- github/gitlab
- portainer to run containers

History
-------

1. deploy Portainer stack
    - through CLI
        - stack webhook not usable in community edition, let's try API
        - works, plus implemente health check with docker API through portainer
    - through gitlab job
        - started a tool for common CICD+portainer jobs (sim-cicd.sh)
        - works
    - delete stack if exists before pipeline
2. Unit tests
    - added dummy dataset and junit test to SimFeature
    - add IO_PASSWORD env to stack to call instance
    - fixed dataset
    - run from CLI, then gitlab job
    - TODO check job KO when test KO
3. Sonar
    - added sonar project to soncarcloud org
    - added sonar config to module config on SimpFeatures 7.0
    - add sonarcloud analysis
    - fixed various checkstyle violations
    - TODO check job KO when gates fail
4. Jacoco
    - update stack
    - managed to get xml
    - had to update module conf to NOT exclude java files from coverage analysis
5. Playright
    - TODO !
6. Sonar report artifact
