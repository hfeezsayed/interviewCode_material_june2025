import React from "react";
import ReactDOM from "react-dom";

useEffect(() => {
  //componentDidMount
}, []);

useEffect(() => {
  //componentDidUpdate
}, [user]);

useEffect(() => {
  //componentWillUnMount
  return () => console.log("UNMOUNT", props);
}, []);
