import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/carts")
      .then((res) => res.json())
      .then((data) => {
        setUserList(data.carts);
      })
      .catch((err) => console.log(err));
  });

  return (
    <div className="container mt-4">
      <div className="">
        {userList.map((product, index) => {
          return (
            <table className="table table-bordered" key={index}>
              {product.products.map((getSubDetails) => {
                return (
                  <tr>
                    <td>{getSubDetails.title}</td>
                    <td>{getSubDetails.price}</td>
                    <td>{getSubDetails.quantity}</td>
                    <td>{getSubDetails.total}</td>
                    <td>{getSubDetails.discountPercentage}</td>
                    <td>{getSubDetails.discountedPrice}</td>
                    <td>
                      <img src={getSubDetails.thumbnail} className="w-25" />
                    </td>
                  </tr>
                );
              })}
            </table>
          );
        })}
      </div>
    </div>
  );
}

export default App;
