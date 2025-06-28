import React, { useEffect, useState } from "react";
import "./App.css";

//We can use the React useEffect Hook to perform side effects in function components
//Which of the following are examples of useEffect side effects in React?
//Data fetch requests, direct DOM manipulations,
//and the use of timer functions such as setTimeout() are examples of side effects
//It accept two values first sideEffect function and second dependency array that is the optional.

function UseEffectComponent() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState("Hafeez");
  const [timer, setTimer] = useState(0); //this is used for WillUnMount

  // useEffect(() => {
  //   console.log("Component Mounted");
  // }); //Without dependency everytime it would be render whenever state is updated.

  //With empty array dependency only first time will render
  //With value in the array that would be update and render

  useEffect(() => {
    console.log("Component Mounted");
  }, [data]);

  const updateTask = () => {
    setCount(count + 1);
  };

  const updateData = () => {
    setData("Hafeez Ali");
  };

  //3. useEffect for componentWillUnmount means remove value.
  useEffect(() => {
    const timerF = setInterval(() => {
      setTimer(timer + 1);
    }, 1000); //It will render in every 1 milisecond
    return () => clearInterval(timerF);
  });

  return (
    <div className="container text-center my-3">
      <h1 className="mb-3">React useEffect {timer}</h1>
      <p>Button cliked {count} times.</p>
      <button onClick={updateTask} className="btn btn-warning mx-2">
        Click
      </button>
      <button onClick={updateData} className="btn btn-warning">
        Update Data
      </button>
    </div>
  );
}

export default UseEffectComponent;
