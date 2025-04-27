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
│   ├── config/        # Configuration packages
│   │   ├── typescript/      # TypeScript configurations
│   │   ├── biome/           # Biome configurations
│   │   ├── tailwind/        # Tailwind CSS configurations
│   │   └── nativewind/      # NativeWind configurations
│   ├── ui/            # UI component libraries
│   │   ├── web/             # Web UI components
│   │   └── mobile/          # Mobile UI components
│   └── util/          # Utility packages
│       ├── hooks/           # Shared React hooks
│       ├── state/           # Shared state management
│       └── themes/          # Shared design tokens
└── scripts/           # Project scripts and utilities
```

## Package Naming Conventions

This monorepo uses semantic namespaces to organize packages:

- `@app/*` - Application packages (e.g., `@app/web`, `@app/mobile`)
- `@config/*` - Configuration packages (e.g., `@config/typescript`, `@config/tailwind`)
- `@ui/*` - UI component libraries (e.g., `@ui/web`, `@ui/mobile`)
- `@util/*` - Utility packages (e.g., `@util/hooks`, `@util/state`)

## Development

### Available Commands

- `pnpm build`: Build all applications and packages
- `pnpm dev`: Start development servers for all applications
- `pnpm lint`: Run linting across all projects
- `pnpm test`: Run tests across all projects

### Adding a New Package

To add a new shared package to the monorepo:

1. Create a new directory in the appropriate namespace folder within `packages/`:

   ```bash
   # For a new UI component package
   mkdir -p packages/ui/my-package

   # For a new configuration package
   mkdir -p packages/config/my-package

   # For a new utility package
   mkdir -p packages/util/my-package
   ```

2. Initialize the package:

   ```bash
   cd packages/ui/my-package
   pnpm init
   ```

3. Update the package.json with the appropriate name using the namespace prefix:

   ```json
   {
     "name": "@ui/my-package",
     "version": "0.1.0",
     "private": true
   }
   ```

4. Add the necessary build, test, and lint scripts to align with the Turborepo pipeline
5. Reference the package in other projects using:
   ```bash
   pnpm add @ui/my-package --workspace
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

3. Update the package.json with the appropriate name using the namespace prefix:

   ```json
   {
     "name": "@app/my-app",
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
     "extends": "@config/typescript/react.json"
   }
   ```

## Configuration Packages

### TypeScript Config

The `@config/typescript` package provides base TypeScript configurations for different types of projects. To use:

```json
{
  "extends": "@config/typescript/react.json"
}
```

### Biome Config

The `@config/biome` package provides unified linting and formatting configurations. To use:

```json
{
  "extends": "@config/biome/base.json"
}
```

### Tailwind Config

The `@config/tailwind` package provides a consistent styling foundation for web applications. To use:

```js
// tailwind.config.js
import { createConfig } from "@config/tailwind";

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
