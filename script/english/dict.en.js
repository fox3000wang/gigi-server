const fs = require('fs');
const path = require('path');
const XLSX = require('XLSX');

const FILE_XLS_PATH = path.join(__dirname, 'level1.xls');
const FILE_JSON_PATH = path.join(__dirname, 'dict.en.json');

function xls2json() {
  const buf = fs.readFileSync(FILE_XLS_PATH);
  const workbook = XLSX.read(buf, { type: 'buffer' });

  const result = {};
  workbook.SheetNames.forEach(sheetName => {
    const sh = workbook.Sheets[sheetName];

    let i = 1;
    while (sh[`A${i}`] && sh[`B${i}`]) {
      console.log(sh[`B${i}`].v);

      const cn = sh[`B${i}`].v;

      result[sh[`A${i}`].v] = {
        id: i++,
        cn,
      };
    }
  });

  fs.open(FILE_JSON_PATH, 'w', (err, fd) => {
    err && console.error(err);
    fs.writeFileSync(fd, JSON.stringify(result));
  });
}

xls2json();
