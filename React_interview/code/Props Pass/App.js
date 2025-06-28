import React from "react";
import Parent from "./Parent";

const App = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h1 className="mb-3">Learn React</h1>
            <Parent />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
