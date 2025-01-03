import React from "react";

// Header Element using React.createElement :
export const headerElement = React.createElement(
  "div",
  { className: "title" },
  [
    React.createElement("h1", {}, "Header 1"),
    React.createElement("h2", {}, "Header 2"),
    React.createElement("h3", {}, "Header 3"),
  ]
);

// Header Element using JSX :
export const headerJSX = (
  <div className="title">
    <h1>Header 1</h1>
    <h2>Header 2</h2>
    <h3>Header 3</h3>
  </div>
);

// Title Component for Component Composistion :

const Title = () => <h1>Namaste React !</h1>;

// Header Functional Component using JSX :
export const Header = () => {
  return (
    <div className="title">
      <Title />
      <h1>Header 1</h1>
      <h2>Header 2</h2>
      <h3>Header 3</h3>
    </div>
  );
};
