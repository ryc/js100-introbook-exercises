// loops - ex3.js

let counter = 0;

while (counter = 1) { 
  console.log(counter);
  counter += 1;

  if (counter > 2) {
    break;
  }
}

/*
The conditional for the while loop on line 5 (counter = 1) is an assignment that will always evaluate to 1(as truthy) which executes the block following it indefinitely. Also, the break on line 10 is never executed because the value of counter does not increment beyond 2 because of the re-assignment in line 5. As a result, an infinite loop occurs.
*/