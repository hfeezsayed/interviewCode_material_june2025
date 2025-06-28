import React from "react";
import CompC from "./CompC";

const CompB = ({ name }) => {
  return (
    <div>
      <CompC name={name} />
    </div>
  );
};

export default CompB;
