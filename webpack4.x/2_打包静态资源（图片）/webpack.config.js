var path = require('path');

module.exports = {
  // 打包处的文件将不会被压缩，相反的配置是 production
  mode: 'development',

  entry: {
    main: './src/index.js',
  },

  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist'),
  },

  module: {
    rules: [
      /* file-loader */
      /*{
        test: /\.(jpg|png|gif)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name]_[hash].[ext]',
            outputPath: 'images',
          },
        },
      },*/

      /* url-loader */
      {
        test: /\.(jpg|png|gif)$/,
        use: {
          loader: 'url-loader',
          options: {
            name: '[name]_[hash].[ext]',
            outputPath: 'images',
            limit: 2048, // 单位：byte，表示小于 2kb 的图片直接渲染为 base64 到输出文件中，如果不配置这个参数，默认会打包成 base64
          },
        },
      },
    ],
  },
};
