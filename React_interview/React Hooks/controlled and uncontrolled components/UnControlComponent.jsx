import { useRef } from "react";

function UnControlComponent() {
  //In a Uncontrolled component, form data is handled by DOM itself.
  //useRef return one object. like below inputRef.

  const fNameRef = useRef();
  const lNameRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const fname = fNameRef.current.value;
    const lname = lNameRef.current.value;
    console.log(fname.toUpperCase());
    console.log(lname.toUpperCase());
  };

  return (
    <div className="container my-3">
      <h1 className="mb-3">Learn Uncontrolled component</h1>
      <form className="w-50" onSubmit={handleSubmit}>
        <div className="mb-2">
          <label>First Name</label>
          <input type="text" ref={fNameRef} className="form-control" />
        </div>
        <div className="mb-2">
          <label>Last Name</label>
          <input type="text" ref={lNameRef} className="form-control" />
        </div>
        <div className="mb-2">
          <button className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default UnControlComponent;
