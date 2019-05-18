function createNumber() {
  const root = document.querySelector('#root');
  const box = document.createElement('div');
  box.id = 'box';
  box.innerHTML = 3000; /* 变换数字，如果开启了热更新，则只会重新加载改变了的js文件，不会刷新浏览器 */
  root.appendChild(box);
}

export default createNumber;
