CI/CD
=====

Let's configure CI/CD for the SimFeatures module.

Target infrastructure:

- github/gitlab
- portainer to run containers

History
-------

1. [17/12/25] deploy a portainer stack through bash
    - stack webhook not usable in community edition, let's try API
    - works, plus implemente health check with docker API through portainer
2. deploy portainer stack from gitlab job
    - started a tool for common CICD+portainer jobs (sim-cicd.sh)
    - works
3. [18/12/25] check unit tests
    - added dummy dataset and junit test to SimFeature
    - add IO_PASSWORD env to stack to call instance