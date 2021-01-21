// flow control - ex8.js

function numberRange(number) {
  if (number < 0) {
    console.log(`${number} is less than 0`);
  } else if (number < 51) {
    console.log(`${number} is between 0 and 50`);
  } else if (number < 100) {
    console.log(`${number} is betwen 51 and 100`);
  } else {
    console.log(`${number} is greater than 100`);
  }
}

numberRange(25);
numberRange(75);
numberRange(125);
numberRange(-25);