import React, { useState } from "react";

const isLoggedIn = true;
const HOC = ({ AnotherComponent }) => {
  if (isLoggedIn) return <AnotherComponent />;
  return <p>Please Login</p>;
};

const Sample = () => <p>Any other sample</p>;

function App() {
  return (
    <div className="container m-4 text-center">
      <h1>React</h1>
      <HOC AnotherComponent={Sample} />
    </div>
  );
}

export default App;
