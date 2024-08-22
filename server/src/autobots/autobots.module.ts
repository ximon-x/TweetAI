import { Module } from '@nestjs/common';
import { AutobotsService } from './autobots.service';
import { AutobotsController } from './autobots.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Autobot } from './entities/autobot.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Autobot])],
  controllers: [AutobotsController],
  providers: [AutobotsService],
})
export class AutobotsModule {}
