import { PartialType } from '@nestjs/swagger';
import { CreateAutobotDto } from './create-autobot.dto';

export class UpdateAutobotDto extends PartialType(CreateAutobotDto) {}
