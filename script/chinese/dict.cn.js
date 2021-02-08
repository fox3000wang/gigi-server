const fs = require('fs');
const path = require('path');

const FILE_TXT_PATH = path.join(__dirname, 'dict.cn.txt');
const FILE_JSON_PATH = path.join(__dirname, 'dict.cn.json');

/**
 * 初始化,数据从文本文件,转成json
 */
function txtToJson() {
  function closeFile(err, fd) {
    err && console.error(err);
    fs.close(fd, () => console.log('done'));
  }

  function writeDate(data) {
    fs.open(FILE_JSON_PATH, 'w', (err, fd) => {
      err && console.error(err);
      fs.write(fd, data, closeFile);
    });
  }

  function initData(err, data) {
    err && console.error(err);

    const str = data.toString().replace(/\n/g, ''); // 清理换行
    const target = {};
    for (let i = 0; i < str.length; i++) {
      target[str[i]] = {
        id: i,
        URI: encodeURIComponent(str[i]),
      };
    }
    writeDate(JSON.stringify(target));
  }

  fs.readFile(FILE_TXT_PATH, initData);
}

txtToJson();
