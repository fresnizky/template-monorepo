# Example Web App

This is a simple example web application that demonstrates how to use shared packages within the monorepo.

## Features

- Imports components from the `@template/example-ui` package
- Demonstrates the basic structure of an application in the monorepo
- Shows how to use shared TypeScript and other configurations

## Development

This is a minimal example application that demonstrates how applications work in the monorepo. In a real project, this would include a complete build system, TypeScript support, styling, and more functionality.

To run this application in a real setup:

```bash
# From the root of the monorepo
pnpm dev --filter @template/example-web
```

## Structure

```
example-web/
├── src/            # Source code
├── package.json    # Package configuration
└── README.md       # Documentation
```

## Note

This is just a demonstration app and does not contain actual functionality. It serves as a template for creating real applications in the monorepo.
