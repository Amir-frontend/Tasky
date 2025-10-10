import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Tasky/', // 👈 لازم يكون نفس اسم الريبو بالظبط
  plugins: [react()],
  server: {
    host: true, // علشان تشغل المشروع على الشبكة المحلية
  },
})
