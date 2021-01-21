// objects - ex8.js

let objToCopy = {
  foo: 1,
  bar: 2,
  qux: 3,
};

function copyObj(sourceObject, keys = Object.keys(sourceObject)) {
  if (keys.length === Object.keys(sourceObject).length) return Object.assign({}, sourceObject);

  let destinationObject = {};
  keys.forEach(element => destinationObject[element] = sourceObject[element])
  return destinationObject;
}

let newObj = copyObj(objToCopy);
console.log(newObj);

let newObj2 = copyObj(objToCopy, [ 'foo', 'qux' ]);
console.log(newObj2);

let newObj3 = copyObj(objToCopy, [ 'bar' ]);
console.log(newObj3);