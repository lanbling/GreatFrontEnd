
调试webpack配置是否成功，要配合谷歌浏览器来做
执行命令
npx node --inspect-brk ./node_modules/webpack/bin/webpack --inline --progress
谷歌浏览器输入：chrome://inspect/#devices
点击inspect
在webpack.config.js文件中打上断点

结合vscode断点调试
vscode得放在项目的根目录下

本质上断点调试就是执行这个：因此在vscode的配置文件中需要配置这些参数
nodemon --exec babel-node ./index.js
配置如下
{
    "type": "node",
    "request": "launch",
    "name": "es6编译调试",
    "runtimeExecutable": "${workspaceFolder}/node_modules/.bin/nodemon",
    "program": "${workspaceFolder}/index.js",
    "restart": true,
    "console": "integratedTerminal",
    "internalConsoleOptions": "neverOpen",
    "runtimeArgs": ["--exec", "babel-node"]
}

