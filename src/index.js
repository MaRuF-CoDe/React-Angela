import React from "react";
import ReactDOM from "react-dom";

const fname = "Angela";
const lname = "Ban";
const num = 7;

ReactDOM.render(
  <div>
    <h1>Hello {`${fname} ${lname}`}!</h1>
    <p>Your lucky number is {3 + 8}</p>
  </div>,
  document.getElementById("root")
);
