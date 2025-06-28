import React, { useContext } from "react";
import { nameContext, ageContext } from "../App";

const C = () => {
  const firstName = useContext(nameContext);
  const age = useContext(ageContext);

  return (
    <div>
      <p>
        My name is {firstName} and I am {age} years old.
      </p>
    </div>
  );
};

export default C;
