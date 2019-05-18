const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  mode: 'development',

  entry: {
    main: './src/index.js',
  },

  output: {
    filename: 'app.[hash].js',
    path: path.resolve(__dirname, 'dist'),
  },

  devServer: {
    contentBase: './dist',
    open: true, // 自动打开浏览器
    port: 8090, // 端口设置
    proxy: { // 配置网络请求代理
      '/api': {
        target: 'http://127.0.0.1:3000', // 接口的域名端口
        // secure: false,  // 如果是https接口，需要配置这个参数
        changeOrigin: true, // 如果接口跨域，需要进行这个参数配置
        pathRewrite: { // 在请求后端时进行路径重写，让 '/api' 重写为 '/'
          '^/api': '/',
        },
      },
    },
    hot: true, // 开启热更新
    hotOnly: true, // 即便是热更新的功能没有生效，也不让浏览器自动刷新
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
};
