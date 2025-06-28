import React, { useRef, useState } from "react";

const App = () => {
  const [inputValue, setInputValue] = useState("John");
  const inputRef = useRef();
  const changeHandle = () => {
    setInputValue(inputRef.current.value);
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-offset-4 col-md-4 mt-3 text-center">
            <p>My name is {inputValue}</p>
            <input
              type="text"
              placeholder="name..."
              className="from-control"
              ref={inputRef}
            />
            <button onClick={changeHandle} className="btn btn-primary mt-3">
              Add
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
