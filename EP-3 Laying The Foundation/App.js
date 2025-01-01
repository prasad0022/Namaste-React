import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement("h1", { id: "heading" }, "Hello World !");

const jsxHeading = <h1 id="heading">Hello World using JSX !</h1>

// JSX => React.createElement => Object => HTML Element

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading);