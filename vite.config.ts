import { resolve } from 'path'
import { defineConfig } from 'vite'
import host from 'vite-plugin-host'
import checker from 'vite-plugin-checker'

// https://vitejs.dev/config/
export default defineConfig({
  root: '.',
  build: {
    assetsDir: 'assets',
    manifest: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      },
    },
  },
  plugins: [host(), checker({ typescript: true })],
})
