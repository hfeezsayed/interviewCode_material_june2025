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

function App() {
  const [search, setSearch] = useState("");
  const [userData, setUserData] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [cache, setCache] = useState({}); // {} is used for appending data

  const fetchData = async () => {
    //if we have a data in a cache then it will run below cache code
    if (cache[search]) {
      console.log("CACHING RETURNED", search);
      setCache(cache[search]); //it would be for better performance
      return;
    }
    //If we don't have the data in cache then run below api call
    console.log("API call", search); //problem statement
    const response = await fetch(
      "https://dummyjson.com/recipes/search?q=" + search
    );
    const data = await response.json();
    setUserData(data.recipes);
    setCache((prev) => ({ ...prev, [search]: data.recipes })); //for updating the cache data
  };

  //below code with problem statments
  // useEffect(() => {
  //   fetchData();
  // }, [search]);

  //below code without problem statments using debouncing
  useEffect(() => {
    //below the concept of debouncing - it will delay and after make api call
    const timer = setTimeout(() => fetchData(), 300); //when i will pause the typing the api call after 500 mili seconds.
    return () => clearInterval(timer); //this concept is component unmount for optimization
  }, [search]);

  return (
    <div className="main-block">
      <h1>Autocomplete Search Bar</h1>
      <div className="input-bar">
        <input
          className="input-form"
          placeholder="search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onFocus={() => setShowResult(true)}
          onBlur={() => setShowResult(false)}
        />
      </div>
      {showResult && (
        <div className="result-container">
          {userData.map((item) => (
            <span key={item.id} className="search-text">
              {item.name}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;

// .main-block {
//     width: 100%;
//     text-align: center;
//   }

//   .input-form {
//     width: 500px;
//     padding: 6px;
//   }

//   .result-container {
//     width: 500px;
//     max-height: 400px;
//     margin: auto;
//     padding: 5px;
//     border: 1px solid #676767;
//     overflow-y: scroll;
//   }

//   .search-text {
//     display: block;
//     padding: 6px;
//     text-align: left;
//     cursor: pointer;
//   }

//   .search-text:hover {
//     background-color: #95656514;
//   }
