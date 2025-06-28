import React, { useState } from "react";

const App = () => {
  const [person, setPerson] = useState([
    { id: 1, name: "John", age: 19 },
    { id: 2, name: "Ziya", age: 21 },
    { id: 3, name: "Finton", age: 24 },
    { id: 4, name: "Rodrigues", age: 20 },
    { id: 5, name: "Sijo", age: 38 },
  ]);

  const [order, setOrder] = useState("ASC");

  const sortHandler = (col) => {
    if (order === "ASC") {
      const sortedData = person.sort((a, b) =>
        a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
      );
      setPerson(sortedData);
      setOrder("DSC");
    }
    if (order === "DSC") {
      const sortedData = person.sort((a, b) =>
        a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
      );
      setPerson(sortedData);
      setOrder("ASC");
    }
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-offset-4 col-md-4 mt-3 text-center">
            <button
              className="btn btn-warning"
              onClick={() => sortHandler("name")}
            >
              Sort Data
            </button>
            {person.map((user) => {
              return (
                <div key={user.id}>
                  <span>{user.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
