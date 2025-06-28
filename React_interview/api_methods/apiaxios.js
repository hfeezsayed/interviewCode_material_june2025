import axios from "axios";
import React, { useEffect, useState } from "react";

const App = () => {
  const [usrName, setUsrName] = useState({
    id: "",
    fname: "",
  });
  const [addUser, setAddUser] = useState([]);

  const onChangeHandle = (e) => {
    setUsrName({
      ...usrName,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    getUser();
  }, []);

  const getUser = () => {
    axios
      .get("http://localhost:8000/posts")
      .then((res) => {
        setAddUser(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const onSubmitHandle = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/posts", usrName)
      .then((res) => {
        setUsrName(res.data);
        getUser();
        setUsrName({
          fname: "",
        });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const onDeleteHandle = (id) => {
    axios.delete(`http://localhost:8000/posts/${id}`).then(() => getUser());
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-3 mt-4">
            <div class="input-group mb-3">
              <input
                name="fname"
                value={usrName.fname}
                onChange={onChangeHandle}
                type="text"
                className="form-control"
              />
              <button
                onClick={onSubmitHandle}
                className="btn btn-outline-secondary"
                type="button"
              >
                Add
              </button>
            </div>
            <div className="mt-">
              <ul class="list-group">
                {addUser.map((user) => {
                  return (
                    <li class="list-group-item" key={user.id}>
                      <span>{user.id}.</span>
                      <span className="px-4">{user.fname}</span>
                      <span
                        className="float-end"
                        style={{ cursor: "pointer" }}
                        onClick={() => onDeleteHandle(user.id)}
                      >
                        X
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="col-md-9 mt-4 text-center"></div>
        </div>
      </div>
    </>
  );
};

export default App;
