import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    setProducts(data.products);
    //setProducts(data.products);
  };
  };

  return (
    <div className="App container">
      <div className="card">
        {products.map((item, index) => (
          <div className="item" key={index}>
            <img src={item.thumbnail} alt="thumbnail" />
            <p>title: {item.title}</p>
            <p>price: {item.price}</p>
            <p>description {item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
