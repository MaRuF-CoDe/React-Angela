import React from "react";

var date = new Date();
var c = date.getFullYear();

function Footer() {
  return (
    <footer>
      <p>copyright Ⓒ{c}</p>;
    </footer>
  );
}

export default Footer;
