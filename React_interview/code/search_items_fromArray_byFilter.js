import React, { useState } from "react";
import "./App.css";

function App() {
  const animalList = [
    "Dog",
    "Cat",
    "Ant",
    "Butterfly",
    "Buffalo",
    "Elephant",
    "Fish",
    "Goat",
    "Horse",
    "Hippo",
    "Jackal",
  ];
  const [filterList, setFilterList] = useState(animalList);

  const filterBySearch = (e) => {
    const query = e.target.value;
    var updatedList = [...animalList];
    updatedList = updatedList.filter((item) => {
      return item.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    });
    setFilterList(updatedList);
  };
  return (
    <div className="container text-center">
      <h1>React Learning</h1>
      <input type="text" onChange={filterBySearch} />
      <div>
        {filterList.map((animal, index) => (
          <p key={index}>{animal}</p>
        ))}
      </div>
    </div>
  );
}
export default App;
