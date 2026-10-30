<template>
  <ShowcasePage>
    <ShowcaseSection title="Variantes" code='<UEmpty icon="i-lucide-film" title="Aucun titre" description="Le catalogue est vide." />'>
      <ShowcaseGrid :cols="3" top>
        <ShowcaseItem v-for="variant in emptyVariants" :key="variant" :label="variant">
          <UEmpty
            :variant="variant"
            icon="i-lucide-film"
            title="Aucun titre"
            description="Le catalogue est vide pour l'instant."
            :actions="[{ label: 'Ajouter un titre', icon: 'i-lucide-plus' }]"
            class="w-full"
          />
        </ShowcaseItem>
      </ShowcaseGrid>
    </ShowcaseSection>

    <ShowcaseSection title="Tailles">
      <ShowcaseGrid :cols="3" top>
        <ShowcaseItem v-for="size in sizes" :key="size" :label="size">
          <UEmpty :size="size" icon="i-lucide-search-x" title="Aucun résultat" description="Essayez une autre recherche." class="w-full" />
        </ShowcaseItem>
      </ShowcaseGrid>
    </ShowcaseSection>
  </ShowcasePage>
</template>
