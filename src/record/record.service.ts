import { Injectable } from '@nestjs/common';
import { BaseService } from '../base/base.service';

@Injectable()
export class RecordService extends BaseService {
  async getRecord() {
    const recordCn = await this.query(`SELECT * FROM record WHERE lang='cn';`);
    const recordEn = await this.query(`SELECT * FROM record WHERE lang='en';`);
    return { recordCn, recordEn };
  }

  async postRecord(record: any) {
    const { label, label_cn, URI, result, date, lang } = record;
    const sql =
      `INSERT INTO record (label,label_cn,URI,result,date,lang) VALUES (` +
      `${label},` +
      `${label_cn},` +
      `${URI},` +
      `${result},` +
      `${date},` +
      `${lang},` +
      `);`;
    const r = await this.query(sql);
    return r;
  }
}
