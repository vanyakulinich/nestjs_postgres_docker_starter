import { ConnectionOptions } from 'typeorm'

export const ormConfigOptions = {
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: parseInt(process.env.POSTGRES_PORT),
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  synchronize: process.env.NODE_ENV === 'development', // DO NOT set this to true for production
  logging: true,
  autoLoadEntities: true, // instead of => entities: [`${__dirname}/**/*.entity.*`]
} as ConnectionOptions
