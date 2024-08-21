import { Injectable } from '@nestjs/common';
import { CreateAutobotDto } from './dto/create-autobot.dto';
import { UpdateAutobotDto } from './dto/update-autobot.dto';

@Injectable()
export class AutobotsService {
  create(createAutobotDto: CreateAutobotDto) {
    return 'This action adds a new autobot';
  }

  findAll() {
    return `This action returns all autobots`;
  }

  findOne(id: number) {
    return `This action returns a #${id} autobot`;
  }

  update(id: number, updateAutobotDto: UpdateAutobotDto) {
    return `This action updates a #${id} autobot`;
  }

  remove(id: number) {
    return `This action removes a #${id} autobot`;
  }
}
