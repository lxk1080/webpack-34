module.exports = {
  plugins: [
    require('postcss-import')(),
    require('autoprefixer')({
      browsers: ['last 5 versions']
    })
  ]
}
