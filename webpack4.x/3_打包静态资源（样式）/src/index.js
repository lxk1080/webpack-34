import eagle from './eagle.jpg';
import createImage from './createImage';
import style from './index.scss';
import font from './iconfont.scss';

// 添加一张图片
var image = new Image();
image.classList.add(style.img);
image.src  = eagle;
document.querySelector('#root').append(image);

// 在不同的文件中定义的另一张一样的图片
createImage();

// 字体图标
var item = document.createElement('div');
item.classList.add(font.iconfont);
item.classList.add(font['iconicon-test']);
document.querySelector('#root').append(item);
