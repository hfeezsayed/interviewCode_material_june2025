import React, { useState } from "react";

const App = () => {
  const [fontColor, setFontColor] = useState(false);
  return (
    <>
      <div className="container">
        <div className="row mt-3">
          <div className="col-md-12 text-center">
            <h2 style={{ color: fontColor ? "brown" : "orange" }}>
              Can you change my color?
            </h2>
            <button
              onClick={() => setFontColor(!fontColor)}
              className="btn btn-success"
            >
              Change color
            </button>
          </div>
        </div>
      </div>
      ;
    </>
  );
};

export default App;
