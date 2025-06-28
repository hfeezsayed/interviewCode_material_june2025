import React, { useEffect, useState, useRef } from "react";

const App = () => {
  const textInput = useRef(null);
  useEffect(() => {
    textInput.current.focus();
  }, []);

  return (
    <div className="container mt-5">
      <p>How to set focus on an input field after component mounts on UI?</p>
      <input ref={textInput} type="text" />
    </div>
  );
};

export default App;
