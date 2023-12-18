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
        
    const { resolve } = createResolver(import.meta.url)
    
    addServerHandler({
      route: '/api/contentful',
      handler: resolve('./api/contentful.get.ts'),
    })
  }
})
