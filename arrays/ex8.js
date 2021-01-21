// arrays - ex8.js

function oddLengths(array) {
  return array.reduce((result, element) => {
    if (element.length % 2 !== 0) {
      result.push(element.length);
    }

    return result; 
  }, []);
} 

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr));