import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'
import { appConfigOptions } from './config/app.config'
import { ormConfigOptions } from './config/orm.config'

@Module({
  imports: [
    // load config first, so that all envs are parsed
    ConfigModule.forRoot(appConfigOptions),
    // wait for db connect before load other modules
    TypeOrmModule.forRootAsync({
      useFactory: () => ormConfigOptions,
    }),
    // load all other modules here
  ],
  controllers: [],
  providers: [],
  //
})
export class AppModule {}
