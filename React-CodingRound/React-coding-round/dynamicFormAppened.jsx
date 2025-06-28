import React, { useState } from "react";

const App = () => {
  const [formValue, setFormValue] = useState([
    {
      name: "",
      email: "",
      phone: "",
    },
  ]);

  const [toggle, setToggle] = useState(false);

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const newFormValue = [...formValue];
    newFormValue[index][name] = value;
    setFormValue(newFormValue);
  };

  const addFormHandle = () => {
    setFormValue([...formValue, { name: "", email: "", phone: "" }]);
    setToggle(true);
  };

  const handleRemove = (id) => {
    setFormValue((oldData) => oldData.filter((val, index) => index !== id));
  };

  const submitHandle = () => {
    console.log(formValue);
  };

  return (
    <div className="container text-center mt-5">
      <h2>Create User</h2>
      <div className="row mt-4">
        {formValue.map((field, index) => (
          <div className="col-md-4 mx-auto" key={index}>
            <div className="mb-3 mt-3">
              <input
                className="form-control"
                name="name"
                value={field.name}
                placeholder="Enter a name..."
                onChange={(e) => handleChange(e, index)}
              />
            </div>
            <div className="mb-3">
              <input
                className="form-control"
                name="email"
                value={field.email}
                placeholder="Enter a email..."
                onChange={(e) => handleChange(e, index)}
              />
            </div>
            <div className="mb-3">
              <input
                className="form-control"
                name="phone"
                value={field.phone}
                placeholder="Enter a phone..."
                onChange={(e) => handleChange(e, index)}
              />
            </div>

            <button
              className="btn btn-success float-end"
              onClick={addFormHandle}
            >
              Add
            </button>
            {toggle && (
              <button
                className="btn btn-danger float-end mx-2"
                onClick={() => handleRemove(index)}
              >
                Remove
              </button>
            )}
          </div>
        ))}
      </div>
      <div className="row">
        <div className="col-md-4 mx-auto">
          <button className="btn btn-primary" onClick={submitHandle}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
