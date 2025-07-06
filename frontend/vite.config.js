import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwind from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': 'https://intern-assignment-3.onrender.com'
    }
  },
  plugins: [
    tailwind(),
    react()
  ],
})
