import { defineNuxtModule, createResolver, addServerHandler} from '@nuxt/kit'

// Module options TypeScript interface definition
export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt-contentful',
    configKey: 'nuxtContentful'
  },
  // Default configuration options of the Nuxt module
  defaults: {},
  setup () {
    
    const { resolve } = createResolver(import.meta.url)
    
    addServerHandler({
      route: '/api/contentful',
      handler: resolve('./api/contentful.get.ts'),
    })
  }
})
