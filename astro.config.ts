import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import lucideAstroImportOptimizer from "./lucide.config";

// https://astro.build/config
export default defineConfig({
  site: "https://danieldaeschle.github.io",
  vite: {
    plugins: [
      tailwindcss(),
      import.meta.env.DEV ? lucideAstroImportOptimizer() : null,
    ].filter(Boolean),
  },
});
