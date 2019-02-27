import _ from 'lodash'; // 库文件一般同步加载

console.log(_.join([1, 2, 3], '-'));

/**
 * 由于 subPageA 和 subPageB 中都依赖 module，这时可以用这种语法在 pageA 中先引入 module
 * 这样在 subPageA 和 subPageB 中就不会再引入 module
 * 但是这样就会把 module 引入到 pageA 模块中，可以配合 CommonsChunkPlugin 提取公共代码
 */
// require.include('./module');

/**
 * 使用 动态import 分割出 subPageA 和 subPageB
 * 1. 动态import 代码一开始就会执行
 * 2. 魔法注释：给分割出的块命名(如果多个分割块命名相同，则会合到一个块内)
 */
import(/* webpackChunkName: 'subPageA' */'./subPageA').then(function(subPageA) {
  console.log(subPageA);
});

/**
 * 使用 require.ensure 分割代码
 * 参数：
 * 1. 依赖(只会加载，不会执行，这个参数可以为空数组)
 * 2. 回调函数，在这里 require 才会执行
 * 3. 分割出的块的名字
 */
require.ensure(['./subPageB'], function() {
  const subPageB = require('./subPageB');
  console.log(subPageB);
}, 'subPageB');

export default 'PageA';
