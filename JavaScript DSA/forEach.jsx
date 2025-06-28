import React from "react";

function App() {
  //Ex-1 - in this example will b print only "Hey" bcoz forEach will take index while
  // we r not giving any index here.
  const arr = new Array(2);
  console.log("Hey");
  arr.forEach((elem) => {
    console.log("☺️");
  });

  //Ex-1 - in this example it will print Hey and emojy bcoz it got index by this [...arr1]
  const arr1 = new Array(2);
  console.log("Hey");
  [...arr1].forEach((elem) => {
    console.log("☺️");
  });

  return (
    <div className="container m-4 text-center">
      <h1>JavaScript Coding</h1>
    </div>
  );
}

export default App;
