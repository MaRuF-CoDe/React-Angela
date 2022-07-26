import React, { useState } from "react";

function App() {
  const [name, changeName] = useState(" ");
  const [n, c] = useState("");

  function handleChange(event) {
    changeName(event.target.value);
  }
  function submitt(event) {
    c(name);
    event.preventDefault();
  }

  return (
    <div className="container">
      <h1>Hello {n}</h1>
      <form onSubmit={submitt}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="What's your name?"
          value={name}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
