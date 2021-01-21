// loops - ex2.js

let factorial = function(number) {
  let result = 1;
  for(let i = number; i > 0; i -= 1) {
    result *= i;
  }
  return result;
}

console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(4));
console.log(factorial(5));
console.log(factorial(6));
console.log(factorial(7));
console.log(factorial(8));