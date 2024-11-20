import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue2'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'
import { VuetifyResolver } from 'unplugin-vue-components/resolvers'
import components from 'unplugin-vue-components/vite'
import * as path from 'node:path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), dts(), components({ resolvers: [VuetifyResolver()] })],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      vue$: resolve(__dirname, 'node_modules/vue/dist/vue.runtime.esm.js'),
      vuetify$: resolve(__dirname, 'node_modules/vuetify')
    },
    extensions: ['.vue', '.mjs', '.js']
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'lib/main.ts'),
      name: 'QueryBuilder',
      fileName: 'query-builder'
    },
    rollupOptions: {
      external: ['vue', 'vuetify'],
      output: {
        globals: {
          vue: 'Vue',
          vuetify: 'Vuetify'
        },
        format: 'es'
      }
    },
    optimizeDeps: {
      include: ['vue', 'vuetify']
    }
  }
})
