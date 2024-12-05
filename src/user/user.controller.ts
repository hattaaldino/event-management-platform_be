// src/user/user.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() body: { username: string; password: string }) {
    return this.userService.create(body.username, body.password);
  }
}
