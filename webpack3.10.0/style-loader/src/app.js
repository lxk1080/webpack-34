import './css/base.css';
import './css/common.css';

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

