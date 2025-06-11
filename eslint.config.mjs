import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';

import gitignore from 'eslint-config-flat-gitignore';

export default tseslint.config(
  gitignore({
    root: true,
  }),
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    ignores: ['apps/cms/src/graphql/**'],
    languageOptions: { globals: { ...globals.browser, ...globals.node } },
    rules: {
      ...pluginJs.configs.recommended.rules,
    },
  },

  // TypeScript specific rules
  ...tseslint.configs.recommended,
  {
    rules: {
      '@typescript-eslint/no-explicit-any': 'off', // Allow 'any' type
      '@typescript-eslint/no-unused-vars': 'warn',
    },
  },

  // React specific rules
  {
    ...pluginReact.configs.flat.recommended,
    files: ['**/*.{js,ts,jsx,tsx}'],
    settings: {
      react: {
        version: 'detect', // Automatically detect the React version
      },
    },
    rules: {
      ...pluginReact.configs.flat.recommended.rules,
      'react/react-in-jsx-scope': 'off', // Not needed with React 17+
    },
  },
);
