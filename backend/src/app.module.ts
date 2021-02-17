import { Module } from '@nestjs/common'
import { UserModule } from './user/user.module'
import { ConfigModule } from './config/config.module'
import { CommonModule } from './common/common.module'

@Module({
  imports: [
    ConfigModule,
    UserModule,
    CommonModule,
    // load all other modules here
  ],
})
export class AppModule {}
