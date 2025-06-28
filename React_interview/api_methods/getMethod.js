import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [list, setList] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  //1. Get method call using async awaits
  // const getData = async () => {
  //   const response = await fetch("https://dummyjson.com/products");
  //   const data = await response.json();
  //   setList(data.products);
  // };

  //2. Get method call using only fetch
  // const getData = () => {
  //   fetch("https://dummyjson.com/products")
  //     .then((res) => res.json())
  //     .then((data) => setList(data.products))
  //     .catch((err) => console.log(err.message));
  // };

  //3. Get method call using axios
  const getData = () => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => {
        //console.log(res.data.products);
        setList(res.data.products);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className="App">
      <h1 style={{ textAlign: "center" }}>GET Method API Call Using </h1>
      <table width="100%" border="1">
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Description</th>
            <th>Price</th>
            <th>Brand</th>
          </tr>
        </thead>
        <tbody>
          {list.map((product, index) => {
            return (
              <tr key={index}>
                <td>{product.id}</td>
                <td>{product.title}</td>
                <td>{product.description}</td>
                <td>{product.price}</td>
                <td>{product.brand}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
