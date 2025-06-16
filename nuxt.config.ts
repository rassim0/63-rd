// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false }, // Disable in production
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
    // Add this for better Vercel compatibility
    vercel: {
      regions: ['iad1'], // Optional: specify deployment region
    },
  },
  // Modern build settings
  experimental: {
    payloadExtraction: false,
  },
  // Ensure these are transpiled
  build: {
    transpile: ['vue-router', 'pinia', '@vue/shared']
  }
})