import fs =  require('fs');
import path =  require('path');

import { Injectable } from '@nestjs/common';

@Injectable()
export class VitaService {
  
  private readonly fileParh = path.join(__dirname, `../../data/chinese.json`);
  private library:Array<object> = [];

  getLibrary(): any {
    if(this.library['chinese']){
      return this.library['chinese'];
    }else{
      fs.readFile(this.fileParh, (err, data)=>{
        err && console.error(err);
        this.library['chinese'] = JSON.parse(data.toString());
      });
    }
  }
}
