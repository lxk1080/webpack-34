module.exports = {
  entry: {
    app: './src/app',
  },

  output: {
    path: __dirname + '/dist',
    publicPath: './dist/',
    filename: '[name].bundle.js',
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
            options: {
              insertInto: '.header', // 将style标签插入到某个dom中
              singleton: true, // 多个样式文件是否共用一个style标签
              transform: './css.transform.js', // 此文件导出一个css变换函数
            }

            // <link> 与下面file-loader同用
            // loader: 'style-loader/url',

            // 可以控制样式文件是否使用，可在引入文件app.js内设置
            // loader: 'style-loader/useable',
          },
          {
            loader: 'css-loader',

            // <link> 与上面style-loader/url同用
            // loader: 'file-loader',
          }
        ]
      }
    ]
  }
}
