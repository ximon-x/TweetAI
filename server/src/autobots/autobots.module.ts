import { Module } from '@nestjs/common';
import { AutobotsService } from './autobots.service';
import { AutobotsController } from './autobots.controller';

@Module({
  controllers: [AutobotsController],
  providers: [AutobotsService],
})
export class AutobotsModule {}
