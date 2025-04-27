import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Create root and render the App
const rootElement = document.getElementById("root");

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
