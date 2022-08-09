import React, { useState } from "react";

function InputArea(props) {
  const [item, setItem] = useState("");

  function handleItem(event) {
    const items = event.target.value;
    setItem(items);
  }
  return (
    <div className="form">
      <input onChange={handleItem} type="text" value={item} />
      <button
        onClick={() => {
          props.onAdd(item);
          setItem("");
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
