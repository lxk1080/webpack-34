/**
 * 代码分割，3种场景：
 * 1. 分离 业务代码 - 第三方依赖
 * 2. 分离 业务代码 - 业务公共代码 - 第三方依赖
 * 3. 分离 首次加载 - 访问后加载的代码
 *
 * 打包后的代码：
 * pageA.bundle：pageA中独有的业务代码
 * subPageA.chunk：分割出的要异步加载的模块subPageA
 * subPageB.chunk：分割出的要异步加载的模块subPageB
 * async-common-pageA.chunk：异步加载模块(subPageA、subPageB)的公共代码module
 * * vendor.bundle：第三方依赖库lodash
 * manifest.bundle：webpack自动生成的代码(用于加载其他的模块)
 */

const webpack = require('webpack');

module.exports = {
  entry: {
    pageA: './src/pageA',
    vendor: ['lodash'],
  },

  output: {
    path: __dirname + '/dist',
    filename: '[name].bundle.js',
    publicPath: './dist/', // 由此路径找到分割的代码块
    chunkFilename: '[name].chunk.js', // 分割的代码块的名称
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      async: 'async-common', // 提取异步加载的公共业务模块(也就是subPageA和subPageB中的module)
      minChunks: 2,
      children: true, // 使可以在子依赖中寻找公共模块
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: ['vendor', 'manifest'],
      minChunks: Infinity,
    })
  ]
}
