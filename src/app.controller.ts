import { Controller, Get } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices/decorators';
import { delay, of } from 'rxjs';
import { AppService } from './app.service';

@Controller()
export class AppController {
  @MessagePattern({ cmd: 'ping' })
  ping(_: any) {
    return of('pong').pipe(delay(1000));
  }
}
