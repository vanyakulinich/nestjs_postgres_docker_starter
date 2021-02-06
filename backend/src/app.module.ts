import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'
import { createAppConfigOptions } from './config/app.config'
import { createOrmConfigOptions } from './config/orm.config'
import { UsersModule } from './users/users.module'

@Module({
  imports: [
    // load config first, so that all envs are parsed
    ConfigModule.forRoot(createAppConfigOptions()),
    // wait for db connect before load other modules
    TypeOrmModule.forRootAsync({
      useFactory: () => createOrmConfigOptions(),
    }),
    // load all other modules here
    //  Users module is added as an example
    UsersModule, // EXAMPLE MODULE
  ],
  controllers: [],
  providers: [],
  //
})
export class AppModule {}
