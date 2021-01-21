// arrays - ex1.js

let array1 = [1, 2, undefined, 4]; // length is 4 - highest index + 1(3 + 1)

let array2 = [1];
array2.length = 5; // length is 5 - explicitly set and empty values are added to this array

let array3 = [];
array3[-1] = [1]; // length is 0 - only non-negative integer indexes count toward the length

let array4 = [1, 2, 3, 4, 5];
array4.length = 3; // length is 3 as it is expliccity set and the extra elements are truncated

let array5 = [];
array5[100] = 3; // length is 101 i.e highest index position + 1


/*
for (let i = 1; i < 6; i += 1) {
  console.log(`${array${i}.length}`);
}
*/