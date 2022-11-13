import { RecordService } from './record.service';
import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('record')
export class RecordController {
  constructor(private readonly recordService: RecordService) {}

  @Get()
  getRecord(): any {
    return this.recordService.getRecord();
  }

  @Post()
  postRecord(@Body() record: any): any {
    return this.recordService.postRecord(record);
  }
}
