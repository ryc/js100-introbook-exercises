// flow control - ex3.js

let evenOrOdd = num => {
  if (!Number.isInteger(num)) {
    console.log('That is not an integer!');
    return;
  }
  
  if (num % 2 === 0) {
    console.log('even');
  } else {
    console.log('odd');
  }
}

evenOrOdd(3);