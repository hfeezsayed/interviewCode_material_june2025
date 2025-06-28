import React from "react";

const Child = (props) => {
  return (
    <div>
      <h3>This is child component</h3>
      {props.data}
    </div>
  );
};

export default Child;
