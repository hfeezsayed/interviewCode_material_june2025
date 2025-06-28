// promises
//1. Promise.allSettled() Promise.allSettled() is useful when you need to handle the results of multiple asynchronous operations, even if some of them fail. It allows you to examine the outcome of each promise individually,
// rather than being stopped by a single rejection.
// Promise.allSettled() is a JavaScript method that takes an array of promises as input and returns a single promise

//example 1
function promiseOne() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("resolved"), 2000);
  });
}

function promiseTwo() {
  return new Promise((resolve, reject) => {
    setTimeout(() => reject("rejected"), 500);
  });
}

Promise.allSettled([promiseOne(), promiseTwo()])
  .then((result) => console.log("result", result))
  .catch((err) => console.log("error", err));
