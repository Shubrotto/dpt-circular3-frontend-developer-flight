import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/dpt-circular3-frontend-developer-flight/",
  plugins: [react()],
});
