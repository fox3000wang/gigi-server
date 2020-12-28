import { VitaService } from './vita.service';
import { Controller, Get } from '@nestjs/common';

@Controller('vita')
export class VitaController {
  constructor(private readonly vitaService: VitaService) {}

  @Get()
  getLibrary() {
    return this.vitaService.getLibrary();
  }
}
