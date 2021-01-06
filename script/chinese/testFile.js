// 测试OCR出来的文字，是否完全匹配官方。
const fs = require('fs');
const path = require('path');

const FILE_TXT_PATH = path.join(__dirname, 'chinese.txt');
const FILE_TXT_PATH2 = path.join(__dirname, 'chinese_mini.txt');

let f = fs.readFileSync(FILE_TXT_PATH);
f = f.toString().replace(/\n/g, '');

let f2 = fs.readFileSync(FILE_TXT_PATH2);
f2 = f.toString();

for (let i = 0; i < f.length; i++) {
  if (f[i] !== f2[i]) {
    console.log(`${f[i]} ${f2[i]}`);
  }
}
