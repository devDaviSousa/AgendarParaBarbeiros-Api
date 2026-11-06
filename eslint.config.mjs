import globals from 'globals';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs}'],
    extends: ['airbnb-base', 'prettier'],
    plugins: ['prettier'],
    languageOptions: {
      ecmaVersion: 2016, // <--- Define o ES2016 aqui! Não precisa importar 'es2016' do globals
      globals: {
        ...globals.node, // Se for um projeto Node.js
      },
    },

    env: {
      es6: true,
      node: true,
    },

    rules: {
      'prettier/prettier': 'error',
      'class-methods-use-this': 'off',
      'no-param-reassign': 'off',
      camelcase: 'off',
      'no-unused-vars': ['error', { argsIgnorePattern: 'next' }],
    },
  },
]);
