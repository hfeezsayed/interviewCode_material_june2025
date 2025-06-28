//Apply method
let men = {
  personDetails: function (city, country) {
    console.log(this.name + " " + this.age + " " + city, country);
  },
};

let men1 = {
  name: "Salman",
  age: 29,
};

men.personDetails.apply(men1, ["Oslo", "Norway"]);

//Call method
let person = {
  personDetails: function (city, country) {
    console.log(this.name + " " + this.age + " " + city, country);
  },
};

let person1 = {
  name: "Salman",
  age: 29,
};

person.personDetails.call(person1, "Oslo", "Norway");

//Bind method
let bindMen = {
  personDetails: function (city, country) {
    console.log(this.name + " " + this.age + " " + city, country);
  },
};

let bindMen1 = {
  name: "Salman",
  age: 29,
};

let x = bindMen.personDetails.bind(bindMen1, "Oslo", "Norway");
x();
//The Bind() Method creates a new function and when that new function is called it set
// this keyword to the first argument which is passed to the bind method.
