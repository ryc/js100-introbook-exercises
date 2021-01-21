// variables - ex5.js

let foo = 'bar';
{
  let foo = 'qux';
}

console.log(foo); // logs bar since the second variable foo(line 5) has a block // scope and is not available outside the block.
