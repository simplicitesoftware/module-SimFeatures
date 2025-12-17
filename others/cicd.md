CI/CD
=====

Let's configure CI/CD for the SimFeatures module.

Target infrastructure:

- github/gitlab
- portainer to run containers

Step 1: deploy a portainer stack
---------------------------------

- stack wabhook not usable in community edition, let's try API
- works, plus implemente health check with docker API through portainer

Step 2: deploy portainer stack from gitlab job
----------------------------------------------

