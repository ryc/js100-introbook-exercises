// functions - ex1.js

let bar = 1;
function foo() {
  let bar = 2;
}

foo();
console.log(bar);

/* 
this code logs 1 to the console. The foo function call on line 8 makes no difference to the output since the variable declared inside the function has a
block-scope and is not accessible outside the function. 
*/