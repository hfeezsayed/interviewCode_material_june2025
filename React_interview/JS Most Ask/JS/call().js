// Call method example Start
 
 //Scenario 1 with inside function 
let person = {
 name: "Hafeez",
 age: 28,
 personDetails: function() {
    console.log(this.name)
 }
}

person.personDetails();

let person1 = {
 name: "Salman",
 age: 55,
}

person.personDetails.call(person1);


//Scenario 2 with outside function
 let person = {
 name: "Hafeez",
 age: 28,
}

let personDetails = function() {
    console.log(this.name)
}
 
personDetails.call(person);

let person1 = {
 name: "Salman",
 age: 55,
}

personDetails.call(person1);

// Call method example End