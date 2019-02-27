module.exports = {
  entry: {
    app: './src/app.ts',
  },

  output: {
    path: __dirname + '/dist',
    filename: '[name].bundle.js',
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        include: __dirname + '/src',
        use: 'ts-loader',
      }
    ]
  }
}
