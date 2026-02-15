/**
 * React ESLint configuration for OpenSource Framework packages
 * @type {import('eslint').Linter.Config[]}
 */
import base from './base.js';

export default [
  ...base,
  {
    files: ['**/*.tsx', '**/*.jsx'],
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }
      ]
    },
    settings: {
      react: {
        version: 'detect'
      }
    }
  }
];