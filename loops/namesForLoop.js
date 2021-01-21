// loops - namesForLoop.js

let names = ['Chris', 'Kevin', 'Naveed', 'Peter', 'Victor'];
let upperNames = [];

for (let index = 0; index < names.length; index += 1) {
  let upperCaseName = names[index].toUpperCase();
  upperNames.push(upperCaseName);
}

console.log(upperNames);