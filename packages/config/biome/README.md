# Biome Configuration

This package provides shared [Biome](https://biomejs.dev/) configurations for linting, formatting, and checking across projects in the monorepo.

## What is Biome?

Biome is a performant toolchain for web projects that aims to replace Babel, ESLint, webpack, Prettier, and Jest with a single, unified tool. This package provides standardized configurations for Biome to be used across different project types in the monorepo.

## Available Configurations

- **Base**: Core configuration with sensible defaults for all projects
- **React**: Configuration tailored for React applications with JSX support and React-specific rules
- **Node**: Configuration for Node.js applications and packages
- **React Native**: Configuration for React Native applications

## Installation

This package is intended to be used within the monorepo. To use it in a project:

```sh
# From your project directory
pnpm add @template/biome-config --workspace
```

## Usage

### Using in a project

Create a `biome.json` file in your project root and extend the appropriate configuration:

```json
{
  "$schema": "./node_modules/@biomejs/biome/configuration_schema.json",
  "extends": ["@template/biome-config/react"]
}
```

You can customize and override any settings as needed:

```json
{
  "$schema": "./node_modules/@biomejs/biome/configuration_schema.json",
  "extends": ["@template/biome-config/react"],
  "formatter": {
    "indentWidth": 4
  }
}
```

Note: When using the `extends` option, you only need to specify the `$schema` in your project's configuration file. The schema will be used for validating all extended configurations.

### Adding scripts to your package.json

Add these scripts to your project's package.json:

```json
{
  "scripts": {
    "lint": "biome check .",
    "format": "biome format --write .",
    "check": "biome check --apply ."
  }
}
```

## Configuration Details

### Base Configuration

The base configuration includes:

- Modern JavaScript/TypeScript linting rules
- Code formatting settings (2-space indentation, 100-char line width)
- Import organization
- Single quotes for strings
- ES5 trailing commas

### React Configuration

Extends the base configuration and adds:

- JSX support
- Accessibility rules
- React hooks rules
- React-specific performance warnings

### Node Configuration

Extends the base configuration and adds:

- Node.js global variables
- Relaxed console.log restrictions
- Node.js import protocol enforcement

### React Native Configuration

Extends the React configuration and adds:

- React Native global variables
- Disabled web-specific accessibility rules
- Mobile-specific file ignores (ios, android, .expo)

## Running Biome

```sh
# Check for lint errors
npx biome check .

# Format files
npx biome format --write .

# Check and automatically fix issues
npx biome check --apply .
```

## Using from Turborepo Pipeline

This configuration works with Turborepo pipelines. Add the following to your root `turbo.json`:

```json
{
  "pipeline": {
    "lint": {
      "outputs": []
    },
    "format": {
      "outputs": []
    }
  }
}
```

Then you can run linting across all packages with:

```sh
pnpm lint
```
