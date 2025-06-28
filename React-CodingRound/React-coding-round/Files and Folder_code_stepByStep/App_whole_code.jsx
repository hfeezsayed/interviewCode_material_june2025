import { useState } from "react";
import "./App.css";
import json from "./data.json";

//Create json data for files and folder structure
//expand file and folders
//add/remove files and folder

//render list of objects
function List({ list, addNewFolder, deleteFolder }) {
  const [expanded, setExpanded] = useState({});
  return (
    <div className="left-pannel">
      {list.map((node) => {
        return (
          <div key={node.id}>
            {node.isFolder && (
              <span
                onClick={() =>
                  setExpanded((prev) => ({
                    ...prev,
                    [node.name]: !prev[node.name],
                  }))
                }
              >
                {expanded?.[node.name] ? "-" : "+"}
              </span>
            )}
            <span>{node.name}</span>
            {/* add folder functionality start*/}
            {node?.isFolder && (
              <span onClick={() => addNewFolder(node.id)}>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfMt43f5llkF5OgPwtIozkZk38jQu2r-3XCg&s"
                  alt="icon"
                  className="addIcon"
                />
              </span>
            )}
            {/* add folder functionality end*/}

            {/* delete folder functionality start*/}
            <span onClick={() => deleteFolder(node.id)}>
              <img
                src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png"
                alt="icon"
                className="deleteIcon"
              />
            </span>
            {/* delete folder functionality end*/}
            {expanded?.[node.name] && node?.children && (
              <List
                list={node.children}
                addNewFolder={addNewFolder}
                deleteFolder={deleteFolder}
              /> //recursion concept
            )}
          </div>
        );
      })}
    </div>
  );
}
function App() {
  const [data, setData] = useState(json);

  //add folder functionality start
  const addNewFolder = (parentId) => {
    const name = prompt("Enter a folder name");
    const updateTree = (list) => {
      return list.map((node) => {
        if (node.id === parentId) {
          return {
            ...node,
            children: [
              ...node.children,
              {
                id: Date.now().toString(),
                name: name,
                isFolder: true,
                children: [],
              },
            ],
          };
        }
        if (node.children) {
          return { ...node, children: updateTree(node.children) };
        }
        return node;
      });
    };
    setData((prev) => updateTree(prev));
  };
  //add folder functionality end

  //delete folder functionality start
  const deleteFolder = (itemId) => {
    const updateTree = (list) => {
      return list
        .filter((node) => node.id !== itemId)
        .map((node) => {
          if (node.children) {
            return { ...node, children: updateTree(node.children) };
          }
          return node;
        });
    };
    setData((prev) => updateTree(prev));
  };
  //delete folder functionality start

  return (
    <div className="">
      <h1 style={{ textAlign: "center" }}>Files and folder structure</h1>
      <List
        list={data}
        addNewFolder={addNewFolder}
        deleteFolder={deleteFolder}
      />
    </div>
  );
}

export default App;
