import { useState } from "react";

function ControlComponent() {
  //In a controlled component, form data is handled by a React component.
  //controlled component
  const [userInfo, setUserInfo] = useState("");

  const handleChange = (e) => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="container my-3">
      <h1 className="mb-3">Learn Controlled component</h1>
      <form className="w-50">
        <div className="mb-2">
          <label>First Name</label>
          <input
            type="text"
            name="firstname"
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="mb-2">
          <label>Last Name</label>
          <input
            type="text"
            name="lastname"
            onChange={handleChange}
            className="form-control"
          />
        </div>
      </form>
    </div>
  );
}

export default ControlComponent;
