import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsString } from 'class-validator';
import { Post } from 'src/posts/entities/post.entity';

export class CreateAutobotDto {
  @IsString()
  @ApiProperty()
  name: string;

  @IsArray()
  @ApiProperty()
  posts: Post[];
}
