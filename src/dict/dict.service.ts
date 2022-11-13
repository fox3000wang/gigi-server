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
export class DictService {
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

  async getDict() {
    const recordCn = await this.query(`SELECT * FROM dict WHERE lang='cn';`);
    const recordEn = await this.query(`SELECT * FROM dict WHERE lang='en';`);
    return { recordCn, recordEn };
  }
}
