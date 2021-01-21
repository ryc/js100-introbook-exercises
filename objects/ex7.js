// objects - ex7.js

let myProtoObj = {
  foo: 1,
  bar: 2,
};
let myObj = Object.create(myProtoObj);
myObj.qux = 3;

// snippet 1
let objKeys = Object.keys(myObj);
objKeys.forEach(function(key) {
  console.log(key);
});

// snippet 2
for (let key in myObj) {
  console.log(key);
}

// these 2 snippets do not produce the same output because Object.keys method returns only own properties, but for/in returns all (own + inherited) properties.