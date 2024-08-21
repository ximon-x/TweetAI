import { Test, TestingModule } from '@nestjs/testing';
import { AutobotsService } from './autobots.service';

describe('AutobotsService', () => {
  let service: AutobotsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AutobotsService],
    }).compile();

    service = module.get<AutobotsService>(AutobotsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
