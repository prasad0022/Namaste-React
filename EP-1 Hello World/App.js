const heading = React.createElement("h1", { id: "heading", style: { color: "red" } }, "Hello World from React !");
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);