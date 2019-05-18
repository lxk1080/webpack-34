## Babel
> 处理 ES6、7、8、9 语法

### 说明
* babel-loader: 处理 js 文件，webpack 与 babel 之间的桥梁，不会编译 ES6 为 ES5
* @babel/core: babel 核心语法库
* @babel/preset-env: 包含了所有 ES6 语法转换成 ES5 的规则
* @babel/polyfill: 用来转换 ES6 中的 API，比如 Promise，通过全局变量的形式注入，会污染全局环境，一般用于写业务代码
* core-js: 提供一些库的使用，用来配合 useBuiltIns: 'usage'
* @babel/runtime: 与 @babel/polyfill 功能相同，在写第三方组件或者库的时候使用，会以闭包形式间接引入，不会污染全局环境
* @babel/plugin-transform-runtime: 与 @babel/runtime 一起使用，babel 插件，在`.babelrc`中配置
* @babel/runtime-corejs2: 与 @babel/plugin-transform-runtime 一起使用

### use
``` bash
# install dependencies
npm install

# build for production with minification
npm run build
```

执行 dist 目录下的 index.html 文件
