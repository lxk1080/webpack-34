## style-loader css-loader postcss-loader sass-loader node-sass autoprefixer
> 基本的解析sass文件的配置

### 注意
1. loader的使用顺序很严格，加载顺序自下向上，自右向左。
2. `autoprefixer`对于import的`scss`文件不会自动添加前缀，需要配置css-loader的importLoaders参数
3. postcss-loader放在style-loader、css-loader之后，放在其他的loader(sass-loader、less-loader、...)之前，否则import的css将不会带前缀
4. 打包字体文件同样使用的是file-loader

### use
``` bash
# install dependencies
npm install

# build for production with minification
npm run build
```
打开dist目录下的`index.html`执行
