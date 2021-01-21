// functions - greeter.js

let rlSync = require('readline-sync'); // this can be inside the function to save memory

function getName(text) {
  input = rlSync.question(text);
  return input;
}

let fname = getName('What is your first name? ');
let lname = getName('What is your last name? ');
console.log(`Hello, ${fname} ${lname}!`);
