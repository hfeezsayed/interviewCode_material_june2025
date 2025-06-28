import axios from "axios";
import React, { useState, useEffect } from "react";

const App = () => {
  const [addUser, setAddUser] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [getUser, setGetUser] = useState([]);

  const changeHandler = (e) => {
    setAddUser({
      ...addUser,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/posts", addUser)
      .then((res) => {
        setAddUser(res.data);
        getApiData();
        setAddUser({
          name: "",
          email: "",
          phone: "",
        });
      })
      .catch((err) => console.log(err.message));
  };

  useEffect(() => {
    getApiData();
  }, []);

  const getApiData = () => {
    axios
      .get("http://localhost:8000/posts")
      .then((res) => {
        setGetUser(res.data);
      })
      .catch((err) => console.log(err));
  };

  const deleteHandle = (id) => {
    axios.delete(`http://localhost:8000/posts/${id}`).then(() => {
      getApiData();
    });
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-offset-4 col-md-4 mx-auto mt-3">
            <div className="card">
              <div className="card-title text-center">
                <h3 className="pt-3 pb-2">Create User</h3>
              </div>
              <div className="card-body">
                <form>
                  <div className="mb-2">
                    <input
                      name="name"
                      value={addUser.name}
                      onChange={changeHandler}
                      placeholder="name..."
                      className="form-control"
                    />
                  </div>
                  <div className="mb-2">
                    <input
                      name="email"
                      value={addUser.email}
                      onChange={changeHandler}
                      placeholder="email..."
                      className="form-control"
                    />
                  </div>
                  <div className="mb-2">
                    <input
                      name="phone"
                      value={addUser.phone}
                      onChange={changeHandler}
                      placeholder="phone..."
                      className="form-control"
                    />
                  </div>
                </form>
              </div>
              <div className="card-footer text-center">
                <button onClick={handleSubmit} className="btn btn-dark">
                  Submit
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-12 mt-4">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <td>#</td>
                  <td>Name</td>
                  <td>Email</td>
                  <td>Phone</td>
                  <td>Action</td>
                </tr>
              </thead>
              <tbody>
                {getUser.map((user) => {
                  return (
                    <tr>
                      <td>{user.id}</td>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user.phone}</td>
                      <td>
                        <button
                          onClick={() => deleteHandle(user.id)}
                          className="btn btn-danger"
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
    </>
  );
};

export default App;
