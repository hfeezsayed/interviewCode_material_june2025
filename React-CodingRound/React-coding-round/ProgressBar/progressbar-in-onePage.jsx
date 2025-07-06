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

const ProgressBar = ({ value = 0 }) => {
  const [percent, setPercent] = useState(value);

  useEffect(() => {
    setPercent(Math.min(100, Math.max(value, 0)));
  }, [value]);

  return (
    <div className="progress-bar">
      <span style={{ color: percent > 49 ? "white" : "" }}>
        {percent.toFixed()}%
      </span>
      <div className="fill-color" style={{ width: `${percent}%` }}></div>
    </div>
  );
};

function App() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setValue((prev) => prev + 1);
    }, 60);
  }, []);

  return (
    <>
      <h1 style={{ color: "#000", textAlign: "center" }}>Progress bar</h1>
      <ProgressBar value={value} />
    </>
  );
}

export default App;

//CSS
// .progress-bar {
//   position: relative;
//   width: 500px;
//   height: 15px;
//   background-color: #ccc;
//   margin: auto;
//   border-radius: 10px;
//   overflow: hidden;
// }

// .progress-bar span {
//   width: 100%;
//   position: absolute;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// }

// .progress-bar .fill-color {
//   height: 100%;
//   background-color: green;
// }
