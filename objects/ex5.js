// objects - ex5.js

let myProtoObj = {
  foo: 1,
  bar: 2,
};

let myObj = Object.create(myProtoObj);

for (let prop in myObj) {
  console.log(prop);
}