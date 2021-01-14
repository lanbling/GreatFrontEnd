const {merge} = require('webpack-merge');
// 引入开发环境的配置
const baseWebpackConfig = require('./webpack.config.base');

debugger;

const webpackConfig = merge(baseWebpackConfig, {
    mode: 'development',
    devtool: 'eval-source-map',
    stats: {children: false}, //不输入日志
});

module.exports = webpackConfig;
