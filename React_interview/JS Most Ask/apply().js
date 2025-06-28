
//Apply method

let person = {
   name: "Hafeez",
   age: 28,
   personDetails: function(city, country) {
     console.log(this.name + " " + this.age + " " + city, country)
   }
}

let person1 = {
   name: "Salman",
   age: 29,
}

person.personDetails.apply(person1, ["Oslo", "Norway"])