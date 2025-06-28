import React from "react";

function App() {
  //below example of hoisting - so the below code will print 2 times 1 examp - 1 1
  //explain - bcoz javascript will give the first priority to the function during hoisting
  // So the function will attach to the scope and after it will run the first line..okay
  // but the line is as show = 1 so it will print 1 and after the show function will override
  // to the one so it will print 2 times 1 1
  var show = 1;
  console.log(show);
  function show() {
    console.log("☺️");
  }
  console.log(show);

  return (
    <div className="container m-4 text-center">
      <h1>JavaScript Coding</h1>
    </div>
  );
}

export default App;
