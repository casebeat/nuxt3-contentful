import { defineNuxtModule, addPlugin, createResolver, addServerHandler, addDevServerHandler } from '@nuxt/kit'

// Module options TypeScript interface definition
export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt-contentful',
    configKey: 'nuxtContentful'
  },
  // Default configuration options of the Nuxt module
  defaults: {},
  setup (options, nuxt) {
    const resolver = createResolver(import.meta.url)

    // Do not add the extension since the `.ts` will be transpiled to `.mjs` after `npm run prepack`
    addPlugin(resolver.resolve('./runtime/plugin'))

    const { resolve } = createResolver(import.meta.url)

    // Add an API route
    addServerHandler({
      route: '/api/contentful',
      handler: resolve('./api/contentful.get.ts'),
    })

    addServerHandler(
    {
      route: '/api/foo',
      handler: resolve('./api/foo.get.ts'),
    }
    )

  }
})
