import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import hostingConfig from "./vercel.json";

export default defineConfig({
  plugins: [react()],
  define: {
    "import.meta.env.VITE_BUILD_TIME": JSON.stringify(new Date().toISOString()),
  },
  preview: {
    headers: Object.fromEntries(
      hostingConfig.headers[0].headers.map(({ key, value }) => [key, value])
    ),
  },
  esbuild: {
    loader: "jsx",
    include: /src\/.*\.[jt]sx?$/,
    exclude: [],
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        ".js": "jsx",
      },
    },
  },
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./src/setupTests.js",
  },
});
