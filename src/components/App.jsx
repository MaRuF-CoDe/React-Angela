import React, { useState } from "react";
import TodoList from "./TodoList";
import InputArea from "./InputArea";
function App() {
  const [itemss, addItem] = useState([]);

  function addedItem(item) {
    addItem((prevItems) => {
      return [...prevItems, item];
    });
  }

  function changeItem(id) {
    addItem((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea onAdd={addedItem} />
      <div>
        <ul>
          {itemss.map((item, index) => (
            <TodoList
              text={item}
              onChange={changeItem}
              key={index}
              id={index}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
