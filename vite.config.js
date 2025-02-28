import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  root: ".", // Вказуємо кореневу папку
  build: {
    outDir: "dist", // Папка вихідних файлів
  },
});
