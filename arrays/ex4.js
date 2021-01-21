// arrays - ex4.js

let myArray = [
  1, 3, 6, 11, 
  4, 2, 4, 9,
  17, 6, 0
];

let newArray = myArray.map(num => {
  if (num % 2 === 0) {
    return 'even';
  } else {
    return 'odd';
  }
});

console.log(newArray);