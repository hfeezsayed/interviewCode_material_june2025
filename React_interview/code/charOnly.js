import axios from "axios";
import React, { useState } from "react";

const App = () => {
  const [inputVal, setInputVal] = useState("");

  const charOnly = (e) => {
    setInputVal(e.target.value.replace(/[^a-zA-Z]/g, ""));
  };
  return (
    <>
      <div className="container">
        <input type="text" value={inputVal} onChange={charOnly} />
      </div>
    </>
  );
};

export default App;
