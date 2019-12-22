import { Test, TestingModule } from '@nestjs/testing';
import { TestdataController } from './testdata.controller';

describe('Testdata Controller', () => {
  let controller: TestdataController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TestdataController],
    }).compile();

    controller = module.get<TestdataController>(TestdataController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
