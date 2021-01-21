// flow control - ex6.js

function isArrayEmpty(arr) {
  if (arr) {
    console.log('Not Empty');
  } else {
    console.log('Empty');
  }
}

isArrayEmpty([]); 
// this logs 'Not Empty' because an empty array evaluates as truthy.