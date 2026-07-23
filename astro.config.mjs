import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://adesh.gaurcloud.com",
  integrations: [sitemap()],
});