import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    open: true, // Abre automaticamente no navegador
    port: 3000, // Porta do servidor
  },
});