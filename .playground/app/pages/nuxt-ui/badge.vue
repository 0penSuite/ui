<template>
  <ShowcasePage>
    <ShowcaseSection title="Variantes et couleurs" code='<UBadge label="actif" color="success" variant="subtle" />'>
      <ShowcaseGrid v-for="variant in badgeVariants" :key="variant">
        <UBadge v-for="color in colors" :key="color" :label="`${color} ${variant}`" :color="color" :variant="variant" />
      </ShowcaseGrid>
    </ShowcaseSection>

    <ShowcaseSection title="Tailles">
      <ShowcaseGrid>
        <UBadge v-for="size in sizes" :key="size" :label="size" :size="size" />
      </ShowcaseGrid>
    </ShowcaseSection>

    <ShowcaseSection title="Icônes et avatar">
      <ShowcaseGrid>
        <UBadge icon="i-lucide-check" label="Publié" color="success" variant="subtle" />
        <UBadge trailing-icon="i-lucide-x" label="Filtre" color="neutral" variant="outline" />
        <UBadge avatar="https://i.pravatar.cc/128?u=2" label="Hugo" color="neutral" variant="soft" />
        <UBadge icon="i-lucide-star" square />
      </ShowcaseGrid>
    </ShowcaseSection>
  </ShowcasePage>
</template>
