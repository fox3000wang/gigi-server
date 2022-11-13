import { Injectable } from '@nestjs/common';

type record = {
  id: number;
  name: string;
  URI: string;
  result: string;
  date: string;
  language: string;
};

@Injectable()
export class RecordService {
  pool: any;
  constructor() {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const mysql = require('mysql2');
    this.pool = mysql.createPool({
      host: 'wangzm.cn',
      user: 'user',
      password: 'useruser',
      database: 'gigi',
      charset: 'utf8',
    });
  }

  // 封装成可以同步执行的函数
  query(sql) {
    return new Promise((resolve, reject) => {
      this.pool.getConnection(function(err, connection) {
        if (err) {
          reject(err);
        } else {
          connection.query(sql, (err, rows) => {
            if (err) {
              reject(err);
            } else {
              resolve(rows);
            }
            // 结束会话
            connection.release();
          });
        }
      });
    });
  }

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
