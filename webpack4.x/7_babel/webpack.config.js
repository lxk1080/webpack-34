const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',

  entry: {
    main: './src/index.js',
  },

  output: {
    filename: 'app.[hash].js',
    path: path.resolve(__dirname, 'dist'),
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: '/node_modules/',
        loader: 'babel-loader',
        options: {
          // 因为要写注释，所以直接写在了这里，实际代码时还是使用 .babelrc 的 json 形式
          presets: [['@babel/preset-env', { // ES6 转换为 ES5 的所有语法规则
            useBuiltIns: 'usage', // 此属性在使用'@babel/polyfill'时，只引入代码中用到的API，可以减少打包后的文件大小，加了此属性，则不需要在入口文件处 import '@babel/polyfill';
            corejs: 3, // 使用了useBuiltIns属性，就必须设置此属性，属性值为core-js的版本
          }]],
          // @babel/plugin-transform-runtime用在写类库代码时，避免环境污染
          /*plugins: [['@babel/plugin-transform-runtime', {
           corejs: 2,
           helpers: true,
           regenerator: true,
           useESModules: false,
          }]],*/
        },
      },
    ],
  },

  plugins: [
    // 貌似 core-js 与 html-webpack-plugin 不兼容，目前没有找到解决方法，先行注释，如果需要，只能手动在 dist 目录添加 index.html 文件并引入目标文件
    /*new HtmlWebpackPlugin({
      template: './index.html',
    }),*/
    new CleanWebpackPlugin(),
  ],
};
