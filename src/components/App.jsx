import React, { useState } from "react";

function App() {
  const now = new Date().toLocaleTimeString("en-US", { hour12: false });
  const [time, setCount] = useState(now);

  function uTime() {
    const newTime = new Date().toLocaleTimeString("en-US", { hour12: false });
    setCount(newTime);
  }
  setInterval(uTime, 1000);
  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={uTime}>Get Time</button>
    </div>
  );
}

export default App;
