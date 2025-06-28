import React from "react";
import Child from "./Child";

const Parent = () => {
  const val = "This is parent component";
  return (
    <div>
      <h2>This is Parent component</h2>
      <Child data={val} />
    </div>
  );
};

export default Parent;
