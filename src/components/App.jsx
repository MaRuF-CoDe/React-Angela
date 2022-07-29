import React, { useState } from "react";

function App() {
  const [item, setItem] = useState("");
  const [itemss, addItem] = useState([]);
  function handleItem(event) {
    const items = event.target.value;
    setItem(items);
  }
  function addedItem() {
    addItem((prevValue) => {
      return [...prevValue, item];
    });
    setItem("");
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleItem} type="text" value={item} />
        <button onClick={addedItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {itemss.map((item) => {
            return <li>{item}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
