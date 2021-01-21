// flow control - ex7.js

let upCaseWhenLong = text => {
  if (text.length > 10) {
    return text.toUpperCase();
  } else {
    return text;
  }
}

console.log(upCaseWhenLong('abcedfghi'));
console.log(upCaseWhenLong('abcedfghij'));
console.log(upCaseWhenLong('abcedfghijk'));