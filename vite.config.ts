import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        manualChunks: {
          // Core vendor chunks
          "react-vendor": ["react", "react-dom", "react-router-dom"],
          "ui-radix": [
            "@radix-ui/react-accordion",
            "@radix-ui/react-dialog",
            "@radix-ui/react-dropdown-menu",
            "@radix-ui/react-navigation-menu",
            "@radix-ui/react-popover",
            "@radix-ui/react-select",
            "@radix-ui/react-tabs",
            "@radix-ui/react-tooltip",
          ],
          "motion": ["framer-motion"],
          "query": ["@tanstack/react-query"],
          "forms": ["react-hook-form", "@hookform/resolvers", "zod"],
          "utils": ["date-fns", "clsx", "tailwind-merge", "class-variance-authority"],
          "sanitize": ["dompurify"],
          "carousel": ["embla-carousel-react", "embla-carousel-autoplay"],
          "charts": ["recharts"],
        },
      },
    },
  },
}));
