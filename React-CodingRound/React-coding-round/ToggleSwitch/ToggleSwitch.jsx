import { useState } from "react";
import "./App.css";

function App() {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <h1 style={{ color: "#000", textAlign: "center" }}>Toggle Switch</h1>
      <div style={{ textAlign: "center" }}>
        <button
          className={`toggle-btn ${toggle ? "toggle" : ""} `}
          onClick={() => setToggle(!toggle)}
        >
          <div className="switch">{toggle ? "ON" : "OFF"}</div>
        </button>
        {toggle && <p>Welcome</p>}
      </div>
    </>
  );
}

export default App;
