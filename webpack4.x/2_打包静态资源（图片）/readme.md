## file-loader url-loader

> 打包图片目前主要应用file-loader和url-loader两个loader，具体配置可看官方文档

### file-loader
对文件的操作，不只是图片，所有文件通用

### url-loader
除了可以做file-loader的事情，还有额外的功能，注意配置`limit`参数

### use
``` bash
# install dependencies
npm install

# build for production with minification
npm run build
```
打开dist目录下的`index.html`执行
