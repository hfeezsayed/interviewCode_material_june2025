import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useRef,
  useState,
} from "react";
import "./App.css";

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const nameRegex = /^[a-zA-Z ]{2,30}$/;

function App() {
  const [fields, setFields] = useState([{ name: "", email: "" }]);
  const [errors, setErrors] = useState({});

  const handleAddField = () => {
    setFields([...fields, { name: "", email: "" }]);
  };

  const handleRemoveField = (index) => {
    const newFields = [...fields];
    newFields.splice(index, 1);
    setFields(newFields);
  };

  const handleFieldChange = (index, e) => {
    const newFields = [...fields];
    newFields[index][e.target.name] = e.target.value;
    setFields(newFields);
    validateField(index, e.target.name, e.target.value);
  };

  const validateField = (index, name, value) => {
    const newErrors = { ...errors };
    if (name === "name") {
      if (!nameRegex.test(value)) {
        newErrors[`${index}-name`] = "Invalid name";
      } else {
        delete newErrors[`${index}-name`];
      }
    }
    if (name === "email") {
      if (!emailRegex.test(value)) {
        newErrors[`${index}-email`] = "Invalid email";
      } else {
        delete newErrors[`${index}-email`];
      }
    }
    setErrors(newErrors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    fields.forEach((field, index) => {
      if (!nameRegex.test(field.name)) {
        newErrors[`${index}-name`] = "Invalid name";
      }
      if (!emailRegex.test(field.email)) {
        newErrors[`${index}-email`] = "Invalid email";
      }
    });
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      // Submit the form
      console.log(fields);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {fields.map((field, index) => (
        <div key={index}>
          <input
            type="text"
            name="name"
            value={field.name}
            onChange={(e) => handleFieldChange(index, e)}
            placeholder="Name"
          />
          {errors[`${index}-name`] && (
            <div style={{ color: "red" }}>{errors[`${index}-name`]}</div>
          )}
          <input
            type="email"
            name="email"
            value={field.email}
            onChange={(e) => handleFieldChange(index, e)}
            placeholder="Email"
          />
          {errors[`${index}-email`] && (
            <div style={{ color: "red" }}>{errors[`${index}-email`]}</div>
          )}
          {fields.length > 1 && (
            <button type="button" onClick={() => handleRemoveField(index)}>
              Remove
            </button>
          )}
        </div>
      ))}
      <button type="button" onClick={handleAddField}>
        Add Field
      </button>
      <button type="submit">Submit</button>
    </form>
  );
}

export default App;
