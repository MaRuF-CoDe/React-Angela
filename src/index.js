import React from "react";
import ReactDom from "react-dom";

const img = "https://picsum.photos/200";

ReactDom.render(
  <div>
    <h1 className="heading" contentEditable="true" spellCheck="true">
      My Favourite Foods
    </h1>
    <ul>
      <li>Bacon</li>
      <li>Beef</li>
      <li>WaterMelon</li>
    </ul>
    <div>
      <img alt="random" src={img} />
      <img
        className="for-image"
        alt="blue"
        src="https://thumbs.dreamstime.com/b/water-splash-12429612.jpg"
      />
      <img
        className="for-image"
        alt="multi"
        src="https://thumbs.dreamstime.com/b/colorful-powder-explosion-white-background-abstract-pastel-color-dust-particles-splash-152468326.jpg"
      />
      <img
        className="for-image"
        alt="light-blue"
        src="https://t3.ftcdn.net/jpg/01/74/81/26/360_F_174812600_UjdOR4wCeQeXGG43RwlwfcPbKLD503pL.jpg"
      />
    </div>
  </div>,
  document.getElementById("root")
);
