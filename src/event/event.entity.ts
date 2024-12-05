import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { User } from '../user/user.entity';
import { IsString, IsDate } from 'class-validator';

@Entity()
export class Event {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  @IsString()
  title: string;

  @Column('text')
  @IsString()
  description: string;

  @Column('timestamp')
  @IsDate()
  date: Date;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'created_by' })
  createdBy: User;
}
