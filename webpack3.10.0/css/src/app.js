// css-module 可以单独引用某个class类(只有类名可以被引用)，但事实上css文件内的样式还是会全部被导入的，鸡肋...
import common from './css/common.css';
import base from './css/base.css';

document.querySelector('.content').innerHTML = `<div class="${base.box}"></div>`;

// webpack内使用了style-loader/useable，可在在这里控制样式文件是否使用，默认不使用
/*
import base from './css/base.css';
import common from './css/common.css';

base.use();

let flag = true;

setInterval(() => {
  if (flag) {
    common.use();
    flag = false;
  } else {
    common.unuse();
    flag = true;
  }
}, 500)
*/


