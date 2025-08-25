import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // IMPORTANT: Replace `<repository-name>` with the name of your GitHub repository
  base: '/istqb-ctfl-4.0-svenska/',
  plugins: [react()],
})