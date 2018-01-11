/**
 * webpack version 3.10.0
 * webpack、webpack-dev-server 全局安装和本地安装
 */
const webpack = require('webpack');
const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require("clean-webpack-plugin");
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractCSS = new ExtractTextPlugin('css/[name]-extCSS.css');
const extractLESS = new ExtractTextPlugin('css/[name]-extLESS.css');
const extractSASS = new ExtractTextPlugin('css/[name]-extSASS.css');

module.exports = {
  // 入口文件
  entry: {
    main: __dirname + '/src/main.js'
  },

  // 输出到...
  output: {
    // 路径
    path: __dirname + '/dist', // 当前目录下的dist文件夹
    // 文件名
    filename: 'js/bundle.js'
    // publicPath: __dirname + '/dist/',
  },

  // 开发工具（浏览器可以根据map文件从打包后的文件映射出源码文件，便于调试）
  devtool: 'source-map',

  // server
  devServer: {
    contentBase: __dirname + '/dist', // 服务器根文件夹
    port: 8090, // 端口
    inline: true, // 实时刷新
  },

  // 模块
  module: {
    rules: [
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.(jpg|png|gif|svg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 20000, // base64 单位 k
              name: 'img/[name]-[hash:5].[ext]' // 目标路径， hash值5位，ext：后缀名
            }
          },
          'image-webpack-loader' // 图片压缩
        ]
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: path.resolve(__dirname, 'src'), // 指定范围
        exclude: path.resolve(__dirname, 'node_modules'), // 排除
      },
      {
        test: /\.css$/,
        use: extractCSS.extract({
          fallback: "style-loader",
          use: ["css-loader", "postcss-loader"]
        })
      },
      {
        test: /\.less$/,
        use: extractLESS.extract({
          fallback: "style-loader",
          use: ["css-loader", "postcss-loader", "less-loader"]
        })
      },
      {
        test: /\.(scss|sass)$/,
        use: extractSASS.extract({
          fallback: "style-loader",
          use: ["css-loader", "postcss-loader", "sass-loader"]
        }),
      }
    ]
  },

  // 插件
  plugins: [
    // html模板
    new htmlWebpackPlugin({
      template: './index.html'
    }),

    // 分离CSS文件
    extractCSS,
    extractLESS,
    extractSASS,

    // 压缩js代码
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true
    }),

    // 每次build清除dist文件夹
    new CleanWebpackPlugin('dist/**/*.*', {
      root: __dirname,
      verbose: true, // 在控制台输出日志
      dry: false // 删除文件
    })

  ]
};
