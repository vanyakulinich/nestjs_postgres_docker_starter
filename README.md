## NestJS + PostgreSQL + Docker Starter Template

### Description

Starter Template for building apps with Nest.js backend and PostgreSQL database, wrapped in docker containers.<br/>
Use "whatever" framework for frontend - just add container to docker-compose files.<br/>
Main purpose of this starter is to save developers time, which is usually spend on creating basic skeletons, configs and getting all together when building the apps.

### What's inside

- [x] PostgreSQL local database
- [x] Nest.js as backend server
- [x] Environments are splitted (development/production)
- [x] Configs setup
- [x] Some basic backend examples(module+service+controller+entity)
- [x] Git hooks support (pre-commit + commit-msg)
- [x] Conventional Commits Support
- [x] Docker + docker-compose configs
- [x] Bash scripts for one-command docker launch
- [x] Pm2 support for production
- [x] Migrations support for production

### Before use

##### Envs

You need to setup envs before using the starter.<br/>
Envs should be divided into development and production:<br/>

1. Set up envs for postgres database:

```bash
  # navigate to docker folder
  cd docker/
  # create .env files
  touch .env.database.dev
  touch .env.database.prod
  # check .env.database.example for envs names
```

2. Set up envs for nestjs backend:

```bash
  # navigate to backend folder
  cd backend/
  # create .env files
  touch .env.development
  touch .env.production
  # check .env.example for envs names
```

##### Git Hooks

Starter has git hooks support and alrady has pre-commit and commit hooks added:

- pre-commit hook start eslint check on backend. if eslint fails, the commit won't happen with errors logs output and tip what to do. Hooks can be updated to add some actions, e.g. eslint for possible frontend.
- commit-msg hook checks if the commit message corresponds with conventional commits. Starter uses [git-conventional-commits](https://github.com/qoomon/git-conventional-commits). Please check it's docs and modify settings if needed.<br/>
  NOTE: <br/>
  To use conventional commits:

```bash
  # install package
  npm install --global git-conventional-commits

  # give access to hooks files to make it work
  chmod +x .git-hooks/commit-msg
  chmod +x .git-hooks/pre-commit

```

### How to use

Starter has 2 docker containers - one for database and one for backend. All configs are set up. Everything can be started via bash scripts with one-line commands.<br/>
Note: you may need "sudo" for bash.

- Development mode:<br/>

  ```bash
    # navigate to scripts/ folder
    cd scripts/
    #(re-)build containers in dev mode. Not neccessary for the 1st start
    [sudo] bash build_dev.sh
    #to start containers in dev mode
    [sudo] bash start_dev.sh
    #to start containers in dev mode
    [sudo] bash stop_dev.sh
  ```

  NOTE:<br/>
  In dev mode migrations are applied automatically via synchronize

- Production mode: <br/>

  ```bash
    # navigate to scripts/ folder
    cd scripts/
    #(re-)build containers in prod mode. Not neccessary for the 1st start
    [sudo] bash build_prod.sh
    #to start containers in prod mode
    [sudo] bash start_prod.sh
    #stop containers
    [sudo] bash stop_prod.sh
  ```

  NOTE:<br/>
  In production mode migrations are generated via typeorm cli together with the server launch when launching containers. No need to create or generate it manually before launch of server, everything can be done automatically via bash script that launches containers.

### What's next

Main purpose of this starter template is to rid developers of creating the basic projects skeleton and spending a lot of time with setting up basic projects configs.<br/>
Feel free to use this starter template for building own apps, modify it as you need and actually change it whatever you like to fit your project demands.
