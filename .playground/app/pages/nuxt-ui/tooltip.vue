<template>
  <ShowcasePage>
    <ShowcaseSection title="Utilisation" code='<UTooltip text="Supprimer"><UButton icon="i-lucide-trash-2" /></UTooltip>'>
      <ShowcaseGrid>
        <UTooltip text="Supprimer">
          <UButton icon="i-lucide-trash-2" color="error" variant="ghost" aria-label="Supprimer" />
        </UTooltip>
        <UTooltip text="Rechercher" :kbds="['meta', 'K']">
          <UButton icon="i-lucide-search" color="neutral" variant="outline" aria-label="Rechercher" />
        </UTooltip>
        <UTooltip text="Toujours visible" :default-open="true">
          <UButton label="Ouvert" color="neutral" variant="subtle" />
        </UTooltip>
      </ShowcaseGrid>
    </ShowcaseSection>

    <ShowcaseSection title="Positions">
      <ShowcaseGrid>
        <UTooltip v-for="side in sides" :key="side" :text="side" :content="{ side }">
          <UButton :label="side" color="neutral" variant="outline" />
        </UTooltip>
      </ShowcaseGrid>
    </ShowcaseSection>
  </ShowcasePage>
</template>
