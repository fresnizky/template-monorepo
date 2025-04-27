# Template Monorepo

A modern, scalable monorepo for full-stack applications using Turborepo and PNPM. This template provides a foundation for building web, mobile, and backend applications with shared configurations and packages.

## Setup

### Prerequisites

- Node.js (v18+)
- PNPM (v8+)

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/template-monorepo.git
cd template-monorepo

# Install dependencies
pnpm install
```

## Monorepo Structure

```
template-monorepo/
├── apps/              # Application projects
│   ├── web/           # React frontend
│   ├── admin/         # React admin panel
│   ├── mobile/        # Expo mobile app
│   └── api/           # Laravel backend
├── packages/          # Shared packages/libraries
│   ├── typescript-config/    # Shared TypeScript configs
│   ├── biome-config/         # Shared Biome configs
│   ├── tailwind-config/      # Shared Tailwind configs
│   ├── nativewind-config/    # Shared NativeWind configs
│   ├── ui-web/               # Shared web UI components
│   ├── ui-mobile/            # Shared mobile UI components
│   ├── hooks/                # Shared React hooks
│   ├── state/                # Shared state management
│   └── themes/               # Shared design tokens
└── scripts/           # Project scripts and utilities
```

## Development

### Available Commands

- `pnpm build`: Build all applications and packages
- `pnpm dev`: Start development servers for all applications
- `pnpm lint`: Run linting across all projects
- `pnpm test`: Run tests across all projects

### Adding a New Package

To add a new shared package to the monorepo:

1. Create a new directory in the `packages/` folder:

   ```bash
   mkdir -p packages/my-package
   ```

2. Initialize the package:

   ```bash
   cd packages/my-package
   pnpm init
   ```

3. Update the package.json with the appropriate name using the workspace prefix:

   ```json
   {
     "name": "@template/my-package",
     "version": "0.1.0",
     "private": true
   }
   ```

4. Add the necessary build, test, and lint scripts to align with the Turborepo pipeline
5. Reference the package in other projects using:
   ```bash
   pnpm add @template/my-package --workspace
   ```

### Adding a New Application

To add a new application to the monorepo:

1. Create a new directory in the `apps/` folder:

   ```bash
   mkdir -p apps/my-app
   ```

2. Initialize the application with the appropriate framework:

   ```bash
   # For React with Vite
   cd apps
   pnpm create vite my-app --template react-ts

   # For Expo
   cd apps
   npx create-expo-app@latest my-app

   # For Laravel
   cd apps
   composer create-project laravel/laravel my-app
   ```

3. Update the package.json with the appropriate name using the workspace prefix:

   ```json
   {
     "name": "@template/my-app",
     "private": true
   }
   ```

4. Add the necessary scripts to align with the Turborepo pipeline in package.json:

   ```json
   {
     "scripts": {
       "build": "vite build",
       "dev": "vite",
       "lint": "biome check .",
       "test": "vitest run"
     }
   }
   ```

5. Extend shared configurations as needed:
   ```json
   {
     "extends": ["@template/typescript-config/react.json"]
   }
   ```

## Configuration Packages

### TypeScript Config

The `typescript-config` package provides base TypeScript configurations for different types of projects. To use:

```json
{
  "extends": "@template/typescript-config/react.json"
}
```

### Biome Config

The `biome-config` package provides unified linting and formatting configurations. To use:

```json
{
  "extends": "@template/biome-config/base.json"
}
```

### Tailwind Config

The `tailwind-config` package provides a consistent styling foundation for web applications. To use:

```js
// tailwind.config.js
import { createConfig } from "@template/tailwind-config";

export default createConfig({
  // Project-specific overrides
});
```

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
