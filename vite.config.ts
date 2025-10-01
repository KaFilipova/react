import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      src: path.resolve(process.cwd(), "src"),
      "@": path.resolve(process.cwd(), "src"),
    },
  },
  server: {
    port: 3000,
  },
});
