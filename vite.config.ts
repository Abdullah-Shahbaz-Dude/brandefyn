import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api/blog': {
        target: 'https://brandefyn.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/blog/, '/blog/wp-json'),
      },
    },
  },
})
