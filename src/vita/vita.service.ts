
import fs =  require('fs');
import path =  require('path');
import { Injectable } from '@nestjs/common';

type record = {
  id:number,
  name: string,
  URI:string,
  result:string,
  date:string,
}

@Injectable()
export class VitaService {
  
  getRecord():any{
    const fileParh:string = path.join(__dirname, `../../data/record.cn.json`);
    const data = fs.readFileSync(fileParh);
    return JSON.parse(data.toString());
  }

  postRecord(record:record): any {
    if(!record){
      return 'record is null'
    }

    function closeFile(err, fd) {
      err && console.error(err);
      fs.close(fd, () => console.log('done'));
    }

    const fileParh:string = path.join(__dirname, `../../data/record.cn.json`);
    const data = fs.readFileSync(fileParh);
    const records:Array<record> = JSON.parse(data.toString());
    
    const newRecord = {
      ...record,
      date: new Date().toLocaleDateString()
    };

    if(this.hasRecord(newRecord, records)){
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

  hasRecord(record:record, records:Array<record>):boolean{
    let result = false;
    records.forEach( (r:record) => {
      if(record.id === r.id && record.date === r.date){
        result = true;
      }
    });
    return result;
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
