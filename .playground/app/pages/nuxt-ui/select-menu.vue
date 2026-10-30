<template>
  <ShowcasePage>
    <ShowcaseSection title="Variantes" code='<USelectMenu v-model="value" :items="genres" placeholder="Choisir un genre" />'>
      <ShowcaseGrid :cols="3">
        <ShowcaseItem v-for="variant in fieldVariants" :key="variant" :label="variant">
          <USelectMenu :items="demoOptions" placeholder="Choisir un genre" :variant="variant" />
        </ShowcaseItem>
      </ShowcaseGrid>
    </ShowcaseSection>

    <ShowcaseSection title="Couleurs" description="Couleur de l'anneau de focus, visible avec highlight.">
      <ShowcaseGrid :cols="3">
        <ShowcaseItem v-for="color in colors" :key="color" :label="color">
          <USelectMenu :items="demoOptions" placeholder="Choisir un genre" :color="color" highlight />
        </ShowcaseItem>
      </ShowcaseGrid>
    </ShowcaseSection>

    <ShowcaseSection title="Tailles">
      <ShowcaseGrid :cols="3">
        <ShowcaseItem v-for="size in sizes" :key="size" :label="size">
          <USelectMenu :items="demoOptions" placeholder="Choisir un genre" :size="size" />
        </ShowcaseItem>
      </ShowcaseGrid>
    </ShowcaseSection>

    <ShowcaseSection title="États">
      <ShowcaseGrid :cols="3">
        <ShowcaseItem label="multiple">
          <USelectMenu :items="demoOptions" :default-value="[demoOptions[0], demoOptions[4]]" multiple placeholder="Plusieurs genres" />
        </ShowcaseItem>
        <ShowcaseItem label="loading">
          <USelectMenu :items="demoOptions" loading placeholder="Chargement" />
        </ShowcaseItem>
        <ShowcaseItem label="disabled">
          <USelectMenu :items="demoOptions" disabled placeholder="Désactivé" />
        </ShowcaseItem>
      </ShowcaseGrid>
    </ShowcaseSection>
  </ShowcasePage>
</template>
