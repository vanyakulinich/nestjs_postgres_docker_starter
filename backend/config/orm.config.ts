import { ConnectionOptions } from 'typeorm';

const { DB_HOST, DB_PORT, DB_USER, DB_NAME, DB_PW } = process.env;
const ORM_CONFIG = {
  type: 'postgres',
  host: DB_HOST,
  port: parseInt(DB_PORT, 10),
  username: DB_USER,
  password: DB_PW,
  database: DB_NAME,
  synchronize: true, // set this to false for production. To use migrations in production, do it manually(read docs in README.md)
  logging: true,
  entities: [`${__dirname}/../**/*.entity.*`],
} as ConnectionOptions;

export default ORM_CONFIG;
