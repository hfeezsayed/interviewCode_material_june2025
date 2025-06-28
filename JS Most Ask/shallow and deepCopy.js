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

// JSON.stringify() methods of JavaScript.
// JSON.stringify() takes a JavaScript object as an argument and then transforms it into a JSON string.
// This JSON string is passed to the JSON.parse() method which then transforms it into a JavaScript object.

//disadvantage of deep copy that function will not work in deep copy so we can lodash cdn or lodash package npm
//we can use  _.cloneDeep(obj) in lodash library

//noraml way
// let a = {
//   name: "Hafeez"
// }

// let y = a;
// y.name = "Mithun";
// console.log(a)//Mithun becoz this way change the memory location;

//1. Shallow copy
// let x = {
//   name: "Scikey",
//   age: 29,
// };

// let p1 = Object.assign({}, x); //first way access of shallow copy;
// //let p1 = {...x} //Second way by de-structuring of access shallow copy
// p1.name = "Srkay"; // If we want change name
// console.log(p1); //Srkay;

// //2. Deep copy
// let obj = {
//   name: "Hafeez",
//   address: {
//     city: "Mumabi",
//     state: "Maharashtra",
//   },
// };

// let user = JSON.parse(JSON.stringify(obj));
// user.address.city = "Noida";

// console.log(obj);
// console.log(user);
