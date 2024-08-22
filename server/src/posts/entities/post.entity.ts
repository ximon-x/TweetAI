import { Autobot } from 'src/autobots/entities/autobot.entity';
import { Comment } from 'src/comments/entities/comment.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @ManyToOne(() => Autobot, (autobot) => autobot.posts)
  autobot: Autobot;

  @OneToMany(() => Comment, (comment) => comment.post)
  comments: Comment[];
}
