import React from "react";
import ReactDom from "react-dom";

const customStyle = {
  color: "yellow",
  fontSize: "30px",
  border: "1px solid black"
};

customStyle.color = "green";

ReactDom.render(
  <div>
    <h1 style={{ color: "blue" }}> Hello World </h1>
    <h1 style={customStyle}>Everyone</h1>
  </div>,
  document.getElementById("root")
);
