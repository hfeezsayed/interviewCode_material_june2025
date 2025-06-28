import React, { useState } from "react";

function SearchBar({ items }) {
  const [query, setQuery] = useState("");
  const filteredSearch = items.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );
  return (
    <div>
      <h1 className="mb-4">Search Bar</h1>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="search..."
      />

      <ul className="list-group col-md-3 m-auto mt-4">
        {filteredSearch.map((item, index) => (
          <li key={index} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function App() {
  const items = ["Mango", "Nest", "Paw", "Chest"];
  return (
    <div className="container m-4 text-center">
      <SearchBar items={items} />
    </div>
  );
}

export default App;
