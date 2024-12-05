import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Event } from './event.entity';
import { CreateEventDto } from './dto/create-event.dto';

@Injectable()
export class EventService {
  constructor(
    @InjectRepository(Event)
    private eventRepository: Repository<Event>,
  ) {}

  async create(createEventDto: CreateEventDto): Promise<Event> {
    const event = this.eventRepository.create(createEventDto);
    return await this.eventRepository.save(event);
  }

  async findAll(): Promise<Event[]> {
    return await this.eventRepository.find();
  }

  async findOne(id: string): Promise<Event> {
    return this.eventRepository.findOne({
      where: { id },
    });
  }

  async update(id: string, updateEventDto: CreateEventDto): Promise<Event> {
    await this.eventRepository.update(id, updateEventDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.eventRepository.delete(id);
  }
}
