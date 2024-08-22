import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  ValidationPipe,
} from '@nestjs/common';
import { AutobotsService } from './autobots.service';
import { CreateAutobotDto } from './dto/create-autobot.dto';
import { UpdateAutobotDto } from './dto/update-autobot.dto';

@Controller('autobots')
export class AutobotsController {
  constructor(private readonly autobotsService: AutobotsService) {}

  @Post()
  create(@Body(new ValidationPipe()) createAutobotDto: CreateAutobotDto) {
    return this.autobotsService.create(createAutobotDto);
  }

  @Get()
  findAll() {
    return this.autobotsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.autobotsService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body(new ValidationPipe()) updateAutobotDto: UpdateAutobotDto,
  ) {
    return this.autobotsService.update(id, updateAutobotDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.autobotsService.remove(id);
  }
}
