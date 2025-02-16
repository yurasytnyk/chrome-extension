/**
 * @filename: lint-staged.config.js
 * @type {import('lint-staged').Configuration}
 */
export default {
  "*.{js,jsx,ts,tsx,json}": "pnpm prettier",
  "*.{js,jsx,ts,tsx,json}": "pnpm lint",
  "*.{ts,tsx}": "pnpm type-check",
};
