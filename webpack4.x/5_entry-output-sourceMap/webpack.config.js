const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map', // development 模式下推荐
  // production: devtool: 'cheap-module-source-map', // 生产模式下如果需要，推荐这个

  entry: {
    main: './src/index.js',
    sub: './src/sub.js',
  },

  output: {
    publicPath: './', // 会在打包的目标文件前加上此公共路径
    filename: '[name].js', // 打包多个入口文件时，使用占位符
    path: path.resolve(__dirname, 'dist'),
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
    new CleanWebpackPlugin(),
  ],
};
