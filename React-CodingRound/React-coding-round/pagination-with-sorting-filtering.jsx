import React, { useEffect, useState } from "react";
import { FaSort } from "react-icons/fa";

const App = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
      .catch((err) => console.log(err));
  }, []);

  const [currentIndex, setCurrentIndex] = useState(1);

  const recordsPerPage = 5;

  const lastIndex = currentIndex * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = products.slice(firstIndex, lastIndex);
  const nPage = Math.ceil(products.length / recordsPerPage);
  const numbers = [...Array(nPage + 1).keys()].slice(1);

  const goToPrev = () => {
    if (currentIndex !== 1) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const perPageHandle = (id) => {
    setCurrentIndex(id);
  };

  const goToNext = () => {
    if (currentIndex !== nPage) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const [order, setOrder] = useState("ASC");

  const sortHandler = (col) => {
    if (order === "ASC") {
      const updatedList = [...products].sort((a, b) =>
        a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
      );
      setOrder("DSC");
      setProducts(updatedList);
    }
    if (order === "DSC") {
      const updatedList = [...products].sort((a, b) =>
        a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
      );
      setOrder("ASC");
      setProducts(updatedList);
    }
  };

  return (
    <div className="container my-5">
      <input
        className="w-25 form-control mb-3"
        placeholder="search..."
        onChange={(e) => setSearch(e.target.value)}
      />
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>
              Title
              <span className="mx-3" onClick={() => sortHandler("title")}>
                <FaSort />
              </span>
            </th>
            <th>Brand</th>
            <th>Category</th>
            <th>Price</th>
            <th>Images</th>
          </tr>
        </thead>
        <tbody>
          {records
            .filter((item) =>
              search.toLowerCase() === ""
                ? item
                : item.title && item.brand.toLowerCase().includes(search)
            )
            .map((item, index) => {
              const { id, title, brand, category, price, images } = item;
              return (
                <tr key={index}>
                  <td>{id}</td>
                  <td>{title}</td>
                  <td>{brand}</td>
                  <td>{category}</td>
                  <td>{price}</td>
                  <td>
                    <img src={images} style={{ width: "50px" }} />
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
      <button className="btn btn-light" onClick={goToPrev}>
        Prev
      </button>
      {numbers.map((n, i) => (
        <button
          key={i}
          onClick={() => perPageHandle(n)}
          className={`btn ${currentIndex === n ? "btn-success" : "btn-light"}`}
        >
          {n}
        </button>
      ))}
      <button className="btn btn-light" onClick={goToNext}>
        Next
      </button>
    </div>
  );
};

export default App;
