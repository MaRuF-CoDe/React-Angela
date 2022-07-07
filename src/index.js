import React from "react";
import ReactDom from "react-dom";

const name = "Maruf";
const today = new Date();
const year = today.getFullYear();

ReactDom.render(
  <div>
    <h1> Created By {name} </h1>
    <p> Copyright &copy; {year}</p>
  </div>,
  document.getElementById("root")
);
