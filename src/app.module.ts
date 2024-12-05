import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { EventModule } from './event/event.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'hatta0sql~',
      database: 'DbEventManagementPlatform',
      entities: [],
      synchronize: true,
    }),
    UserModule,
    EventModule,
  ],
})
export class AppModule {}
