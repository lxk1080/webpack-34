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
      name: 'common',
      minChunks: 2,
      chunks: ['pageA', 'pageB'],
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: ['vendor', 'manifest'],
      minChunks: Infinity,
    })
  ]
}
