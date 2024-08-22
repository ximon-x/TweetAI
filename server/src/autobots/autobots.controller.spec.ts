import { Test, TestingModule } from '@nestjs/testing';
import { AutobotsController } from './autobots.controller';
import { AutobotsService } from './autobots.service';

describe('AutobotsController', () => {
  let controller: AutobotsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AutobotsController],
      providers: [AutobotsService],
    }).compile();

    controller = module.get<AutobotsController>(AutobotsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
