//Shallow Copy
//=> It copy one of top level element or objects.
//=>A shallow copy means that certain (sub-)values are still connected to the original variable.

//Deep copy
//=>deep copies are used for “nested” objects.
//means that all of the values of the new variable are copied
//and disconnected from the original variable.

// Object.assign - it takes two arguments (target object, source object)
//source object - that object we copy that properties.
// target object -  return a copy

//1. Shallow copy
var x = {
  name: "Scikey",
  age: 29,
};

var p1 = Object.assign({}, x); //shallow copy
p1.name = "Srkay"; // If we want change name
console.log(x, p1);

//2. Deep copy
let obj = {
  name: "Hafeez",
  address: {
    city: "Mumabi",
    state: "Maharashtra",
  },
};

let user = JSON.parse(JSON.stringify(obj));
user.address.city = "Noida";

console.log(obj);
console.log(user);
