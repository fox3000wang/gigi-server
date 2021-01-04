import fs =  require('fs');
import path =  require('path');
import { Injectable } from '@nestjs/common';

@Injectable()
export class VitaService {
  
  private library:Array<object> = [];

  getLibrary(): any {
    const fileParh:string = path.join(__dirname, `../../data/chinese.json`);
    if(this.library['chinese']){
      return this.library['chinese'];
    }else{
      fs.readFile(fileParh, (err, data)=>{
        err && console.error(err);
        this.library['chinese'] = JSON.parse(data.toString());
      });
    }
  }

  recordActive(record:any): any {
    const fileParh:string = path.join(__dirname, `../../data/record.json`);

    function closeFile(err, fd) {
      err && console.error(err);
      fs.close(fd, () => console.log('done'));
    }

    fs.readFile(fileParh, (err, data)=>{
      err && console.error(err);
      const records:Array<object> = JSON.parse(data.toString());
      records.push(record);

      console.log(record);

      fs.open(fileParh, 'w', (err, fd) => {
        err && console.error(err);
        fs.write(fd, JSON.stringify(records), closeFile);
      });

    });
  }
}
