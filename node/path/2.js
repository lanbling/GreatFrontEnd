const path = require('path')

let name = path.extname('/path/example/index.11.22.33') // .js
console.log(name);

// 获取扩展名，最后一个点的