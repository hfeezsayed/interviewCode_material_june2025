// Implement a debounce function with parameters (fn, delay) and explain with examples.
//1. Debounce
//example 1
function debounce(fn, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}

//explanation
// The debounce function takes a function fn and a delay delay as parameters.It returns a new function
// that wraps the original function. When the wrapped function is called,
// it clears any existing timeout and sets a new timeout to call the original function after the specified delay.

//Question - Given an array ['orange', 'apple', 'mango'], return the common characters in javascript like ['a']
let fruits = ["orange", "apple", "mango"];
function commonCharactors(arr) {
  let commonChar = arr[0].split(""); // Split the first string into characters
  commonChar = commonChar.filter((val) => {
    return arr.every((str) => str.includes(val));
  }); // Filter characters that are common in all strings
  commonChar = [...new Set(commonChar)]; // Remove duplicates by converting to a Set and back to an array
  return commonChar;
}
console.log(commonCharactors(fruits));
