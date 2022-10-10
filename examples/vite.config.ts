import { defineConfig } from "vite";
import PathEnv from "vite-plugin-patch-env";

export default defineConfig({
  plugins: [PathEnv()],
});
