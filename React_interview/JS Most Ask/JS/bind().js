// Bind Method

const person = {
  firstName:"John",
  lastName: "Doe",
  fullName: function () {
    console.log(this.firstName + " " + this.lastName) 
  }
}

const member = {
  firstName:"Ram",
  lastName: "shayam",
}

let fullName = person.fullName.bind(member);
fullName()
