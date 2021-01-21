// objects - ex9.js

let foo = {
  a: 'hello',
  b: 'world',
};

let qux = 'hello';

function bar(argument1, argument2) {
  argument1.a = 'hi';
  argument2 = 'hi';
}

bar(foo, qux);

console.log(foo.a); // this will log 'hi' since the object are mutable and the value of the property a got mutated by the function call in line 15 from 'hello' to 'hi'
console.log(qux); // this logs the original value of the qux variable 'hello' since the function call on line 15 reassigned argument2 to 'hi' which points away from the value referenced by qux (hello) and hence does not affect the value of qux.