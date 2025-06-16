// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
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
  ssr: true,
  nitro: {
    preset: 'vercel'
  },
  build: {
    transpile: ['vue-router', 'pinia']
  }

})
