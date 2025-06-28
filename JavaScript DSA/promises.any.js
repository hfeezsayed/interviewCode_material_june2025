// promises
//1. Promise.any() Promise.any() method is settled as soon as any of the promises you feed it is
//fullfilled or they are all rejected.

//example 1
function promiseOne() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("first data"), 2000);
  });
}

function promiseTwo() {
  return new Promise((resolve, reject) => {
    setTimeout(() => reject("rejected"), 500);
  });
}

function promiseThree() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("third data"), 500);
  });
}

Promise.any([promiseOne(), promiseTwo(), promiseThree()])
  .then((result) => console.log("result", result))
  .catch((err) => console.log("error", err));
