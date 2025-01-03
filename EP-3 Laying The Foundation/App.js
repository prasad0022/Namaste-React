import React from "react";
import ReactDOM from "react-dom/client";
import { headerElement, headerJSX, Header } from "./Assignments/Assignmnet_1.jsx";
import { Navbar } from "./Assignments/Assignment_2.jsx";

// const heading = React.createElement("h1", { id: "heading" }, "Hello World !");

const jsxHeading = <h1 id="heading">Hello World using JSX !</h1>

// JSX => React.createElement => Object => HTML Element

// React Functional Components :

const Title = () => <h1>Namaste React</h1>;

const HeadingComponent = () => {
    return <>
        <Title />
        <h2>React Functional Component</h2>
    </>
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Navbar />);