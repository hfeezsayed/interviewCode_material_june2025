import React, { useReducer } from "react";
import "./App.css";

function App() {
  const initialState = true;

  const reducer = (state, action) => {
    switch (action.type) {
      case "HIDE": {
        return false;
      }
      case "SHOW": {
        return true;
      }
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="container mt-4">
      {state && <p>Hafeez</p>}
      <button onClick={() => dispatch({ type: state ? "HIDE" : "SHOW" })}>
        Hide and Show
      </button>
      <div className="text-center" id="main"></div>
    </div>
  );
}

export default App;
