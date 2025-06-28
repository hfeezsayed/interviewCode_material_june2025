import React, { useState } from "react";
import "./App.css";
import Child from "./Child";

function App() {
  function getData(data) {
    console.log(data);
  }
  return (
    <div className="App">
      <div className="container mt-3 text-center">
        <h1>State Lifting or Data pass from child to Parent</h1>
        <Child getData={getData} />
      </div>
    </div>
  );
}

export default App;
