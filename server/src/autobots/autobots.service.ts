import { Injectable } from '@nestjs/common';
import { CreateAutobotDto } from './dto/create-autobot.dto';
import { UpdateAutobotDto } from './dto/update-autobot.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { Autobot } from './entities/autobot.entity';

@Injectable()
export class AutobotsService {
  constructor(
    @InjectRepository(Autobot) private autobotRepostory: Repository<Autobot>,
    private dataSource: DataSource,
  ) {}

  async create(createAutobotDto: CreateAutobotDto) {
    const queryRunner = this.dataSource.createQueryRunner();

    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      const autobot = queryRunner.manager.create(Autobot, createAutobotDto);
      await queryRunner.manager.save([autobot]);

      await queryRunner.commitTransaction();
    } catch (error) {
      await queryRunner.rollbackTransaction();

      throw error;
    } finally {
      await queryRunner.release();
    }
  }

  findAll() {
    return this.autobotRepostory.find();
  }

  findOne(id: number) {
    return this.autobotRepostory.findOneBy({ id });
  }

  update(id: number, updateAutobotDto: UpdateAutobotDto) {
    return `This action updates a #${id} autobot`;
  }

  async remove(id: number) {
    await this.autobotRepostory.delete({ id });
  }
}
