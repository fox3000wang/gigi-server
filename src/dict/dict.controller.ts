import { DictService } from './dict.service';
import { Controller, Get } from '@nestjs/common';

@Controller('Dict')
export class DictController {
  constructor(private readonly dictService: DictService) {}

  @Get()
  getDict(): any {
    return this.dictService.getDict();
  }
}
