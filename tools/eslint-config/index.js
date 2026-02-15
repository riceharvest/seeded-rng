/**
 * OpenSource Framework ESLint Configuration
 * 
 * Usage in eslint.config.js:
 * ```js
 * import config from '@opensourceframework/eslint-config';
 * export default config;
 * ```
 * 
 * Or for React projects:
 * ```js
 * import reactConfig from '@opensourceframework/eslint-config/react';
 * export default reactConfig;
 * ```
 */

import base from './base.js';

export default base;
export { default as base } from './base.js';
export { default as react } from './react.js';