import React from "react";
import ReactDom from "react-dom";
const fname = "Muhammad";
const lname = "Ibrahim";
const cost = "Rahimoon";
const num = 7;
ReactDom.render(
  <div>
    <h1>Hello {fname + " " + lname + " " + cost}!</h1>
    <p> Your lucky Number {num}</p>
  </div>,
  document.getElementById("root")
);
