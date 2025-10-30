import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/', // 👈 لازم يكون نفس اسم الريبو بالضبط
  plugins: [react()],
  server: {
    host: true,
  },
})
