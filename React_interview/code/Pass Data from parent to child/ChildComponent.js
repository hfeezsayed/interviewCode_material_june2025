import React, { useState } from "react";

const App = (props) => {
  return <button onClick={props.handleClick}>{props.message}</button>;
};

export default App;
