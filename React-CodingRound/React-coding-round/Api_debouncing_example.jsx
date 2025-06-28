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

import debounce from "lodash.debounce";

function App() {
  const [search, setSearch] = useState("");

  const handleSearch = debounce(async (term) => {
    const response = await fetch(`https://dummyjson.com/users?q=${term}`);
    const data = await response.json();
    console.log(data);
  }, 500); // 500ms delay

  const handleInputChange = (e) => {
    setSearch(e.target.value);
    handleSearch(e.target.value);
  };

  return (
    <>
      <input
        type="text"
        value={search}
        onChange={handleInputChange}
        placeholder="Search"
      />
    </>
  );
}

export default App;
