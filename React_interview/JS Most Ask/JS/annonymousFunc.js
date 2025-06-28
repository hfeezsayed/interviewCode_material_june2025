//example -1 for anonymous function
function sum(a) {
  return function (b) {
    return function (c) {
      console.log(a + b + c);
    };
  };
}

sum(1)(2)(3)(
  //example -2 for anonymous function
  () => {
    return console.log("test");
  }
)();

//example 3
var anon = function () {
  console.log("This is anonymous");
};
anon();
