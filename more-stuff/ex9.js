// more stuff - ex9.js

function negZero(number) {
  return (1 / number === -Infinity);
  // more perforamant way would be:
  // return (number === 0) && (1 / number === -Infinity);
}

console.log(negZero('a'));
console.log(negZero(-0));
