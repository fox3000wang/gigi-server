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

    let index = 0;
    let i = 1;
    while (sh[`A${i}`] && sh[`B${i}`]) {
      const cn = sh[`B${i}`].v;

      if (!result[sh[`A${i}`].v]) {
        result[sh[`A${i}`].v] = {
          id: index++,
          cn,
        };
      }
      i++;
    }
  });

  // const words = [];
  // Object.keys(result).map(e => {
  //   words.push({
  //     ...result[e],
  //     name: e,
  //   });
  // });
  // words.sort();
  // console.log(JSON.stringify(words));

  fs.open(FILE_JSON_PATH, 'w', (err, fd) => {
    err && console.error(err);
    fs.writeFileSync(fd, JSON.stringify(result));
  });
}

xls2json();
