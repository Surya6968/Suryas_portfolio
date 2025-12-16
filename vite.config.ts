import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],

  // 👇 Important for GitHub Pages
  base: '/Suryas_portfolio/',

  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});