import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// 👇 Use conditional base
export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/JebasSam-Portfolio/' : '/',
  plugins: [react()],
})
