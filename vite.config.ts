import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Pure client-side SPA. Compiles to static index.html + assets.
// Runs from any front door — Vercel, Netlify, a plain folder, anything.
export default defineConfig({
  plugins: [react()],
});
