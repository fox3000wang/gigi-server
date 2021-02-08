// 用axios从百度翻译上,扒下中文语音
const axios = require('axios');
const fs = require('fs');
const path = require('path');

const FILE_JSON_PATH = path.join(__dirname, 'dict.en.json');

async function fetchData(key, data) {
  console.log(data);
  const url = `https://fanyi.baidu.com/gettts?lan=en&text=${key}&spd=3&source=web`;

  const response = await axios({
    url,
    method: 'GET',
    responseType: 'stream',
  });
  console.log(response.status);

  const filePath = path.join(__dirname, `./mp3_en_id/${data.id}.mp3`);
  const writerStream = fs.createWriteStream(filePath);
  response.data.pipe(writerStream);
}

fs.readFile(FILE_JSON_PATH, (err, data) => {
  err && console.error(err);
  const jsonData = JSON.parse(data.toString());
  Object.keys(jsonData).forEach(key => fetchData(key, jsonData[key]));
});
