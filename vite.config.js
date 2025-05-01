import { defineConfig } from 'vite';

export default defineConfig({
  base: '/spencers-finalv3/', 
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        portfolio: 'portfolio.html'
      }
    }
  }
});
