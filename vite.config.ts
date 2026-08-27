import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import fs from "fs";
import { componentTagger } from "lovable-tagger";

/**
 * Where the built site is served from.
 *
 * A GitHub Pages *project* site lives under /<repo>/, and everything has to
 * know it — asset URLs, and the OAuth redirect, which is what broke sign-in
 * when it was built from the bare origin. A *custom domain* serves from the
 * root instead, so the sub-path disappears.
 *
 * The custom domain is declared by `public/CNAME`, which is also the file
 * GitHub Pages reads to serve it. Deriving the base from that same file means
 * adding or removing the domain cannot leave the two disagreeing — which,
 * silently, would break every asset on the site.
 */
const CNAME_FILE = path.resolve(__dirname, "public/CNAME");
const hasCustomDomain = fs.existsSync(CNAME_FILE);
const isGitHubPages = process.env.GITHUB_ACTIONS === "true";
const base = isGitHubPages && !hasCustomDomain ? "/CSDispatchHomets/" : "/";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base,
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
    fs: {
      // src/lib/content.ts globs content/**/*.md, which lives outside src/.
      allow: [path.resolve(__dirname)],
    },
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
