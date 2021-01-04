import { VitaService } from './vita.service';
import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('vita')
export class VitaController {
  constructor(private readonly vitaService: VitaService) {}

  @Get()
  getLibrary():any {
    return this.vitaService.getLibrary();
  }

  @Post()
  addActiveRecord(@Body() record:any):any{
    return this.vitaService.recordActive(record);
  }
}
