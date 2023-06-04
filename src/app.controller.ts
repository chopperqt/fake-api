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
  getHello(@Body() body: FakeDto): any {
    const formattedBody = Object.entries(body.schema);

    console.log(body.count);

    return this.appService.getHello(formattedBody);
  }
}
