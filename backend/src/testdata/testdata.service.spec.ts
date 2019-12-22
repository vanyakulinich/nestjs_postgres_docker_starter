import { Test, TestingModule } from '@nestjs/testing';
import { TestdataService } from './testdata.service';

describe('TestdataService', () => {
  let service: TestdataService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TestdataService],
    }).compile();

    service = module.get<TestdataService>(TestdataService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
