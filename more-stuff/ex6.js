// more stuff - ex6.js

let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];

function allMatches(array, regex) {
  return array.filter(word => regex.test(word));
}

console.log(allMatches(words, /lab/));