const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const config = require('./webpack.config');
const complier = webpack(config); // webpack.config.js 里面的内容发生了改变的话，就会重新返回一个 webpack 的编译器

const app = express();

// 当 complier 发生变化时，又会重新执行配置
// 主要是了解一下，可以自己手动去写一个 webpack-dev-server
app.use(webpackDevMiddleware(complier, {
  path: config.output.path,
}));

app.listen(3000, () => {
  console.log('server is running');
});
