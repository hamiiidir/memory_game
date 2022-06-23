import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const path = require('path')

export default defineConfig({
  resolve:{
    alias:{
      '@' : path.resolve(__dirname, './src')
    },
  },  
  server: {
    port: 80
  },
  preview: {
    port: 80
  },
  plugins: [vue()]
})