import {delineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path';

//https://vite.dev/config/
export default defineConfeg({
  root: path.resolve(__dirname, 'Frontend'),

  server {
    port: 3001,
    open: true
  },

  build:{
    outDir: path.resolve(__dirname, '../dist'),
    emptyOutDir: true
  },

  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'Frontend'),
    }
  }
  plugins: [vue()]
})