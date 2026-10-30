<template>
  <ShowcasePage>
    <ShowcaseSection title="PageHeader" code='<UPageHeader title="Catalogue" description="..." />'>
      <UPageHeader
        headline="Watch"
        title="Catalogue"
        description="Films, séries et documentaires disponibles."
        :links="[{ label: 'Ajouter', icon: 'i-lucide-plus' }, { label: 'Importer', icon: 'i-lucide-download', color: 'neutral', variant: 'outline' }]"
      />
    </ShowcaseSection>

    <ShowcaseSection title="PageCard : variantes" code='<UPageCard title="Watch" description="..." icon="i-lucide-tv" to="/" />'>
      <UPageGrid>
        <ShowcaseItem v-for="variant in pageCardVariants" :key="variant" :label="variant">
          <UPageCard :variant="variant" title="Watch" description="Plateforme de streaming de la suite." icon="i-lucide-tv" to="/nuxt-ui/page-card" class="w-full" />
        </ShowcaseItem>
      </UPageGrid>
    </ShowcaseSection>

    <ShowcaseSection title="PageCard : mise en avant" description="highlight et spotlight, dans chaque couleur.">
      <UPageGrid>
        <UPageCard v-for="color in colors" :key="color" :title="color" description="Bordure colorée." icon="i-lucide-sparkles" highlight :highlight-color="color" />
        <UPageCard v-for="color in colors" :key="`spot-${color}`" :title="color" description="Halo au survol." icon="i-lucide-sparkles" spotlight :spotlight-color="color" />
      </UPageGrid>
    </ShowcaseSection>

    <ShowcaseSection title="PageCard : horizontale">
      <UPageCard title="OpenSuite UI" description="La charte graphique commune, avec son catalogue." icon="i-lucide-swatch-book" orientation="horizontal">
        <USkeleton class="aspect-video w-full" />
      </UPageCard>
    </ShowcaseSection>
  </ShowcasePage>
</template>
