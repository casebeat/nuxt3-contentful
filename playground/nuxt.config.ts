import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  modules: ['nuxt3-contentful'],
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

// export default defineNuxtConfig({
//   modules: ['../src/module'],
//   nuxtContentful: {},
//   devtools: { enabled: true },
// });
