import React, { useCallback, useState } from "react";

const useCalllback = () => {
  const [count, setCount] = useState(0);
  // Define a callback function using useCallback
  const handleIncrement = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  return (
    <div>
      <h1>Count: {count}</h1>
      <ChildComponent increment={handleIncrement} />
    </div>
  );
};

function ChildComponent({ increment }) {
  return <button onClick={increment}>Increment Count</button>;
}

export default useCalllback;
