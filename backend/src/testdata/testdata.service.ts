import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TestData } from './testdata.entity';

// test service
@Injectable()
export class TestdataService {
  constructor(
    @InjectRepository(TestData)
    private readonly testDataRepository: Repository<TestData>,
  ) {}

  async getTestData() {
    return await this.testDataRepository.find();
  }

  async createTestData() {
    await this.testDataRepository.save({
      data: 'test data string',
      title: 'test data title',
    });
    return 'DONE';
  }
}
