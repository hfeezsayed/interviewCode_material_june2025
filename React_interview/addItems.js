import React, {useState} from 'react';
import './App.css';

const App = () => {
  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]);

  const addHandler = (e) => {
    e.preventDefault();
    setItems((oldItems) => {
      return [...oldItems, inputList]
    });
    setInputList("");
  }

  const deleteHandler = (id) => {
    setItems((oldItems) => {
      return oldItems.filter((element, index) => {
        return index !== id
      });
    });
  }

  return (
    <div className='App'>
       <div>
          <form onSubmit={addHandler}>
             <input 
                type="text" 
                value={inputList} 
                onChange={(e) => setInputList(e.target.value)} 
                placeholder="Enter text..."
              />
             <button>Add</button>
          </form>
       </div>
       <div>
         {
          items.map((item, index) => {
            return (
              <div>
                {item}
                <button onClick={() => deleteHandler(index)}>X</button>
              </div>
            )
          })
         }
       </div>
    </div>
  )
}
export default App