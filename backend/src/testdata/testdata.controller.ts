import { Controller, Get, Post, Put } from '@nestjs/common';
import { TestdataService } from './testdata.service';
import { TestData } from './testdata.entity';

// test controller
@Controller('testdata')
export class TestdataController {
  constructor(private readonly testdataService: TestdataService) {}
  @Get()
  fetchTestData(): Promise<TestData[]> {
    return this.testdataService.getTestData();
  }

  @Post()
  createTestData() {
    return this.testdataService.createTestData();
  }
}
