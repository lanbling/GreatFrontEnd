const fs = require('fs');

// 异步读取
// fs.readFile('./index.txt', 'utf8', (err, data) => {
//     console.log(data);
// })

// 同步读取
// const data = fs.readFileSync('./index.txt', 'utf8');
// console.log(data);

// 创建读取流
const stream = fs.createReadStream('./index.txt', 'utf8');
stream.on('data', data => {
    console.log(data);
});