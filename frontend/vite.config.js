import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // This is the "Professional" part: 
    // It splits your code so the browser loads it in smaller pieces (chunks)
    rollupOptions: {
      output: {
        manualChunks: {
          // Grouping big libraries together for better caching
          'vendor-react': ['react', 'react-dom'],
          'vendor-utils': ['framer-motion', 'axios'],
        },
      },
    },
    // Increases the limit to avoid warnings for your high-impact UI
    chunkSizeWarningLimit: 1000,
  },
  server: {
    // Ensures your local dev server is consistent
    port: 5173,
    strictPort: true,
  }
})