/// <reference types="vitest" />

import { defineConfig } from 'vite';
import analog from '@analogjs/platform';
import { resolve } from 'path';

const resolveRuntime = (path: string) => {
  return resolve(__dirname, './server/runtime/', path)
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  publicDir: 'src/assets',
  build: {
    target: ['es2020'],
  },
  resolve: {
    mainFields: ['module'],
  },
  plugins: [analog({
    nitro: {
      handlers: [{
        method: 'get',
        route: '/login',
        handler: resolveRuntime('./oidc/routes/login')
      }]
    }
  })],
  define: {
    'import.meta.vitest': mode !== 'production',
  },
}));
