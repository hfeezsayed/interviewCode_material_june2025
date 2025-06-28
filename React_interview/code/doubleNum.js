//How to double array's value
const arr = [2, 3, 4, 5];
//const doubled = arr.map((num) => num * 2) //1st method with arrow function
const doubled = arr.map(function (num) {
  return num * 2;
}); //2nd method with normal function
//console.log(doubled);

//Nested object with destructuring
const person = {
  name: "Hafeez",
  address: {
    city: "Mumbai",
  },
};

const {
  name,
  address: { city },
} = person;
console.log(person);
