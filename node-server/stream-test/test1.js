//标准输入输出linux
// process.stdin.pipe(process.stdout);

//复制文件
const fs = require('fs');
const path = require('path');

const fileName1 = path.resolve(__dirname,'data.txt');
const fileName2 = path.resolve(__dirname,'data-back.txt');

const readStream = fs.createReadStream(fileName1);
const writeStream = fs.createWriteStream(fileName2);

readStream.pipe(writeStream);

writeStream.on('end',()=>{
    console.log('copy-down');
})