import React from "react";
import ReactDom from "react-dom";

const today = new Date();
const time = today.getHours();
let day;

const customColor = {
  color: ""
};

if (time < 12) {
  day = "Good Morning";
  customColor.color = "red";
} else if (time < 18) {
  day = "Good Afternoon";
  customColor.color = "green";
} else {
  day = "Good Night";
  customColor.color = "blue";
}

ReactDom.render(
  <div>
    <h1 className="heading" style={customColor}>
      {day}
    </h1>
  </div>,
  document.getElementById("root")
);
