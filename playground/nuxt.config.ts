export default defineNuxtConfig({
  modules: ['nuxt3-contentful'],
  nuxtContentful: {},
  runtimeConfig: {
    public: {
      contentful: {
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
  },
  devtools: { enabled: true },
});
