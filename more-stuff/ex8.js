// more stuff - ex8.js

function isNotANumber(value) {
  return typeof value !== 'number';
  // return value !== value; (this works because NaN is the only value in JS that is not === to itself.)
}

console.log(isNotANumber(2.232));
console.log(isNotANumber('a'));