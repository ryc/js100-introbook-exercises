// arrays - ex6.js

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

let oddLengths = array => {
  let lenArray = array.map(string => string.length);
  return lenArray.filter(num => num % 2 !== 0);
}

console.log(oddLengths(arr));