import React, { useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState(" ");

  const charAllow = (e) => {
    const inputText = e.target.value.replace(/[^a-zA-Z]/gi, "");
    setValue(inputText);
  };

  return (
    <div className="App">
      <h1>
        Restrict Input Textbox Allow Only Letters Or Characters In ReactJS
      </h1>
      <input
        type="text"
        placeholder="Enter some text..."
        value={value}
        onChange={charAllow}
      />
    </div>
  );
}

export default App;
