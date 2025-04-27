# Example UI Components

This is a simple example UI component library that demonstrates how to create shared packages within the monorepo.

## Features

- Provides basic UI components that can be used across applications in the monorepo
- Demonstrates how to structure a shared package
- Shows how to set up peer dependencies

## Usage

```jsx
import { Button } from "@template/example-ui";

function MyComponent() {
  return (
    <Button
      text="Click me"
      onClick={() => console.log("Button clicked")}
      variant="primary"
    />
  );
}
```

## Structure

```
example-ui/
├── src/            # Source code
│   ├── Button.js   # Button component
│   └── index.js    # Package exports
├── package.json    # Package configuration
└── README.md       # Documentation
```

## Note

This is just a demonstration package and contains minimal functionality. It serves as a template for creating real shared packages in the monorepo.
