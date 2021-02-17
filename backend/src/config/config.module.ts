import * as dotenv from 'dotenv'
import * as path from 'path'
import { Module } from '@nestjs/common'
import { ConfigModule as NestConfigModule, ConfigService } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'
import { appConfig } from './app.config'
import { databaseConfig } from './database.config'
import { createValidationSchema } from './validation.schema'

dotenv.config({
  path: path.resolve(`.env.${process.env.NODE_ENV || 'development'}`),
})

@Module({
  imports: [
    NestConfigModule.forRoot({
      isGlobal: true,
      load: [appConfig, databaseConfig],
      validationSchema: createValidationSchema(),
    }),

    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService) => ({
        type: 'postgres',
        host: configService.get('database.host'),
        port: configService.get('database.port'),
        username: configService.get('database.username'),
        password: configService.get('database.password'),
        database: configService.get('database.name'),
        synchronize: configService.get('app.nodeEnv') === 'development', // DO NOT set this to true for production
        logging: true,
        autoLoadEntities: true, // instead of => entities: [`${__dirname}/**/*.entity.*`]
      }),
    }),
  ],
})
export class ConfigModule {}
