import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RecordModule } from './record/record.module';
import { DictModule } from './dict/dict.module';

@Module({
  imports: [RecordModule, DictModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
