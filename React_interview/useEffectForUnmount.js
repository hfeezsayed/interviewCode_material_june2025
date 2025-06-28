import React from "react";
import ReactDOM from "react-dom";

useEffect(() => {
  return () => console.log("UNMOUNT", props);
}, []);
