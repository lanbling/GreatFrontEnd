const path = require('path');

// let name = path.resolve('/foo/bar', './baz');

let name = path.resolve('/wwwroot', 'tmp/file/');
// 为啥这种resolve后为D:\tmp\file
// 区别在于是否有/开头。有的话就是它们自己为主。
// 没有的话就当前目录路径

// let name = path.resolve('wwwroot', 'static_files/png/');

console.log(name);

