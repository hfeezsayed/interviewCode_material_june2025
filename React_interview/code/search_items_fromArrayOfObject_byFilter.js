import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [userList, setUserList] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getUserList();
  }, []);

  const getUserList = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    return setUserList(data);
  };

  return (
    <div className="container text-center">
      <h1>React Learning</h1>
      <div className="row">
        <div className="col-md-12">
          <div className="mb-3">
            <input
              type="text"
              className="search-form"
              placeholder="Search name..."
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Username</th>
                <th>Email</th>
                <th>Address</th>
                <th>website</th>
                <th>Company</th>
              </tr>
            </thead>
            <tbody>
              {userList
                .filter((item) => {
                  return search.toLowerCase() === ""
                    ? item
                    : item.name.toLowerCase().includes(search);
                })
                .map((user, index) => {
                  return (
                    <tr key={index}>
                      <td>{user.id}</td>
                      <td>{user.name}</td>
                      <td>{user.username}</td>
                      <td>{user.email}</td>
                      <td>{user.address.city}</td>
                      <td>{user.website}</td>
                      <td>{user.company.name}</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
export default App;
