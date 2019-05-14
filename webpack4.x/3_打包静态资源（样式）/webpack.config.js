var path = require('path');

module.exports = {
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
      {
        test: /\.(jpg|png|gif)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name]_[hash].[ext]',
            outputPath: 'images',
          },
        },
      },

      {
        test: /\.scss$/,
        use: [
          'style-loader', // 将css样式以style形式插入<style>标签
          {
            loader: 'css-loader', // 将css样式整合到一起
            options: {
              importLoaders: 2, // 表示在走import语法时，继续走后面的几个loader
              modules: true, // css模块化，此方式不能直接使用 import '*.scss' 的方式，需要 import style from '*.scss' 使用
            },
          },
          'postcss-loader', // 提供功能，例如自动添加前缀，可创建 postcss.config.js 文件配置
          'sass-loader', // 解析sass语法为css
        ],
      },

      /* 打包字体文件，同样file-loader */
      {
        test: /\.(eot|ttf|svg|woff|woff2)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'font',
          },
        },
      },
    ],
  },
};
