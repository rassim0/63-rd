// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
   
  devtools: { enabled: true },
  ssr: true,
  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;700&display=swap',
        },
      ],
    },
  },
  nitro: {
    preset: 'vercel',
    logLevel: 1
  },
  build: {
    transpile: ['vue-router', 'pinia']
  },
  logLevel: 'verbose',
})
