// src/event/dto/create-event.dto.ts
import { IsString, IsNotEmpty, IsDate } from 'class-validator';

export class CreateEventDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsDate()
  date: Date;
}
