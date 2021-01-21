// loops - ex6.js

let factorial = function(number) {
  let result = 1;
  if (number === 1) return number;
  return number * factorial(number - 1)
}

console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(4));
console.log(factorial(5));
console.log(factorial(6));
console.log(factorial(7));
console.log(factorial(8));