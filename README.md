# To run database locally

1. Install [docker](https://docs.docker.com/get-docker/)

2. `docker build -t [YOUR-TAG-NAME] .`

   - This will build an image locally.

3. `docker run -p 5432:5432 getting-started`

   - This will run your image locally on port 5432. Add -d to run in detached mode.

4. Open docker desktop to view your containers and images. If the run command fails try deleting your existing infra first.

5. Install [pgAdmin 4](https://www.pgadmin.org/download/) to run SQL queries.
