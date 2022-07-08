import React from "react";

function Greeting() {
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
  return (
    <h1 className="heading" style={customColor}>
      {day}
    </h1>
  );
}

export default Greeting;
