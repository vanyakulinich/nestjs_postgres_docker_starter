import { Module } from '@nestjs/common'
import { UsersModule } from './users/users.module'
import { ConfigModule } from './config/config.module'

@Module({
  imports: [
    ConfigModule,
    UsersModule,
    // load all other modules here
  ],
})
export class AppModule {}
