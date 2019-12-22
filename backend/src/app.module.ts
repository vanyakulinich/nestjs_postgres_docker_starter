import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import ORM_CONFIG from '../config/orm.config';
// Test module for example
import { TestdataModule } from './testdata/testdata.module';

@Module({
  imports: [TypeOrmModule.forRoot(ORM_CONFIG), TestdataModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
