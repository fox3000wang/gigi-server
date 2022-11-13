import { Injectable } from '@nestjs/common';
import { BaseService } from '../base/base.service';

type record = {
  id: number;
  name: string;
  URI: string;
  result: string;
  date: string;
  language: string;
};

@Injectable()
export class RecordService extends BaseService {
  async getRecord() {
    const recordCn = await this.query(`SELECT * FROM record WHERE lang='cn';`);
    const recordEn = await this.query(`SELECT * FROM record WHERE lang='en';`);
    return { recordCn, recordEn };
  }

  async postRecord(record: record) {
    return {};
  }

  /*
  postRecord(record: record): any {
    if (!record) {
      return 'record is null';
    }

    function closeFile(err, fd) {
      err && console.error(err);
      fs.close(fd, () => console.log('done'));
    }

    console.log(record);
    const fileParh: string = path.join(
      __dirname,
      `../../data/record.${record.language}.json`,
    );

    const data = fs.readFileSync(fileParh);
    const records: Array<record> = JSON.parse(data.toString());

    const newRecord = {
      ...record,
      date: new Date().toLocaleDateString(),
    };

    if (this.hasRecord(newRecord, records)) {
      console.error(`has same data!`);
      return;
    }

    records.push(newRecord);
    console.log(record);

    fs.open(fileParh, 'w', (err, fd) => {
      err && console.error(err);
      fs.write(fd, JSON.stringify(records), closeFile);
    });
  }
*/

  hasRecord(record: record, records: Array<record>): boolean {
    let result = false;
    records.forEach((r: record) => {
      if (record.id === r.id && record.date === r.date) {
        result = true;
      }
    });
    return result;
  }
}
