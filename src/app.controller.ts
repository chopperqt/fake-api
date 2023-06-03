import { Body, Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

import { FakeDto } from './dto/fake.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(@Body() body: FakeDto): any {
    const formattedBody = Object.entries(body);

    return this.appService.getHello(formattedBody);
  }
}
