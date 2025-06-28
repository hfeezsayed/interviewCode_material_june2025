import React, { useEffect, useState } from "react";
import ProgressBar from "./ProgressBar";

const App = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setValue((val) => val + 1);
    }, 50);
  }, []);

  return (
    <div className="container mt-5">
      <div className="myProgress-bar">
        <span>Progress bar</span>
        <ProgressBar value={value} />
      </div>
    </div>
  );
};

export default App;
