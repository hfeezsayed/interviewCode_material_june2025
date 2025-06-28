// promises
//1. Promise.all()
// Promise.all(): promise.all() method returns a single promise from a list of promises, when all promises
// Fulfill. Its handling multiple API request simultaneously.
// If any promise rejects, the return promise reject with the reason of first promise that rejected.

//example 1
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Promise 1 resolved"), 2000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject("Promise 2 rejected"), 1000);
});

Promise.all([promise1, promise2])
  .then((results) => console.log(results))
  .catch((err) => console.log(err));

//example 2
const fetchUserData = fetch("https://api.example.com/user");
const fetchPosts = fetch("https://api.example.com/posts");
const fetchComments = fetch("https://api.example.com/comments");

Promise.all([fetchUserData, fetchPosts, fetchComments])
  .then(([userData, posts, comments]) => {
    console.log(userData.ok, posts.ok, comments.ok);
  })
  .catch((err) => console.log(err));
