import React from "react";

function App() {
  //Array reverse order by older way or updated way with at method
  let arr = [1, 2, 3, 4, 5, 6];
  // let arr1 = arr[arr.length - 5];//older method
  let arr1 = arr.at(-5);
  let arr2 = arr.at(-3);
  console.log(arr1, arr2);

  return (
    <div className="container m-4 text-center">
      <h1>JavaScript Coding</h1>
    </div>
  );
}

export default App;
