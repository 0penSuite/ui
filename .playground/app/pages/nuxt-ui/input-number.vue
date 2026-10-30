<template>
  <ShowcasePage>
    <ShowcaseSection title="Variantes" code='<UInputNumber v-model="value" :min="0" />'>
      <ShowcaseGrid :cols="3">
        <ShowcaseItem v-for="variant in fieldVariants" :key="variant" :label="variant">
          <UInputNumber :default-value="5" :variant="variant" />
        </ShowcaseItem>
      </ShowcaseGrid>
    </ShowcaseSection>

    <ShowcaseSection title="Couleurs" description="Couleur de l'anneau de focus, visible avec highlight.">
      <ShowcaseGrid :cols="3">
        <ShowcaseItem v-for="color in colors" :key="color" :label="color">
          <UInputNumber :default-value="5" :color="color" highlight />
        </ShowcaseItem>
      </ShowcaseGrid>
    </ShowcaseSection>

    <ShowcaseSection title="Tailles">
      <ShowcaseGrid :cols="3">
        <ShowcaseItem v-for="size in sizes" :key="size" :label="size">
          <UInputNumber :default-value="5" :size="size" />
        </ShowcaseItem>
      </ShowcaseGrid>
    </ShowcaseSection>

    <ShowcaseSection title="États">
      <ShowcaseGrid :cols="3">
        <ShowcaseItem label="orientation=vertical">
          <UInputNumber :default-value="5" orientation="vertical" />
        </ShowcaseItem>
        <ShowcaseItem label="min / max / step">
          <UInputNumber :default-value="50" :min="0" :max="100" :step="10" />
        </ShowcaseItem>
        <ShowcaseItem label="disabled">
          <UInputNumber :default-value="5" disabled />
        </ShowcaseItem>
      </ShowcaseGrid>
    </ShowcaseSection>
  </ShowcasePage>
</template>
