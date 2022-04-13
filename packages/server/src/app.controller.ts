/* eslint-disable no-useless-constructor */
/* eslint-disable import/prefer-default-export */
import { Controller, Get } from '@nestjs/common';

import { AppService, getHelloProps } from './app.service';

@Controller('posts')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): getHelloProps {
    return this.appService.getHello();
  }
}
