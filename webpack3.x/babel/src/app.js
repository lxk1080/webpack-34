// 当开发框架或库时使用 transform-runtime，使生成的api方法不污染全局变量；开发应用时只需使用 babel-polyfill
// 当两者同时存在时，编译器会使用 transform-runtime
import '@babel/polyfill';

let a = 'babel';

const func = () => {};

const arr = [1, 2, 3, 4, 5, 6];

arr.include(8);

const set = new Set(arr);
