import React, { useState } from "react";

const App = () => {
  const handleClick = () => {
    console.log("Button clicked in parent component");
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-offset-4 col-md-4 mt-3 text-center">
            <ChildComponent
              message="Hello from parent"
              handleClick={handleClick}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
