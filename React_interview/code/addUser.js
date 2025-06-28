import React, { useState } from "react";

const App = () => {
  const [inputValue, setInputValue] = useState({
    name: "",
    email: "",
  });

  const [addUser, setAddUser] = useState([]);

  const onChangeHandle = (e) => {
    setInputValue({
      ...inputValue,
      [e.target.name]: e.target.value,
    });
  };

  const addHandler = (e) => {
    e.preventDefault();
    setAddUser((oldData) => {
      return [...oldData, inputValue];
    });
    setInputValue({
      name: "",
      email: "",
    });
  };

  const deleteHandle = (id) => {
    setAddUser((oldData) => {
      return oldData.filter((ele, index) => {
        return index !== id;
      });
    });
  };

  return (
    <>
      <div className="container">
        <div className="row mt-3">
          <div className="col-md-3">
            <h2 className="mb-3">Create User</h2>
            <form onSubmit={addHandler}>
              <div className="mb-2">
                <label className="form-label">Name</label>
                <input
                  name="name"
                  value={inputValue.name}
                  onChange={onChangeHandle}
                  className="form-control"
                  placeholder="name..."
                />
              </div>
              <div className="mb-2">
                <label className="form-label">Email</label>
                <input
                  name="email"
                  value={inputValue.email}
                  onChange={onChangeHandle}
                  className="form-control"
                  placeholder="email..."
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
                  <th>Name</th>
                  <th>Email</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {addUser.map((user, index) => {
                  return (
                    <tr key={index}>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>
                        <button
                          onClick={() => deleteHandle(index)}
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
      ;
    </>
  );
};

export default App;
