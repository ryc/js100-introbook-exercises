// loops - ex4.js

for (i = 0; i < 5;) {
  console.log(i += 1);
}

/*
this code does not produce any error although the increment/decrement part of the for loop is missing because all 3 components of the for loop - initialization, stopping condition, increment/decrement - are optional.
Also, the loop variable i in incremented on line 4 (i += 1).

In each iteration the loop variable is incremented by 1 and logged to the console. Hence, the following is logged by the code on the console:
1
2
3
4
5
*/
