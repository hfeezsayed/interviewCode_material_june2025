//import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";
//import bg from "../src/img/bg.png";

const App = () => {
  const [addUser, setAddUser] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [userList, setUserList] = useState([]);

  const onChangeHandle = (e) => {
    setAddUser({
      ...addUser,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    getUserList();
  }, []);

  const getUserList = () => {
    fetch("http://localhost:8000/posts")
      .then((res) => res.json())
      .then((data) => setUserList(data))
      .catch((err) => console.log(err));
  };

  const onSubmitHandle = (e) => {
    e.preventDefault();
    fetch("http://localhost:8000/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(addUser),
    })
      .then((res) => res.json())
      .then((res) => {
        setAddUser(res);
        setAddUser({
          name: "",
          email: "",
          phone: "",
        });
        getUserList();
      })
      .catch((err) => console.log(err.message));
  };

  const onDeleteHandle = (id) => {
    fetch(`http://localhost:8000/posts/${id}`, {
      method: "DELETE",
    }).then(() => {
      getUserList();
    });
  };

  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-3">
          <h2>Create User</h2>
          <div className="mt-4">
            <form onSubmit={onSubmitHandle}>
              <div className="mt-2">
                <label className="form-label">Name</label>
                <input
                  name="name"
                  value={addUser.name}
                  onChange={onChangeHandle}
                  className="form-control"
                />
              </div>
              <div className="mt-2">
                <label className="form-label">Email</label>
                <input
                  name="email"
                  value={addUser.email}
                  onChange={onChangeHandle}
                  className="form-control"
                />
              </div>
              <div className="mt-2">
                <label className="form-label">Phone</label>
                <input
                  name="phone"
                  value={addUser.phone}
                  onChange={onChangeHandle}
                  className="form-control"
                />
              </div>
              <div className="mt-2">
                <button type="submit" className="btn btn-primary">
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="col-md-9">
          <h2>User Table</h2>
          <table className="table table-bordered mt-4">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {userList.map((user) => {
                return (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => onDeleteHandle(user.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default App;
