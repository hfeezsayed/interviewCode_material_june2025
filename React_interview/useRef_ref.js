import React, { useRef, useState } from "react";
import "./styles.css";

export default function App() {
  const [name, setName] = useState("Hafeez");
  const inputRefs = useRef();

  const addHandler = () => {
    setName(inputRefs.current.value);
  };
  return (
    <div className="App">
      <h1>{name}</h1>
      <input type="text" placeholder="use useRef..." ref={inputRefs} />
      <button onClick={addHandler}>Add</button>
    </div>
  );
}
