import React, { useEffect, useState } from "react";

const App = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const recordsPerPage = 5;

  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = products.slice(firstIndex, lastIndex);
  const nPage = Math.ceil(products.length / recordsPerPage);
  const numbers = [...Array(nPage + 1).keys()].slice(1);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const data = await fetch("https://dummyjson.com/products");
    const response = await data.json();
    return setProducts(response.products);
  };

  const prePage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const changeCurrentPage = (id) => {
    setCurrentPage(id);
  };

  const nextPage = () => {
    if (currentPage !== nPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="container my-5">
      <h2>React</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {records.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>
                <img
                  src={item.images}
                  alt="product item"
                  style={{ width: "100px" }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="btn" onClick={prePage}>
        Prev
      </button>
      {numbers.map((n, i) => (
        <button
          className={`btn ${
            currentPage === n ? "btn btn-success" : "btn-light"
          }`}
          key={i}
          onClick={() => changeCurrentPage(n)}
        >
          {n}
        </button>
      ))}
      <button onClick={nextPage} className="btn">
        Next
      </button>
    </div>
  );
};

export default App;
