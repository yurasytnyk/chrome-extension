/**
 * @filename: lint-staged.config.js
 * @type {import('lint-staged').Configuration}
 */
export default {
  "*.{ts,tsx}": () => "pnpm typecheck",
  "*.{js,jsx,ts,tsx,json,css,html,md,yml}": (files) => {
    return ["pnpm lint", `pnpm prettier ${files.join(" ")}`];
  },
};
