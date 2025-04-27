const React = require("react");
const App = require("./App");

// In a real app, this would render the app to the DOM
console.log("App would render here:", App);
console.log("This is just a placeholder to validate monorepo structure.");

// Simulate rendering
const root = {
  render: (element) => {
    console.log("Rendering:", element);
  },
};

// Create an App element using React.createElement
const appElement = React.createElement(App, null);
root.render(appElement);
