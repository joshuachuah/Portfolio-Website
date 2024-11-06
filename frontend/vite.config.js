import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  publicDir: 'public',
  assetsInclude: ['**/*.JPG', '**/*.jpg', '**/*.png', '**/*.jpeg'],
  build: {
    assetsDir: 'assets'
  }
})
