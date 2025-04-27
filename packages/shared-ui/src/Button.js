// A simple Button component
const React = require("react");

function Button({ text, onClick, variant = "primary" }) {
  return React.createElement(
    "button",
    {
      onClick: onClick,
      className: `btn btn-${variant}`,
    },
    text
  );
}

module.exports = Button;
