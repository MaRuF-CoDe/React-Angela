import React from "react";
import Login from "./Login";

const isLoggedIn = true;
const currentime = new Date().getHours();
console.log(currentime);

function App() {
  return (
    <div className="container">
      {
        //Ternary_Operator
        // isLoggedIn ? <h1>Hello</h1> : <Login />
        //And_Operator
        currentime > 12 && <h1>Why are you still Working</h1>
      }
    </div>
  );
}

export default App;
