// variables - ex6.js

const FOO = 'bar';
{
  const FOO = 'qux';
}

console.log(FOO); // logs bar because the constant FOO available on line 8 is the one defined on line 3 in the global scope.