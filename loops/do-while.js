// loops - do-while.js

let answer;

do {
  let rlSync = require('readline-sync');
  answer = rlSync.question('Do you want to do that again? ');
} while (answer === 'y');