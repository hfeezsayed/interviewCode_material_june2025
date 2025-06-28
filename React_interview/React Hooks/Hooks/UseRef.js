import React, { useEffect, useRef, useState } from "react";

const UseRef = () => {
  const [name, setName] = useState();
  const count = useRef(0);
  //   const inputRef = useRef();
  //   const handleSubmit = () => {
  //     inputRef.current.style.width = "300px";
  //     inputRef.current.focus();
  //   };

  useEffect(() => {
    count.current = count.current + 1;
  });

  return (
    <div>
      <h1>UseRef</h1>
      {/* <input ref={inputRef} /> */}.
      {/* <button onClick={handleSubmit}>Submit</button> */}
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <h3>Input value is: {name}</h3>
      <h3>Text Count: {count.current}</h3>
    </div>
  );
};

export default UseRef;
