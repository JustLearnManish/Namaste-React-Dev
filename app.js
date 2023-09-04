const heading = React.createElement("div", { id: "heading" }, [
  React.createElement("div", { id: "divS1" }, [
    React.createElement("h1", { id: "s1h1" }, "I'm in S1 H1 Tag"),
    React.createElement("h2", { id: "s1h2" }, "I'm in S1 H2 tag")
  ]),
  React.createElement("div", { id: "divS2" }, [
    React.createElement("h1", { id: "s2h1" }, "I'm in S2 H1"),
    React.createElement("h2", { id: "s2h2" }, "I'm in S2 h2")
  ])
]);

console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
