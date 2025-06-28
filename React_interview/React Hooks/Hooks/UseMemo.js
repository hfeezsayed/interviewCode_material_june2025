import React, {
  useEffect,
  useState,
  useRef,
  createContext,
  useCallback,
  useContext,
  useMemo,
  useReducer,
} from "react";

const App = () => {
  const [count, setCount] = useState(0);

  const dummy = () => {
    console.log("dummy function");
    for (let i = 0; i < 2000000000000; i++) {
      return "Hello world";
    }
  };

  //const data = dummy()// without useMemo

  const data = useMemo(() => {
    return dummy();
  }, []);

  return (
    <div className="container mt-4">
      <div className="main-div">
        <p>{data}</p>
        <p>{count}</p>
        <button onClick={() => setCount(count + 1)}>click me</button>
      </div>
    </div>
  );
};

export default App;
