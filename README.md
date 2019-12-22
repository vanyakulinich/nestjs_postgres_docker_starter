# NEST.js + PostgeSQL development template with Docker

### How it works:

This template includes Nest.js backend and PostgreSQL database. Both are started in separate docker containers, connected between each other and are configured for further development. You don't need to have postgres at your machine, it will start in container from dockerhub image. This template uses Postges 10. The containers are managed by docker-compose. This template includes configuration only for development, it is up to you to add production configuration.

### How to start:

#### You need to have docker and docker-compose installed on your machine.

To start containers:

```bash
bash start_dev.sh
```

To stop containers:

```bash
bash stop_dev.sh
```

To rebuild containers in dev mode:

```bash
bash rebuild_dev_containers.sh
```

To test database connection when containers are started:

```bash
bash test_db_connection.sh
```

### How to use:

When containers are started, you will have:

- nest.js backend server on localhost:3000
  - server has test route /testdata as an example(check /backend/src)
- postges connection on localhost:54320 to access via any GUI interface(e.g. pgAdmin)
- hot-reload of nest backend

### Migrations:

In development mode, migrations are automatically applied. Check "synchronize" parameter in /backend/config/orm.config.ts. In production mode it is strongly recommended to set "synchronize" parameter to false, to avoid potential data loss. In production mode, make and apply migrations manually. As server is in docker container, you need to run migrations commands from inside container:

```bash
# generate migration
docker exec -it [CONTAINER NAME OR ID] yarn migrate:generate [NAME OF MIGRATION]

# run migration
docker exec -it [CONTAINER NAME OR ID] yarn migrate
```

Containers names can be found and modified in .yml file.

### TODO:

- [x] Production configuration (it is up to you, how to configure)
