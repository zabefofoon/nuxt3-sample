// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/styles/main.scss'],
  modules: ['@pinia/nuxt'],
  routeRules: {
    '/mypage/**': { ssr: false },
  },
  devServer: {
    port: 8091,
  },
  devtools: { enabled: true },
  experimental: {
    payloadExtraction: false,
    renderJsonPayloads: true
  },
  vite: {
    esbuild: {
      tsconfigRaw: {
        compilerOptions: {
          experimentalDecorators: true,
        },
      }
    }
  }
})
