import React from "react";
import CompB from "./CompB";

const CompA = ({ name }) => {
  return (
    <div>
      <CompB name={name} />
    </div>
  );
};

export default CompA;
