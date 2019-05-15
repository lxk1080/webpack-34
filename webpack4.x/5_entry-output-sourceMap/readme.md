## entry、output、sourceMap
> 基础配置与文件映射

### entry、output
1. 如果不配置`output`，`webpack`默认会自动生成一个`dist`目标文件夹
2. 如果不配置`output`的`filename`参数，默认会打包生成`main.js`目标文件，如果`entry`是一个对象，也可以自己起默认名
3. 多个入口文件时使用占位符命名目标文件

### sourceMap
1. `development`模式默认会打开`devtool`为`source-map`
2. 常用配置
|类型|说明|
|:-:|:-:|
source-map | 会生成`.map`文件 |
inline-source-map | 通过`sourceMapUrl=base64...`的方式直接写入到目标文件中，一般为目标文件的底部
cheap-source-map | 一般情况下，如果代码出错，`sourceMap`会告诉你的代码哪一行哪一列出错，如果代码量很多，是很耗性能的，但是`cheap`只会告诉你哪一行出错，节省性能，还有一点是`cheap`只会告诉你业务代码出错，像是第三方模块之类的则不会告诉你出错信息
cheap-module-source-map | `cheap`的基础上加了`module`的`sourceMap`，也会告诉你第三方模块的错误
eval | 打包速度最快的一种方式，不生成`.map`文件，直接写在目标文件中，会以`eval`的形式直接执行代码，并且会有一个`sourceUrl`直接指向代码所在的文件，但是对于一些复杂的代码，提示的内容可能不太全面
3. `development`模式，推荐使用 `cheap-module-eval-source-map`，提示的信息比较全，同时打包速度比较快
4. `production`模式，一般情况下不需要`sourceMap`，直接不写`devtool`，如果需要，推荐`cheap-module-source-map`，提示的信息会更好

### use
``` bash
# install dependencies
npm install

# build for production with minification
npm run build
```

打开dist目录下的`index.html`执行
