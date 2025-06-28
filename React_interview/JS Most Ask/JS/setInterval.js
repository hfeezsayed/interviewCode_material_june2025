//setInterval vs setTimeout

//The setTimeout() method is used to call a function after a certain period of time.
//The setInterval() Javascript method is used to call a function repeatedly at a specified interval of time.
//setTimeout() is cancelled by clearTimeout() method, and setInterval() is cancelled by clearInterval() method

function myFunc() {
  setTimeout(() => {
    console.log("Set timeoout!");
  }, 2000);
}

function greet() {
  console.log("Hello world");
}
setInterval(greet, 3000);
