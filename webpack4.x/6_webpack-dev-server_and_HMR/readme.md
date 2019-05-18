## webpack-dev-server and HMR
> 浏览器自动刷新，热模块更新

### webpack-dev-server
1. `webpack --watch`在改变代码后会重新打包，但是浏览器不会自动刷新
2. `webpack-dev-server`在改变代码后会重新打包，打包后的资源存在内存中，并且浏览器会自动刷新

### HotModuleReplacement
1. 热更新基础配置，`devServer`对象里面`hot: true`,`hotOnly: true`，然后在`plugin`里加上`new webpack.HotModuleReplacementPlugin()`插件
2. 开启热更新后，默认情况下，浏览器不会再自动刷新，也不会重新加载任何文件，需要自己写如何更新的代码，如果我们能看到更新，是因为一些`loader`或者脚手架已经帮我们写好了这部分的代码

### use
``` bash
# install dependencies
npm install

# build for production with minification
npm run build

# dev for development
npm run dev

# webpack-dev-middleware
npm run server
to: localhost:3000
```
