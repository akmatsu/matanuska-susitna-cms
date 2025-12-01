# CMS (Content Management System)

A modern headless CMS built with [Keystone.js](https://keystonejs.com/), featuring GraphQL API, TypeSense search integration, and Azure AD authentication.

## Features

- 🚀 Headless CMS powered by Keystone.js
- 📱 GraphQL API for flexible content delivery
- 🔍 Full-text search powered by TypeSense
- 🔐 Entra AD authentication integration
- 📦 S3 storage integration for media files
- 🔄 Advanced content workflow with draft/publish system
- 👥 Role-based access control
- 📬 GovDelivery integration for notifications

## Dev Prerequisites

- [Node.js 20+](https://nodejs.org/en/download/)
- [PostgreSQL database](https://www.postgresql.org/download/) - Follow instructions for your OS. If you're a borough employee using WSL, follow [Ubuntu instructions for PostgreSQL APT Repository](https://www.postgresql.org/download/linux/ubuntu/).
- [TypeSense server](https://typesense.org/docs/guide/install-typesense.html#option-2-local-machine-self-hosting) - self-hosted, look for your OS instructions If you're a borough employee using WSL, follow [DEB package instructions](https://typesense.org/docs/guide/install-typesense.html#deb-package-on-ubuntu-debian).
- [Redis Server](https://redis.io/docs/latest/operate/oss_and_stack/install/install-stack/apt/)
- [pnpm package manager](https://pnpm.io/installation#using-npm)
- Entra AD account (for authentication) - contact Web Team for help.

## Setting up Dev Environment

1. Make sure you've installed all the [prerequisites](#dev-prerequisites).
1. Clone the repository
1. Install dependencies:

   ```bash
   pnpm install
   ```

1. Set up environment variables:
   copy `apps/cms/.env.example` to `apps/cms/.env` and fill in the required values.

   ```bash
   cp apps/cms/.env.example apps/cms/.env
   ```

1. Run dev so keystone can run it's inital setup:
   ```bash
   pnpm run cms:dev
   ```

1. Run database migrations:

   ```bash
   pnpm run cms:migrate
   ```

1. Seed Data (optional):

   ```bash
   pnpm run db:seed --filter=cms
   ```

1. Start the development server:
   ```bash
   pnpm run cms:dev
   ```

The CMS will be available at [`http://localhost:3333`](http://localhost:3333).

## Project Structure

```
apps/
  cms/              # Main CMS application
    keystone.ts     # Keystone configuration
    admin/          # Admin UI customizations
    migrations/     # Database migrations
    src/           # Source code
      app/         # Core application code
      components/  # React components
      utils/      # Utility functions
```

## Deployment

The project includes GitHub Actions workflows for automated deployment. The deployment process:

1. Builds the application
2. Packages required files
3. Deploys to the specified server
4. Sets up environment variables
5. Runs database migrations

## Available Scripts

Review root [package.json](./package.json).

## Contributing

1. Create a new branch for your feature
2. Make your changes
3. [Submit a pull request in GitHub](https://github.com/akmatsu/matanuska-susitna-cms/pulls)

## License

Copyright (c) 2025 [The Matanuska-Susitna Borough](https://matsugov.us) Licensed under the [MIT License](/LICENSE.MD).
