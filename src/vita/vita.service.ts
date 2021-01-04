import fs =  require('fs');
import path =  require('path');
import { Injectable } from '@nestjs/common';

@Injectable()
export class VitaService {
  
  getRecord():any{
    const fileParh:string = path.join(__dirname, `../../data/record.json`);
    const data = fs.readFileSync(fileParh);
    return JSON.parse(data.toString());
  }

  postRecord(record:any): any {

    if(!record){
      return 'record is null'
    }

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

  // private library:Array<object> = [];
  // getLibrary(): any {
  //   const fileParh:string = path.join(__dirname, `../../data/chinese.json`);
  //   if(this.library['chinese']){
  //     return this.library['chinese'];
  //   }else{
  //     fs.readFile(fileParh, (err, data)=>{
  //       err && console.error(err);
  //       this.library['chinese'] = JSON.parse(data.toString());
  //       return this.library['chinese'];
  //     });
  //   }
  // }

  
}
