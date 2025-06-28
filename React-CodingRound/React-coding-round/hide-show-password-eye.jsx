import React, {
  useEffect,
  useState,
  useRef,
  createContext,
  useCallback,
  useContext,
} from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const App = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <div className="container mt-4">
      <div className="main-div">
        <input type={toggle ? "password" : "text"} />
        <div className="child-div" onClick={() => setToggle(!toggle)}>
          {toggle ? <FaEyeSlash /> : <FaEye />}
        </div>
      </div>
    </div>
  );
};

export default App;
