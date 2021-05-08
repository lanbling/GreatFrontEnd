/**
 * 写入、修改文件
 * 
 */

 const fs = require('fs');

//  异步写入
fs.writeFile('./write.txt', 'hello nodejs', 'utf8', err => {
    if(err) throw err;
});

// 同步写入
fs.writeFileSync('./writeSync.txt', 'hello nodejs');

// 文件流写入
const ws = fs.createWriteStream('./writeStream.txt', 'utf8');
ws.write('hello nodejs');
ws.end();