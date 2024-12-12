
const parent = React.createElement("div", { id: "parent" }, [
    React.createElement("h1", {}, "Namaste React"),
    React.createElement("h2", {}, "Igniting our App !")
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);