import { Module } from '@nestjs/common'
import { EventService } from './event.service';
import { EventController } from './event.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Event } from './event.entity';
import { UserModule } from '../user/user.module';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [TypeOrmModule.forFeature([Event]), UserModule, AuthModule],
  providers: [EventService],
  controllers: [EventController],
})
export class EventModule {}
