import {
  Body,
  Controller,
  Get,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AppService } from './app.service';

import { FakeDto } from './dto/fake.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  @UsePipes(new ValidationPipe())
  getHello(@Body() { schema, count }: FakeDto): any {
    const formattedBody = Object.entries(schema);

    return this.appService.getHello(formattedBody, count);
  }
}
