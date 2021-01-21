// more stuff - ex5.js

function doSomething(string) {
  return string.split(' ').reverse().map((value) => value.length);
}

/*
 the function doSomething takes a string as an argument and 
 - returns an array of parts of the string separated by spaces, then
 - reverses the order of elements in the array, then
 - returns a new array containing the lengths of the elements of the 
 reversed array
*/

console.log(doSomething('Simpler than yesterday!'));