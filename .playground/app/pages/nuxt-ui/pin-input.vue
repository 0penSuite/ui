<template>
  <ShowcasePage>
    <ShowcaseSection title="Variantes" code='<UPinInput v-model="code" :length="4" />'>
      <ShowcaseGrid :cols="3">
        <ShowcaseItem v-for="variant in fieldVariants" :key="variant" :label="variant">
          <UPinInput :length="4" :variant="variant" />
        </ShowcaseItem>
      </ShowcaseGrid>
    </ShowcaseSection>

    <ShowcaseSection title="Couleurs" description="Couleur de l'anneau de focus, visible avec highlight.">
      <ShowcaseGrid :cols="3">
        <ShowcaseItem v-for="color in colors" :key="color" :label="color">
          <UPinInput :length="4" :color="color" highlight />
        </ShowcaseItem>
      </ShowcaseGrid>
    </ShowcaseSection>

    <ShowcaseSection title="Tailles">
      <ShowcaseGrid :cols="3">
        <ShowcaseItem v-for="size in sizes" :key="size" :label="size">
          <UPinInput :length="4" :size="size" />
        </ShowcaseItem>
      </ShowcaseGrid>
    </ShowcaseSection>

    <ShowcaseSection title="États">
      <ShowcaseGrid :cols="3">
        <ShowcaseItem label="mask">
          <UPinInput :length="4" mask :default-value="['1', '2', '3', '4']" />
        </ShowcaseItem>
        <ShowcaseItem label="otp">
          <UPinInput :length="6" otp type="number" />
        </ShowcaseItem>
        <ShowcaseItem label="disabled">
          <UPinInput :length="4" disabled />
        </ShowcaseItem>
      </ShowcaseGrid>
    </ShowcaseSection>
  </ShowcasePage>
</template>
