import { createResolver } from '@nuxt/kit'

// Chemins relatifs à la layer : `~` désigne le projet qui l'étend
const { resolve } = createResolver(import.meta.url)

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  modules: ['@nuxt/ui'],
  css: [resolve('./app/assets/css/main.css')],

  // Permet aux projets enfants d'écrire `@reference "#open-ui/assets/css/main.css"`
  alias: {
    '#open-ui': resolve('./app')
  },

  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      htmlAttrs: { lang: 'fr' }
    }
  }
})
