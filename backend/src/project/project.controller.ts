import { Controller, Get } from '@nestjs/common';

@Controller()
export class ProjectController {
  @Get()
  sayHello() {
    return `Hello From ProjectController`;
  }
}
