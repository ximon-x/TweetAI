import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AutobotsModule } from './autobots/autobots.module';

@Module({
  imports: [AutobotsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
