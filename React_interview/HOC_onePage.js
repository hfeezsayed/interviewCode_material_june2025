import React, { useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container mt-3 text-center">
        <h1>Learn Higher Order Components</h1>
        <HOC cmp={Counter} />
      </div>
    </div>
  );
}

function HOC(props) {
  return (
    <>
      <props.cmp />
    </>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>{count}</h1>
      <button className="btn btn-danger" onClick={() => setCount(count + 1)}>
        Count
      </button>
    </>
  );
}

export default App;
