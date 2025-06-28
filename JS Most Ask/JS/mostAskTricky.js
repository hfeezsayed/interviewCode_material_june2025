//1.
a()
function a(){
    console.log("a") // "a" becoz function and varriable are hoisted
}
b();
var b = function(){
    console.log("b") // b is not a function bcoz function is stored in b while stored function are not hoisted in js
}

//2.
var a;
function myFunction(){
    return a = 2
}
 myFunction() //2
//Note for example 2
//When we do assignments without declarations in JavaSacript (a=2), the compiler will save 
//the variable in the global scope. That’s why the output is 2 . 
//You can avoid this behavior if you want, by using the strict mode "use strict” . 


//3.
var a = 1
function foo(){
 var a = 2
 console.log(a) //2 becoz this is local scope variable
}
foo()
console.log(a); //1 it is the global variable
// so first output would be 2 and second is one.


//4.
functionExpression() // TypeError: functionExpression is not a function.
const functionExpression = function() {
  console.log('Not Hoisted')// functionExpression is not access before initilization.
} // note - functionExpression is not hoisted in javascript.

//5.
console.log(y);
y = 1; // Reference error - y is not defined 

//6.
console.log(y); // undefined
var y = 2;

//7.
y = 3;
console.log(y); // 3
var y; 

//8.
var z = 1;
let z;
console.log(z); // Z has been already declared