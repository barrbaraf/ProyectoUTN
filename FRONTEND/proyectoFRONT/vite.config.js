import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build', // Configura la carpeta de salida para producción
  },
  server: {
    port: 3000, // Puedes cambiar el puerto si lo necesitas
  },
});