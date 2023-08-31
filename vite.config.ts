/// <reference types="vitest" />

import { defineConfig } from 'vite';
import analog from '@analogjs/platform';
import { join } from 'path';

const resolveRuntime = (path: string) => {
  return join('./src/server/runtime/', path)
}
// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  root: '.',
  publicDir: 'src/assets',
  build: {
    target: ['es2020'],
  },
  resolve: {
    mainFields: ['module'],
  },
  plugins: [analog({
    ssr: true,
    nitro: {
      // externals: {
      //   inline: ['./src/server/runtime']
      // },
      // handlers: [
      //   {
      //     method: 'get',
      //     route: '/api/oidc/status',
      //     handler: resolveRuntime('./oidc/routes/status')
      //   },
      //   {
      //     method: 'get',
      //     route: '/api/oidc/login',
      //     handler: resolveRuntime('./oidc/routes/login')
      //   },
      //   {
      //     method: 'get',
      //     route: '/api/oidc/logout',
      //     handler: resolveRuntime('./oidc/routes/logout')
      //   },
      //   {
      //     method: 'get',
      //     route: '/api/oidc/callback',
      //     handler: resolveRuntime('./oidc/routes/callback')
      //   },
      //   {
      //     method: 'post',
      //     route: '/api/oidc/callback',
      //     handler: resolveRuntime('./oidc/routes/callback')
      //   },
      //   {
      //     method: 'get',
      //     route: '/api/oidc/user',
      //     handler: resolveRuntime('./oidc/routes/user')
      //   },
      //   {
      //     method: 'get',
      //     route: '/api/oidc/cbt',
      //     handler: resolveRuntime('./oidc/routes/cbt')
      //   },
      //   {
      //     method: 'post',
      //     route: '/api/oidc/cbt',
      //     handler: resolveRuntime('./oidc/routes/cbt')
      //   },
      //   {
      //     method: 'get',
      //     route: '/api/oidc/error',
      //     handler: resolveRuntime('./oidc/routes/error')
      //   }
      // ],
      runtimeConfig: {
        openidConnect: {
          addPlugin: true,
          op: {
            issuer: process.env.AUTH_DOMAIN, // change to your OP addrress
            clientId: process.env.AUTH_CLIENT_ID,
            clientSecret: process.env.AUTH_CLIENT_SECRET,
            callbackUrl: `${process.env.BASE_URL}/api/oidc/callback`, // optional
            scope: [
              'email',
              'profile'
            ]
          },
          config: {
            debug: true,
            response_type: 'code',
            secret: 'oidc._sessionid',
            isCookieUserInfo: false, // whether save userinfo into cookie.
            cookie: { loginName: '' },
            cookiePrefix: 'oidc._',
            cookieEncrypt: true,
            cookieEncryptKey: 'bfnuxt9c2470cb477d907b1e0917oidc',
            cookieEncryptIV: 'ab83667c72eec9e4',
            cookieEncryptALGO: 'aes-256-cbc',
            cookieMaxAge: 24 * 60 * 60, //  default one day
            cookieFlags: {
              access_token: {
                httpOnly: true,
                secure: false
              }
            }
          }
        }
      }
    }
  })],
  define: {
    'import.meta.vitest': mode !== 'production',
  },
}));
