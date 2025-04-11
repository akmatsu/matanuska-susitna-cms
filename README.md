# CMS (Content Management System)

A modern headless CMS built with [Keystone.js](https://keystonejs.com/), featuring GraphQL API, TypeSense search integration, and Azure AD authentication.

## Features

- 🚀 Headless CMS powered by Keystone.js
- 📱 GraphQL API for flexible content delivery
- 🔍 Full-text search powered by TypeSense
- 🔐 Azure AD authentication integration
- 📦 S3 storage integration for media files
- 🔄 Advanced content workflow with draft/publish system
- 👥 Role-based access control
- 📬 GovDelivery integration for notifications

## Prerequisites

- Node.js 20+
- PostgreSQL database
- TypeSense server
- Azure AD account (for authentication)
- AWS S3 bucket (for file storage)
- pnpm package manager

## Getting Started

1. Clone the repository
2. Install dependencies:

   ```bash
   pnpm install
   ```

3. Set up environment variables:
   Create a `.env` file in the `apps/cms` directory with the following variables:

   ```
   DATABASE_NAME=your_db_name
   DATABASE_USER=your_db_user
   DATABASE_HOST=your_db_host
   DATABASE_PASSWORD=your_db_password
   DATABASE_PORT=5432
   DATABASE_PROVIDER=postgresql
   DATABASE_PROTOCOL=postgres

   NEXTAUTH_URL=http://localhost:3000
   SESSION_SECRET=your_session_secret

   AD_TENANT_ID=your_azure_tenant_id
   AD_CLIENT_ID=your_azure_client_id
   AD_CLIENT_SECRET=your_azure_client_secret

   S3_BUCKET_NAME=your_bucket_name
   S3_REGION=your_region
   S3_ACCESS_KEY_ID=your_access_key
   S3_SECRET_ACCESS_KEY=your_secret_key

   TYPESENSE_API_KEY=your_typesense_key
   TYPESENSE_HOST=localhost
   TYPESENSE_PORT=8108
   TYPESENSE_PROTOCOL=http

   GOV_DELIVERY_USERNAME=your_govdelivery_username
   GOV_DELIVERY_PASSWORD=your_govdelivery_password
   GOV_DELIVERY_SUB_DOMAIN=your_govdelivery_subdomain
   ```

4. Run database migrations:

   ```bash
   pnpm run cms:migrate
   ```

5. Start the development server:
   ```bash
   pnpm run cms:dev
   ```

The CMS will be available at http://localhost:3000

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

- `pnpm run cms:dev` - Start development server
- `pnpm run cms:build` - Build for production
- `pnpm run cms:start` - Start production server
- `pnpm run cms:migrate` - Run database migrations
- `pnpm run collections:create` - Create TypeSense collections
- `pnpm run collections:remove` - Remove TypeSense collections
- `pnpm run typesense:import:services` - Import services to TypeSense
- `pnpm run typesense:import:communities` - Import communities to TypeSense

## Contributing

1. Create a new branch for your feature
2. Make your changes
3. Submit a pull request

## License

Copyright (c) 2025 [The Matanuska-Susitna Borough](https://matsugov.us) Licensed under the [MIT License](/LICENSE.MD).
