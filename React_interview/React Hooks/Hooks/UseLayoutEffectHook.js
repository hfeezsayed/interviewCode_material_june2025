import React, { useEffect, useLayoutEffect, useState } from "react";

const UseLayoutEffectHook = () => {
  const [toggle, setToggle] = useState(false);

  //What is flow of run the dom
  useEffect(() => {
    //It will run third
    console.log("useEffect");
  }, [toggle]);

  useLayoutEffect(() => {
    //It will run 1st
    console.log("useLayoutEffect");
  }, [toggle]);

  return (
    //It will run 2nd
    <div>
      {toggle && <h2>Hafeez Ali</h2>}
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
    </div>
  );
};

export default UseLayoutEffectHook;
