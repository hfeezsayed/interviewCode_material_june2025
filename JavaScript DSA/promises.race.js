// promises
//1. Promise.race() Promise. race() returns a promise that resolves or reject to the value from the first settled promise.

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

Promise.race([promiseOne(), promiseTwo()])
  .then((result) => console.log("result", result))
  .catch((err) => console.log("error", err));
