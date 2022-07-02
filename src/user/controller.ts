import { Controller, Get } from '@nestjs/common';
import { UserService } from './service';

@Controller('user')
export class UserController {
  constructor(private readonly appService: UserService) {}

  @Get()
  getHello(): string {
    return '121';
  }
}
