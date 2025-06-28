import React, { useState } from "react";
import onImg from "./img/bulb_off.gif";
import offImg from "./img/bulb_on.gif";

const App = () => {
  const [changeImg, setChangeImg] = useState(false);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12 mt-3 text-center">
            <div>{changeImg ? <img src={offImg} /> : <img src={onImg} />}</div>
            <button
              onClick={() => setChangeImg(!changeImg)}
              className="btn btn-warning"
            >
              On /Off
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
