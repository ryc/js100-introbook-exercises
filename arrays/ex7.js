// arrays - ex7.js

let array = [3, 5, 7];

let sumSquares = array.reduce((accumulator, element) => {
  return accumulator + element * element;
}, 0);

console.log(sumSquares);