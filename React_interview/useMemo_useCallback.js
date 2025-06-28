import React, { useCallback, useMemo } from "react";
import "./styles.css";

export default function App() {
  const values = [3, 9, 6, 4, 2, 1];

  const memoizedValue = useMemo(() => values.sort(), [values]);
  console.log(memoizedValue);
  //// This will always return the same value, a sorted array. Once the values array changes then this will recompute.

  const memoizedFunction = useCallback(() => values.sort(), [values]);
  console.log(memoizedFunction);
  //This will give me back a function that can be called later on. It will always return the same result unless the values array is modified.

  return <div className="App"></div>;
}
//The key difference is that useMemo returns a memoized value, whereas useCallback returns a memoized function.
//That means that
//useMemo is used for storing a computed value, while useCallback returns a function that you can call later on.
