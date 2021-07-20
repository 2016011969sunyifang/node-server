// // 获取http模块
// const http = require('http');
// //获取拆分模块
// const querystring = require('querystring');
// // 创建server返回一个对象
// const server = http.createServer((req,res)=>{
//     console.log(req.method);
//     const url = req.url;
//     // 切分
//     req.query = querystring.parse(url.split('?')[1]);
//     // 两个参数是请求和回复
//     res.writeHead(200,{'content-type':'text/html'})
//     // 返回一个helloworld
//     res.end(JSON.stringify(req.query))
// })
// // listen监听
// server.listen(8000,()=>{
//     console.log('listening on 3000 port');
// })

// // 获取http模块
// const http = require('http');
// // 创建server返回一个对象
// const server = http.createServer((req, res) => {
//     console.log(req.method);
//     if (req.method == 'POST') {
//         console.log('requesr-header', req.headers['content-type']);
//         let postData = '';
//         req.on('data', chunk => {
//             postData += chunk.toString();
//         })
//         req.on('end', () => {
//             res.end('hello world!')
//         }
//         )
//     }
// })
// // listen监听
// server.listen(7000, () => {
//     console.log('listening on 8000 port');
// })

// 获取http模块
const http = require('http');
const quertstring = require('querystring')
// 创建server返回一个对象
const server = http.createServer((req, res) => {
    const method = req.method;
    const url =req.url;
    const path = url.split('?')[0]
    const query = quertstring.parse(url.split('?')[1]);
    res.setHeader('Content-type','application/json');
    const resData = {
        method,
        url,
        path,
        query
    }
    if(method == 'GET'){
        res.end(
            JSON.stringify(resData)
        )
    }
    if(method == 'post'){
        let postData = ''
        req.on('data',chunk=>{
            postData+=chunk.toString()
        })
        req.on('end', () => {
            res.end(
                JSON.stringify(reqData)
            )
        })
    }
})
// listen监听
server.listen(8000, () => {
    console.log('listening on 8000 port');
})
