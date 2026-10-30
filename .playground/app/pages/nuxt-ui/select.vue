<template>
  <ShowcasePage>
    <ShowcaseSection title="Variantes" code='<USelect v-model="value" :items="genres" placeholder="Choisir un genre" />'>
      <ShowcaseGrid :cols="3">
        <ShowcaseItem v-for="variant in fieldVariants" :key="variant" :label="variant">
          <USelect :items="demoOptions" placeholder="Choisir un genre" :variant="variant" />
        </ShowcaseItem>
      </ShowcaseGrid>
    </ShowcaseSection>

    <ShowcaseSection title="Couleurs" description="Couleur de l'anneau de focus, visible avec highlight.">
      <ShowcaseGrid :cols="3">
        <ShowcaseItem v-for="color in colors" :key="color" :label="color">
          <USelect :items="demoOptions" placeholder="Choisir un genre" :color="color" highlight />
        </ShowcaseItem>
      </ShowcaseGrid>
    </ShowcaseSection>

    <ShowcaseSection title="Tailles">
      <ShowcaseGrid :cols="3">
        <ShowcaseItem v-for="size in sizes" :key="size" :label="size">
          <USelect :items="demoOptions" placeholder="Choisir un genre" :size="size" />
        </ShowcaseItem>
      </ShowcaseGrid>
    </ShowcaseSection>

    <ShowcaseSection title="États">
      <ShowcaseGrid :cols="3">
        <ShowcaseItem label="icon">
          <USelect :items="demoOptions" icon="i-lucide-tags" placeholder="Avec icône" />
        </ShowcaseItem>
        <ShowcaseItem label="loading">
          <USelect :items="demoOptions" loading placeholder="Chargement" />
        </ShowcaseItem>
        <ShowcaseItem label="disabled">
          <USelect :items="demoOptions" disabled placeholder="Désactivé" />
        </ShowcaseItem>
      </ShowcaseGrid>
    </ShowcaseSection>
  </ShowcasePage>
</template>
