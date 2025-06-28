
//Difference between normal function and arrow function?

//Normal function
//1. Normal function have arguments objects
//exampl-1
function add(x, y) {
	console.log(arguments)
	return x + y;
}
add(10, 20) // [object Arguments] {0: 10, 1: 20 }

//Example-2
//2. Regular function are constructible
function Car(name) {
	this.brand = name
}
let carData = new Car("Maruti") // This line is constructor
console.log(carData) //{brand: "Maruti"}




//Arrow Function
//1. Arrow function don't have arguments objects.
//exampl-1
const add = (x, y) => {
	console.log(arguments)
	return x + y;
}
add(10, 20) //Ref Error: - Arguments is not defind 

//Example-2
//2. Arrow function are not constructible.
const Car = (name) => { // note:- arrow function don't have own this.
	this.brand = name
}
let carData = new Car("Maruti") // This line is constructor
console.log(carData) //Type error: Car is not constructor
