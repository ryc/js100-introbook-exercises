// more stuff - ex2.js

/*
$ node exercise2.js
/Users/wolfy/tmp/exercise2.js:4
  console.log(greeting);
              ^

ReferenceError: greeting is not defined
    at hello (/Users/wolfy/tmp/exercise2.js:4:15)
    at Object.<anonymous> (/Users/wolfy/tmp/exercise2.js:13:1)
    at Module._compile (internal/modules/cjs/loader.js:721:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:732:10)
    at Module.load (internal/modules/cjs/loader.js:620:32)
    at tryModuleLoad (internal/modules/cjs/loader.js:560:12)
    at Function.Module._load (internal/modules/cjs/loader.js:552:3)
    at Function.Module.runMain (internal/modules/cjs/loader.js:774:12)
    at executeUserCode (internal/bootstrap/node.js:342:17)
    at startExecution (internal/bootstrap/node.js:276:5)
*/

/* 
the stack trace says that 
- an error occured in the exercise2.js program at line 4
- the error location corresponds to the argument passed to console.log on line 4
- a ReferenceError is thrown at line 4, column 15 pertaining to the identifier greeting passed as an argument to console.log
- the identifier greeting has not been defined yet
- the error location is part of the function hello
- the function hello is called on line 13, column 1 in an anonymous function, which is the global-level of the program
*/
