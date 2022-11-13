import { Injectable } from '@nestjs/common';
import { BaseService } from '../base/base.service';

@Injectable()
export class DictService extends BaseService {
  async getDict() {
    const cn = await this.query(`SELECT * FROM dict WHERE lang='cn';`);
    const en = await this.query(`SELECT * FROM dict WHERE lang='en';`);
    return { cn, en };
  }
}
