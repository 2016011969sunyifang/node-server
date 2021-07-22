const fs = require('fs');
const path = require('path');

const fileName = path.resolve(__dirname,'data.txt');
// //读取文件内容
// fs.readFile(fileName,(err,data)=>{
//     if(err){
//         console.log(err);
//         return
//     };
//     //二进制转字符串
//     console.log(data.toString());
// })
// //写入文件
// const content ='这是写入的内容';
// const opt = {
//     flag:'a'
// }
// fs.writeFile(fileName,content,opt,(err)=>{
//     console.log(err);
//     return
// })
//判断文件是否存在
fs.exists(fileName,(exist)=>{
    console.log('我存在',exist);
})