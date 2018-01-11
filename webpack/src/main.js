import func from './js/a.js'
import './css/a.css'
import './less/a.less'
import './sass/a.scss'

let name = func()

function createElement() {
  let div = document.createElement('div');
  div.textContent = name;
  document.querySelector('#app').appendChild(div)
}

createElement()
