import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [person, setPerson] = useState({
    name: "",
    age: "",
  });
  const [addValue, setAddValue] = useState([]);

  const changeHandle = (e) => {
    let value = e.target.value;
    setPerson({
      ...person,
      [e.target.name]: value,
    });
  };

  const addHandle = (e) => {
    e.preventDefault();
    setAddValue((oldValue) => {
      return [...oldValue, person];
    });
    setPerson({
      name: "",
      age: "",
    });
  };

  const deleteHandle = (id) => {
    setAddValue((oldValue) => {
      return oldValue.filter((val, index) => index !== id);
    });
  };
  return (
    <div className="App">
      <form onSubmit={addHandle}>
        <input
          type="text"
          placeholder="Enter a name..."
          name="name"
          value={person.name}
          onChange={changeHandle}
        />
        <input
          type="number"
          placeholder="Enter age..."
          name="age"
          value={person.age}
          onChange={changeHandle}
        />
        <button>Add</button>
      </form>

      <div>
        {addValue.map((val, index) => {
          return (
            <div key={index}>
              <span>{val.name}</span>
              <span>{val.age}</span>
              <button onClick={() => deleteHandle(index)}>X</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
