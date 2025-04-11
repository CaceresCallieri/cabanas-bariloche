import path from "path";

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import svgr from "vite-plugin-svgr";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      "@src": path.resolve(__dirname, "./src"),
      "@assets": path.resolve(__dirname, "src/assets"),
    },
  },
});
