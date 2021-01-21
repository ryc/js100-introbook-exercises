// arrays - ex3.js

let myArray = [
  [1, 3, 6, 11],
  [4, 2, 4],
  [9, 17, 16, 0]
];

evens = myArray.flat().filter(num => num % 2 === 0);
evens.forEach(num => console.log(num));