#### Continuous integration training for Epitech
- Log into your cloud9 development environment

##### 1-Dockerfile creation
> Create a Dockerfile for the app located in server.js
  - The listening port is 80
  - The main script is server.js

##### 2-Dockerfile build
> Build this dockerfile
  - The name of the built image must be login/epitech-ci-training

##### 3-Launching the image as a container
> Instanciate the image
  - This container must be started as a daemon

##### 4-Changing the way of starting the container
> server.js became app.js
  - build the dockerfile in the entrypoint directory
  - You are not allowed to create or edit the Dockerfile
  - Launch the image to test if it's working
  
> hint 1: entrypoint and cmd

> hint 2: the OPS that created the Dockerfile could have made mistakes
  
##### 5-Push the image to your personal account on dockerhub
> Figure it out

##### 6-By using Jest write integration tests for each route of the app.js file
> https://www.npmjs.com/package/jest
> https://www.npmjs.com/package/supertest
> Sample unit and integration tests can be found in the tests folder

##### 6.5-Compose
> Theory: docker-compose

> Edit the docker-compose.yml file located in the docker-compose directory in order to make it build our app

> https://docs.docker.com/compose/compose-file/

##### 6.6-Data access
> Use the sequelize ORM to access a mysql database: https://sequelize.org/

> Create a user module with the following methods:
    - Create
    - Read 
    - Update
    - Delete

##### 7-Let's create our pipelines of CI together
> Theory: CPHP presentation

> the trainer will create a public repository for our class

> the trainer will assist you in the creation of your personal pipeline

> create a script, ran into a test activity, that will build your app and execute the unit tests

> remember we are already inside our container

##### 8-Let's collaborate ! (and collide)
> Theory: Git flow

> The trainer will create the branch and restrictions needed for your git flow usage

> Random tasks will be assigned to you

##### 9-Integration testing
> Theory: Integration testing

> The trainer will add a mysql container to your pipeline

> Create a simple bash script, connecting to this mysql container after the execution of your unit tests
