webpackJsonp([4],{

/***/ 2:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
 // 库文件一般同步加载

console.log(__WEBPACK_IMPORTED_MODULE_0_lodash___default.a.join([1, 2, 3], '-'));

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
Promise.all/* import() */([__webpack_require__.e(2), __webpack_require__.e(0)]).then(__webpack_require__.bind(null, 6)).then(function(subPageA) {
  console.log(subPageA);
});

/**
 * 使用 require.ensure 分割代码
 * 参数：
 * 1. 依赖(只会加载，不会执行，这个参数可以为空数组)
 * 2. 回调函数，在这里 require 才会执行
 * 3. 分割出的块的名字
 */
Promise.all/* require.ensure */([__webpack_require__.e(1), __webpack_require__.e(0)]).then((function() {
  const subPageB = __webpack_require__(1);
  console.log(subPageB);
}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);

/* harmony default export */ __webpack_exports__["default"] = ('PageA');


/***/ })

},[2]);