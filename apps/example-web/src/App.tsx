import React from "react";
import { Button } from "@template/example-ui";

const App: React.FC = () => {
  return (
    <div className="app">
      <h1>Example Monorepo Web App</h1>
      <p>This demonstrates importing a component from a shared package</p>
      <Button
        text="I'm from the shared UI package!"
        onClick={() => alert("Button clicked!")}
        variant="primary"
      />
    </div>
  );
};

export default App;
