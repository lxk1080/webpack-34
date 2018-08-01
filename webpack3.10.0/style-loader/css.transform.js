// 此函数将运行在css样式插入到html中时，所以这个时候可以使用window对象
// 对于每个css文件都会运行一次此函数
module.exports = function(css) {
  console.log(css);
  console.log(window.innerWidth);

  // 因为是已经插入到了html中，所以对于以下情况，改变窗口大小后，需要刷新才能看到效果
  if (window.innerWidth > 768) {
    return css.replace('red', 'blue');
  } else {
    return css.replace('blue', 'red');
  }
}
