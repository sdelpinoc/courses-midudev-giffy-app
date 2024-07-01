import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    API_KEY_: process.env.VITE_API_KEY,
    API_URL_: process.env.VITE_API_URL,
    ENDPOINT_: process.env.VITE_ENDPOINT
  }
})
