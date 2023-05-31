import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import sveltePreprocess from 'svelte-preprocess';
import path from 'path'

// const fs = require('node:fs')
// const https = require('node:https')

function _resolve(dir) {
  return path.resolve(__dirname, dir)
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte({
      // ...
      preprocess: sveltePreprocess(),
    }),
  ],
  server: {
    // https: {
    //   cert: fs.readFileSync(path.join(__dirname, 'keys/cert.crt')),
    //   key: fs.readFileSync(path.join(__dirname, 'keys/cert.key')),
    // },
    // proxy: {
    //   '/api': {
    //     target: 'https://api.coindesk.com',
    //     changeOrigin: true,
    //     secure: true,
    //     pathRewrite: {
    //       '^/api': ''
    //     }
    //   }
    // }
  },
  // 配置项目别名
  resolve: {
    alias: {
      '@': _resolve('src'),
    },
  },
});