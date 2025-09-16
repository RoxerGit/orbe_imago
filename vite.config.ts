//import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      //'@': fileURLToPath(new URL('./src', import.meta.url))
      '@': path.resolve(__dirname, './src'), // para usar @/ en imports
    }
  },
  build: {
    outDir: 'dist', // Render espera "dist"
    emptyOutDir: true,
  },
  server: {
    port: 3000, // útil para local dev
  },
  // ⚡️ Esto asegura que Vue Router en modo history funcione
  // Render servirá index.html en cualquier ruta desconocida
  preview: {
    port: 8080,
  }
})
