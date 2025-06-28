import React, {
  useEffect,
  useState,
  useRef,
  createContext,
  useCallback,
  useContext,
} from "react";

const App = () => {
  const [items, setItems] = useState([]);

  // useEffect hook to fetch the items from an API
  useEffect(() => {
    fetch("https://my-api.com/items")
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, []);

  // helper function to add a new item
  const addItem = (name) => {
    const newItem = { name };
    setItems([...items, newItem]);
  };

  // helper function to update an item
  const updateItem = (index, name) => {
    const updatedItems = [...items];
    updatedItems[index] = { name };
    setItems(updatedItems);
  };

  // helper function to delete an item
  const deleteItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>
          {item.name}
          <button onClick={() => updateItem(index, "updated name")}>
            Update
          </button>
          <button onClick={() => deleteItem(index)}>Delete</button>
        </li>
      ))}
      <button onClick={() => addItem("new item")}>Add item</button>
    </ul>
  );
};

export default App;
