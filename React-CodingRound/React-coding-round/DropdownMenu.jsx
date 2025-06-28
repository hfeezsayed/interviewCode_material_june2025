import React, { useCallback, useMemo, useState } from "react";

const Dropdown = ({ items }) => {
  const [menu, setMenu] = useState(false);

  const openMenu = () => {
    setMenu(!menu);
  };

  return (
    <div>
      <button onClick={openMenu}>
        Menu
        {menu ? <span>&#11205;</span> : <span>&#11206;</span>}
      </button>
      {menu && (
        <ul style={{ listStyleType: "none", width: "150px", margin: "auto" }}>
          {items.map((item, index) => (
            <li
              key={index}
              style={{ padding: "4px", borderBottom: "1px solid #ccc" }}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
function App() {
  const items = ["Menu1", "Menu2", "Menu3"];
  return (
    <div className="container m-4 text-center">
      <h1>Dropdown</h1>
      <Dropdown items={items} />
    </div>
  );
}

export default App;
