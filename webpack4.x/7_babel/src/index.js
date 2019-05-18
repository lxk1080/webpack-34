// import '@babel/polyfill';

const arr = [
  new Promise(() => {}),
  new Promise(() => {}),
];

arr.map(item => console.log(item));

const set = new Set(['qwer', 2, 3]);
