//Event Loop
//An event loop is something that pulls stuff out of the queue and places it into
// the execution stack whenever the function stack becomes empty.
//The event loop is the secret behind JavaScript’s asynchronous programming

//It is used to monitor the Call Stack and the Callback Queue. If the Call Stack is empty,
//the Event Loop will take the first event from the queue and will push it to the Call Stack, which effectively runs it

// blow is the workflow of event loop
//call stack => call to web api => event queue => event loop => call stack

//example 1
let a = true;
setTimeout(() => {
  a = false;
}, 2000);
while (a) {
  console.log("Hello ajay"); // Output - infinite loop with "Hello Ajay"
}

//Event loop - example 2
console.log("start");

setTimeout(() => {
  console.log("Process");
}, 3000);

console.log("End");
