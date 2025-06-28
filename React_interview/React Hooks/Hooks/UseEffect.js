import React, { useEffect, useState } from "react";

//Below Basic example of UseEffect as LifeCycleMethod
// const [user, setUser] = useState("")
// useEffect(() => {
//     console.log('DidMount')
// }, [])//componentDidMount

// useEffect(() => {
//     console.log('DidUpdate')
// }, [user])//componentDidUpdate

// useEffect(() => {
//     return () => console.log('UNMOUNT', props)
// }, [])//componentWillUnmount

export const UseEffect = () => {
  // const [count, setCount] = useState(0);
  // const [count2, setCount2] = useState(0);
  const [timer, setTimer] = useState(0);

  //1. useEffect without dependency means empty array.
  //It will render again and again
  // useEffect(() => {
  //   document.title = `${count} Count`;
  // });

  //2. useEffect with dependency of array.
  //It will render only the first time.
  // useEffect(() => {
  //   document.title = `${count} Count`;
  // }, []);//componentDidMount

  //2. useEffect with dependency of array.
  //It will render only the first time. Whenever we want update our state
  // useEffect(() => {
  //   document.title = `${count2} Count`;
  // }, [count2]);//ComponentDidUpdate

  //3. useEffect for componentWillUnmount means remove value.
  // useEffect(() => {
  //   const timerF = setInterval(() => {
  //     setTimer(timer + 1);
  //   }, 1000); //It will render in every 1 milisecond
  //   return () => clearInterval(timerF);
  // });

  return (
    <div>
      {/* <div className="mb-2">
        <h1>Count: {count}</h1>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <br />
        <br />
        <h1>Count: {count2}</h1>
        <button onClick={() => setCount2(count2 + 1)}>Increment</button>
      </div> */}

      <div className="mb-2">
        <h1>Timer: {timer}</h1>
      </div>
    </div>
  );
};
