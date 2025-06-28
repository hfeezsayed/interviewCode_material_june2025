import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [userList, setUserList] = useState([
    { id: 1, name: "Hafeez", age: 28 },
    { id: 2, name: "Manzar", age: 27 },
    { id: 3, name: "Salman", age: 23 },
    { id: 4, name: "Mujahid", age: 34 },
    { id: 5, name: "Govinda", age: 31 },
    { id: 6, name: "Sharik", age: 22 },
  ]);

  const [order, setOrder] = useState("ASC");

  // useEffect(() => {
  //   setUserList(userList)
  // }, []);

  const sortHandler = (col) => {
    if (order === "ASC") {
      const sorted = [...userList].sort((a, b) =>
        a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
      );
      setUserList(sorted);
      setOrder("DSC");
    }
    if (order === "DSC") {
      const sorted = [...userList].sort((a, b) =>
        a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
      );
      setUserList(sorted);
      setOrder("ASC");
    }
  };

  return (
    <div className="App">
      <h1>Testing</h1>
      <button onClick={() => sortHandler("name")}>Sort by name</button>
      {userList.map((user, index) => {
        return (
          <div key={index}>
            <p>
              <span>{user.name}</span> &nbsp; <span>{user.age}</span>
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
