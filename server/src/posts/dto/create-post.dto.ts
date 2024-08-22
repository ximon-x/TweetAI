import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreatePostDto {
  @IsString()
  @ApiProperty()
  name: string;
}
