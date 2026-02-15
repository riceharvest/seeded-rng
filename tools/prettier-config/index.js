/**
 * OpenSource Framework Prettier Configuration
 * 
 * Usage in package.json:
 * ```json
 * {
 *   "prettier": "@opensourceframework/prettier-config"
 * }
 * ```
 * 
 * Or in .prettierrc.js:
 * ```js
 * import config from '@opensourceframework/prettier-config';
 * export default config;
 * ```
 * 
 * @type {import('prettier').Config}
 */
export default {
  semi: true,
  singleQuote: true,
  trailingComma: 'es5',
  tabWidth: 2,
  useTabs: false,
  printWidth: 100,
  bracketSpacing: true,
  arrowParens: 'always',
  endOfLine: 'lf',
};