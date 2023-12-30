export default defineNuxtConfig({
  modules: ['../src/module'],
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
