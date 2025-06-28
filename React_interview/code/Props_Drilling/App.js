import React from "react";
import "./App.css";
import CompA from "./CompA";

function App() {
  const name = "Hafeez Ali";
  return (
    <div className="App">
      <div className="container mt-3 text-center">
        <h1>Learn Props Drilling</h1>
        <CompA name={name} />
      </div>
    </div>
  );
}

export default App;
