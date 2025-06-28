import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [fontColor, setFontColor] = useState(false);
  return (
    <div className="App">
      <h1 style={{ color: fontColor ? "red" : "green" }}>Welcome To Hafeez</h1>
      <button onClick={() => setFontColor(!fontColor)}>Change Color</button>
    </div>
  );
};
export default App;
