import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import path from 'path' // npm i @types/node
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@":path.resolve(__dirname, "src")
    }
  },
  css: {
  preprocessorOptions: {
    scss: {
      additionalData: `
          @import "@/assets/scss/variables.scss";
          @import "@/assets/scss/mixin.scss";
        `
    }
  }
},
})
