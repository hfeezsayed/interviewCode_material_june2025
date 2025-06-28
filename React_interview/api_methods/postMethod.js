import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [person, setPerson] = useState({
    fname: "",
    email: "",
    phone: "",
  });

  const onChangeHandle = (e) => {
    setPerson({
      ...person,
      [e.target.name]: e.target.value,
    });
  };

  //1. POST method using fetch
  // const onSubmitHandle = (e) => {
  //   e.preventDefault();
  //   fetch("http://localhost:8000/posts", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(person),
  //   })
  //     .then((res) => res.json())
  //     .then((res) => {
  //       setPerson("res", res);
  //     });
  // };

  //1. POST method using axios
  const onSubmitHandle = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/posts", person)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err.message);
      });
    setPerson({
      fname: "",
      email: "",
      phone: "",
    });
  };

  return (
    <div className="App">
      <div>
        <h1>POST Method API Call Using </h1>
        <input
          name="fname"
          value={person.fname}
          onChange={onChangeHandle}
          placeholder="name"
        />
        <br />
        <input
          name="email"
          value={person.email}
          onChange={onChangeHandle}
          placeholder="email"
        />
        <br />
        <input
          name="phone"
          value={person.phone}
          onChange={onChangeHandle}
          placeholder="phone"
        />
        <br />
        <button type="submit" onClick={onSubmitHandle}>
          Add
        </button>
      </div>
    </div>
  );
}

export default App;
