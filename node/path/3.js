const path = require('path')

let a = path.isAbsolute('E:/path/example/index.js') // true

let b = path.isAbsolute('/.') // false

console.log(a,b);

// 识别是否绝对路径。主要判断前面有没有一个杠