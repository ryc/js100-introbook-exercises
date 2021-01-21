// the basics - ex2.js

let num = 4936;
let ones = num % 10;

num = (num - ones) / 10;
let tens = num % 10;

num = (num - tens) / 10;
let hundreds = num % 10;
let thousands = (num - hundreds) / 10;

console.log(`thousands place is: ${thousands}`);
console.log(`hundreds place is: ${hundreds}`);
console.log(`tens place is: ${tens}`);
console.log(`ones place is: ${ones}`);
