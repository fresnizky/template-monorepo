# TypeScript Configuration

Shared TypeScript configurations for applications and packages in the template monorepo.

## Available Configurations

- **Base**: Common TypeScript settings with strict type checking and modern ECMAScript features
- **React**: Configuration for React applications and libraries
- **React Native**: Configuration for React Native mobile applications
- **Node.js**: Configuration for Node.js applications and services

## Usage

### Base Configuration

```json
{
  "extends": "@template/typescript-config/base/tsconfig.json",
  "compilerOptions": {
    "outDir": "dist"
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}
```

### React Configuration

```json
{
  "extends": "@template/typescript-config/react/tsconfig.json",
  "compilerOptions": {
    "outDir": "dist"
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}
```

### React Native Configuration

```json
{
  "extends": "@template/typescript-config/react-native/tsconfig.json",
  "compilerOptions": {
    "outDir": "dist"
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}
```

### Node.js Configuration

```json
{
  "extends": "@template/typescript-config/node/tsconfig.json",
  "compilerOptions": {
    "outDir": "dist"
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}
```

## Benefits

- **Consistent Configuration**: Ensures all projects in the monorepo follow the same TypeScript standards
- **Type Safety**: Enforces strict type checking to catch errors at compile time
- **Modern JavaScript**: Configured for latest ECMAScript features
- **Environment-specific Settings**: Optimized for different runtime environments
- **Easy to Extend**: Base configurations can be easily extended for project-specific needs
