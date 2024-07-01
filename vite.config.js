import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    "process.env": process.env,
    API_KEY: process.env.API_KEY,
    API_URL: process.env.API_URL,
    ENDPOINT: process.env.ENDPOINT
  }
})
