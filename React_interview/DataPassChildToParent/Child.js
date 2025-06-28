import React, { useState } from "react";

const Child = (props) => {
  const [name, setName] = useState("");

  const onSubmitHandle = (e) => {
    e.preventDefault();
    props.getData(name);
  };
  return (
    <>
      <form onSubmit={onSubmitHandle}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button className="btn btn-success">Submit</button>
      </form>
    </>
  );
};

export default Child;
