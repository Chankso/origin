// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://chankso.github.io",
  base: "/origin/",
  output: "static",
  trailingSlash: "always",
});
