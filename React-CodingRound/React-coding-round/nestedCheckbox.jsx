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

//1. create a checkbox with parent and children checkboxes.
//2. when we select children checkbox then should be select both of them children
const checkBoxData = [
  {
    id: 1,
    name: "Fruits",
    children: [
      {
        id: 2,
        name: "citrus",
        children: [
          {
            id: 3,
            name: "Orange",
          },
          {
            id: 4,
            name: "Apple",
          },
        ],
      },
      {
        id: 5,
        name: "Berries",
        children: [
          {
            id: 6,
            name: "Strawberry",
          },
          {
            id: 7,
            name: "Bluberry",
          },
        ],
      },
    ],
  },
  {
    id: 8,
    name: "Vegetables",
  },
  {
    id: 9,
    name: "Grains",
  },
];

const CheckBoxes = ({ data, checked, setChecked }) => {
  const handleChange = (isChecked, node) => {
    setChecked((prev) => {
      const newState = { ...prev, [node.id]: isChecked };
      //if children are present then add all of then to new state
      const updateChildren = (node) => {
        node.children?.forEach((child) => {
          newState[child.id] = isChecked;
          child.children && updateChildren(child); //if child has children then update their children
        });
      };
      updateChildren(node);

      //if all children are checked, mark the present as checked start
      const verifyCheked = (node) => {
        if (!node.children) return newState[node.id] || false;
        const allChildrenChecked = node.children.every((child) =>
          verifyCheked(child)
        );
        newState[node.id] = allChildrenChecked;
        return allChildrenChecked;
      };
      checkBoxData.forEach((node) => verifyCheked(node));
      //if all children are checked, mark the present as checked end
      return newState;
    });
  };

  return (
    <div>
      {data.map((node) => {
        return (
          <div key={node.id} className="parent">
            <input
              type="checkbox"
              checked={checked[node.id] || false}
              onChange={(e) => handleChange(e.target.checked, node)}
            />
            <label>{node.name}</label>
            {node.children && (
              <CheckBoxes
                data={node.children}
                checked={checked}
                setChecked={setChecked}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

function App() {
  const [checked, setChecked] = useState({});
  return (
    <div>
      <CheckBoxes
        data={checkBoxData}
        checked={checked}
        setChecked={setChecked}
      />
    </div>
  );
}

export default App;
