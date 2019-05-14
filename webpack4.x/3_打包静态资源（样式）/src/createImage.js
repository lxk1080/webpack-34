import eagle from './eagle.jpg';
import style from './index.scss';

function createImage() {
  var image = new Image();
  image.classList.add(style.img);
  image.src  = eagle;
  document.querySelector('#root').append(image);
}

export default createImage;
