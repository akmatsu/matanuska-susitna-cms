import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: './schema.graphql',
  documents: ['./src/**/*.{ts,tsx,graphql}', './admin/**/*.{ts,tsx,graphql}'],
  ignoreNoDocuments: true,
  generates: {
    './src/graphql/': {
      preset: 'client',
      presetConfig: {
        gqlTagName: 'gql',
        gqlImport: '@keystone-6/core/admin-ui/apollo#gql',
        documentMode: 'documentNode',
      },
      config: {
        addTypename: true,
      },
    },
  },
};

export default config;
