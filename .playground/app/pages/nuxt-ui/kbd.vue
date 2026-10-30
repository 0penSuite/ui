<template>
  <ShowcasePage>
    <ShowcaseSection title="Variantes et couleurs" code='<UKbd value="meta" /> <UKbd value="K" />'>
      <ShowcaseGrid v-for="variant in badgeVariants" :key="variant">
        <UKbd v-for="color in colors" :key="color" value="K" :color="color" :variant="variant" />
      </ShowcaseGrid>
    </ShowcaseSection>

    <ShowcaseSection title="Tailles">
      <ShowcaseGrid>
        <UKbd v-for="size in kbdSizes" :key="size" :size="size" value="meta" />
      </ShowcaseGrid>
    </ShowcaseSection>

    <ShowcaseSection title="Raccourcis">
      <ShowcaseGrid>
        <span><UKbd value="meta" /> <UKbd value="K" /></span>
        <span><UKbd value="ctrl" /> <UKbd value="shift" /> <UKbd value="P" /></span>
        <UKbd value="escape" />
        <UKbd value="enter" />
      </ShowcaseGrid>
    </ShowcaseSection>
  </ShowcasePage>
</template>
