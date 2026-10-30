<template>
  <ShowcasePage>
    <ShowcaseSection title="Variantes" code='<UTextarea v-model="value" placeholder="Synopsis..." />'>
      <ShowcaseGrid :cols="3">
        <ShowcaseItem v-for="variant in fieldVariants" :key="variant" :label="variant">
          <UTextarea placeholder="Synopsis..." :variant="variant" />
        </ShowcaseItem>
      </ShowcaseGrid>
    </ShowcaseSection>

    <ShowcaseSection title="Couleurs" description="Couleur de l'anneau de focus, visible avec highlight.">
      <ShowcaseGrid :cols="3">
        <ShowcaseItem v-for="color in colors" :key="color" :label="color">
          <UTextarea placeholder="Synopsis..." :color="color" highlight />
        </ShowcaseItem>
      </ShowcaseGrid>
    </ShowcaseSection>

    <ShowcaseSection title="Tailles">
      <ShowcaseGrid :cols="3">
        <ShowcaseItem v-for="size in sizes" :key="size" :label="size">
          <UTextarea placeholder="Synopsis..." :size="size" />
        </ShowcaseItem>
      </ShowcaseGrid>
    </ShowcaseSection>

    <ShowcaseSection title="États">
      <ShowcaseGrid :cols="3">
        <ShowcaseItem label="autoresize">
          <UTextarea autoresize placeholder="Grandit avec le texte" />
        </ShowcaseItem>
        <ShowcaseItem label="loading">
          <UTextarea loading placeholder="Chargement" />
        </ShowcaseItem>
        <ShowcaseItem label="disabled">
          <UTextarea disabled placeholder="Désactivé" />
        </ShowcaseItem>
      </ShowcaseGrid>
    </ShowcaseSection>
  </ShowcasePage>
</template>
