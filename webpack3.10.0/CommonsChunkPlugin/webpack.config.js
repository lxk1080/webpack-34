/**
 * 可以参考 https://github.com/liangklfangl/commonsChunkPlugin_Config
 * */
const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: {
    pageA: './src/pageA',
    pageB: './src/pageB',
    vendor: ['lodash'],
  },

  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js',
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common', // pageA 和 pageB 的公共业务代码
      minChunks: 2,
      chunks: ['pageA', 'pageB'],
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: ['vendor', 'manifest'], // 第三方依赖 和 webpack生成的代码
      minChunks: Infinity,
    })
  ]
}
