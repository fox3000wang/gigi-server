import { Injectable } from '@nestjs/common';
import { BaseService } from '../base/base.service';

@Injectable()
export class DictService extends BaseService {
  async getDict() {
    const recordCn = await this.query(`SELECT * FROM dict WHERE lang='cn';`);
    const recordEn = await this.query(`SELECT * FROM dict WHERE lang='en';`);
    return { recordCn, recordEn };
  }
}
