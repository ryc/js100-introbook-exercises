// more stuff - ex-1.js

let array1 = [1, 2, 3];
let array2 = array1;
array1[1] = 4;
console.log(array2);

// this will log [1, 4, 3] to the console because line 5 mutates array1 which is also the object referenced by array2.
