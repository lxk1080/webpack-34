## html-webpack-plugin clean-webpack-plugin
> `plugin`可以在webpack运行到某个时刻的时候，帮你做一些事情

## 说明
1. `html-webpack-plugin`会在打包结束后，自动生成一个html文件，并把打包生成的js自动引入到这个html文件中
2. 新版本的`clean-webpack-plugin`不能使用数组指定目录了，什么都不传即可

### use
``` bash
# install dependencies
npm install

# build for production with minification
npm run build
```
打开dist目录下的`index.html`执行
