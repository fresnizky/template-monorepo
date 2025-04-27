const React = require("react");
const { Button } = require("@project/shared-ui");

function App() {
  return React.createElement(
    "div",
    { className: "app" },
    React.createElement("h1", null, "Example Monorepo App"),
    React.createElement(Button, {
      text: "I'm from the shared package!",
      onClick: () => console.log("Button clicked!"),
      variant: "primary",
    })
  );
}

module.exports = App;
