// more stuff - ex4.js

let a = [1, 6, 3, 2];
let b = [-1, -6, -3, -2];
let c = [2, 2];

function largestNum(arr) {
// validating numbers in the array
  arr.forEach(num => {
    if (typeof num !== 'number') {
      throw new TypeError('not an array of numbers');
    }
  });

  return arr.reduce((accumulator, currentValue) => {   // using the return of calling reduce as the return value of the entire function
    if (accumulator > currentValue) return accumulator;  // this and the following return are for the callback function of the .reduce call  
    return currentValue;
  }); // not providing an initial value to accumulator so first element is assigned to accumulator and the second element to currentValue

}

console.log(largestNum(a));
console.log(largestNum(b));
console.log(largestNum(c));

// alternatively, console.log(Math.max(1, 6, 3, 2));
