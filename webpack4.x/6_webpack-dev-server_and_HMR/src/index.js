import './style.css';
import createNumber from './number';

const root = document.querySelector('#root');

/**
 * 对于 css，只会重新加载改变了的 css 文件，之所以会重新加载，是因为 css-loader 里面已经帮我们写好了
 * @type {Element}
 */
const btn = document.createElement('button');
btn.innerHTML = '增加';
root.appendChild(btn);

btn.addEventListener('click', function() {
  const div = document.createElement('div');
  div.classList.add('item');
  div.innerHTML = 'item';
  root.appendChild(div);
});

/**
 * 对于 js，只会重新加载改变了的 js 文件，当然需要自己去写热更新的代码
 * @type {Element}
 */
const div = document.createElement('div');
div.innerHTML = 1;
div.addEventListener('click', function() {
  div.innerHTML = parseInt(div.innerHTML) + 1;
});
root.appendChild(div);

createNumber();

// 自己去定义哪些文件改变了会重新加载，否则不会重新加载，然后还要自己写一些处理，像是 Vue-Cli 之类的脚手架，已经帮我们写好了这些
if (module.hot) {
  module.hot.accept('./number', () => {
    document.querySelector('#root').removeChild(document.querySelector('#box'));
    createNumber();
  });
}
