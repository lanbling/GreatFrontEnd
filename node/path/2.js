const path = require('path');

let name = path.relative('/path/example/index.js', '/example');

console.log(name);

// 不理解这个api的含义，以后再看