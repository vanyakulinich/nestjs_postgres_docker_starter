import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TestdataController } from './testdata.controller';
import { TestdataService } from './testdata.service';
import { TestData } from './testdata.entity';

// test module
@Module({
  imports: [TypeOrmModule.forFeature([TestData])],
  controllers: [TestdataController],
  providers: [TestdataService],
})
export class TestdataModule {}
