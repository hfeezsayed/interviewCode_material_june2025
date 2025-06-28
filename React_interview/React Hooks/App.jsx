import React, { createContext, useState } from "react";
//import UseMemo from "./Hooks/UseMemo";
//import UseReducer from "./Hooks/UseReducer";
//import UseLayoutEffectHook from "./Hooks/UseLayoutEffectHook";
//import "./App.css";
import Hooks from "./Hooks/Hooks";
import CustomHook from "./Hooks/CustomHook";
//import Parent from "./Hooks/UseCallBack/UseCallback";
//import UseRef from "./Hooks/UseRef";
// import { UseEffect } from "./Hooks/UseEffect";
//import ChildA from "./Hooks/useContext/ChildA";

//export const userContext = createContext();

function App() {
  //For Custom hook start
  const user = CustomHook("https://jsonplaceholder.typicode.com/users");
  //For Custom hook End

  return (
    <div className="container">
      <h1 className="p-4 text-center">Learning React Hooks</h1>
      {/* <Hooks /> */}
      {/* <UseEffect /> */}
      {/* <userContext.Provider value={"Salman"}> for useContext
        <ChildA />
      </userContext.Provider> */}
      {/* <UseRef /> */}
      {/* <UseReducer /> */}
      {/* <UseLayoutEffectHook /> */}
      {/* <UseMemo /> */}

      {/* Below code used for custom hook start*/}
      {user.map((userList) => {
        return <p key={userList.id}>{userList.name}</p>;
      })}
      {/* Below code used for custom hook End*/}
    </div>
  );
}

export default App;
