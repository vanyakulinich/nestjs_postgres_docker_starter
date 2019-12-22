require('dotenv').config({ path: './docker/.devconfig.env' });

const { DB_HOST, DB_PORT, DB_USER, DB_NAME, DB_PW } = process.env;
module.exports = [
  {
    type: 'postgres',
    host: DB_HOST,
    port: DB_PORT,
    username: DB_USER,
    password: DB_PW,
    database: DB_NAME,
    autoSchemaSync: true,
    entities: [`./**/*.entity{.ts,.js}`],
    migrations: ['src/migration/*.ts'],
    cli: {
      migrationsDir: 'src/migration',
    },
  },
];
