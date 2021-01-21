// objects - ex4.js

let obj = {
  b: 2, 
  a: 1, 
  c: 3,
};

let arr = Object.keys(obj).map(str => str.toUpperCase());
console.log(arr);
console.log(obj);