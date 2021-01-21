// functions - ex3.js

let multiply = (x, y) => x * y;

let getNumber = text => {
  let rlSync = require('readline-sync');
  input = rlSync.question(text);
  return parseFloat(input);
}

number1 = getNumber('Enter the first number: ');
number2 = getNumber('Enter the second number: ');
console.log(`${number1} * ${number2} = ${multiply(number1, number2)}`);