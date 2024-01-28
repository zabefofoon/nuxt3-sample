// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  routeRules: {
    '/mypage/**': { ssr: false },
  },
  devServer: {
    port: 8091,
  },
  devtools: { enabled: true },
  experimental: {
    payloadExtraction: false,
  },
})
