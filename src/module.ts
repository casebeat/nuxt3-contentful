import { defineNuxtModule, createResolver, addServerHandler, addImports } from '@nuxt/kit';
import { fileURLToPath } from 'url'
// Module options TypeScript interface definition
export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt3-contentful',
    configKey: 'nuxt3Contentful',
  },
  // Default configuration options of the Nuxt module
  defaults: {},
  setup() {
    const { resolve } = createResolver(import.meta.url);
    const runtimeDir = fileURLToPath(new URL('./runtime', import.meta.url))

    addServerHandler({
      route: '/api/contentful',
      handler: resolve('./api/contentful.get.ts'),
    });

    addImports([{
      from: resolve(runtimeDir, 'composables/useFetchContentfulEntriesMapped'),
      name: 'useFetchContentfulEntriesMapped',
      as: 'useFetchContentfulEntriesMapped'
    },
    {
      from: resolve(runtimeDir, 'composables/useFetchContentfulPageBySlug'),
      name: 'useFetchContentfulPageBySlug',
      as: 'useFetchContentfulPageBySlug'
    },
    {
      from: resolve(runtimeDir, 'composables/useFetchContentfulEntriesRaw'),
      name: 'useFetchContentfulEntriesRaw',
      as: 'useFetchContentfulEntriesRaw'
    }
  ])
    
  },
});
