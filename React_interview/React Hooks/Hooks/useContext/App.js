import { createContext, useState } from "react";
import "./App.css";
import A from "./usecontext/A";

//1. Create the context
const nameContext = createContext();
const ageContext = createContext();

function App() {
  const name = "Hafeez";
  const age = "30";

  return (
    <div className="container my-3">
      <h3 className="mb-3">React Hooks</h3>
      <nameContext.Provider value={name}>
        <ageContext.Provider value={age}>
          <A />
        </ageContext.Provider>
      </nameContext.Provider>
    </div>
  );
}

export default App;
export { nameContext, ageContext };
