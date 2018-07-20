/**
 * 可以参考 https://github.com/liangklfangl/commonsChunkPlugin_Config
 * 注意：只适用于多 entry 的情况
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
      minChunks: 2, // 出现两次就提取
      chunks: ['pageA', 'pageB'], // 给定范围，只在 pageA 和 pageB 中存在的公共代码
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: ['vendor', 'manifest'], // 第三方依赖 和 webpack生成的代码
      minChunks: Infinity, // 这里不提取公共代码
    })
  ]
}
