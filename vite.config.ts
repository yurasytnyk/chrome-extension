import { resolve } from "path";
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react-swc";

const rootDir = resolve(import.meta.dirname);
const srcDir = resolve(rootDir, "src");

export default defineConfig({
  plugins: [react(), tailwindcss()],
  publicDir: resolve(rootDir, "public"),
  build: {
    sourcemap: true,
    minify: true,
    outDir: resolve(srcDir, "..", "dist"),
  },
});
