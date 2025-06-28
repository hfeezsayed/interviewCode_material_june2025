import axios from "axios";
import React, { useState, useEffect } from "react";

const App = () => {
  const [getApiData, setGetApiData] = useState([]);
  const [addUser, setAddUser] = useState({
    id: "",
    name: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = () => {
    axios
      .get("http://localhost:8000/posts")
      .then((res) => {
        setGetApiData(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const onChangeHandle = (e) => {
    setAddUser({
      ...addUser,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitHandle = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/posts", addUser)
      .then((res) => {
        setAddUser(res.data);
        getUserData();
        setAddUser({
          id: "",
          name: "",
          email: "",
          phone: "",
        });
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <>
      <div className="container">
        <div className="row mt-3">
          <div className="col-md-3">
            <h2 className="mb-3">Create User</h2>
            <form onSubmit={onSubmitHandle}>
              <div className="mb-2">
                <label className="form-label">Name</label>
                <input
                  name="name"
                  value={addUser.name}
                  onChange={onChangeHandle}
                  className="form-control"
                />
              </div>
              <div className="mb-2">
                <label className="form-label">Email</label>
                <input
                  name="email"
                  value={addUser.email}
                  onChange={onChangeHandle}
                  className="form-control"
                />
              </div>
              <div className="mb-2">
                <label className="form-label">Phone</label>
                <input
                  name="phone"
                  value={addUser.phone}
                  onChange={onChangeHandle}
                  className="form-control"
                />
              </div>
              <div className="text-center">
                <button type="submit" className="btn btn-primary">
                  Add User
                </button>
              </div>
            </form>
          </div>
          <div className="col-md-9">
            <h2 className="mb-3 text-center">User Data Table</h2>
            <table className="table table-bordered">
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
                {getApiData.map((user) => {
                  return (
                    <tr key={user.id}>
                      <td>{user.id}</td>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user.phone}</td>
                      <td>
                        <button className="btn btn-danger">Delete</button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      ;
    </>
  );
};

export default App;
