// Catalogue de la charte : étend la layer, jamais livré aux projets enfants
export default defineNuxtConfig({
  extends: ['..'],
  devtools: { enabled: true },

  app: {
    head: {
      title: 'OpenSuite UI'
    }
  }
})
