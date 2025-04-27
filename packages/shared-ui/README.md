# Shared UI Components

This package contains shared UI components that can be used across applications in the monorepo.

## Usage

```jsx
const { Button } = require("@project/shared-ui");

function MyComponent() {
  return (
    <Button
      text="Click me!"
      onClick={() => console.log("Button clicked")}
      variant="primary"
    />
  );
}
```

## Available Components

- **Button**: A simple button component with customizable text and style variant.

## Development

This is a minimal example package that demonstrates how packages work in the monorepo. In a real project, this would include build steps, TypeScript support, styling, and more comprehensive component documentation.
