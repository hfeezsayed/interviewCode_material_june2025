import React, { useEffect, useState } from "react";

const ProgressBar = ({ value = 0 }) => {
  const [percent, setPercent] = useState(value);

  useEffect(() => {
    //so it doesn't go beyond 100%
    setPercent(Math.min(100, Math.max(value, 0))); //this math.min method will take only 100 it will not go over 100
  }, [value]); //the value will be updated every time.

  return (
    <div className="progress-bar-block">
      <span style={{ color: percent > 49 ? "white" : "black" }}>
        {percent.toFixed()}%
      </span>
      <div className="fillColor" style={{ width: `${percent}%` }} />
    </div>
  );
};

export default ProgressBar;
