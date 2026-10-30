<template>
  <ShowcasePage>
    <ShowcaseSection title="Utilisation" description="Groupes, icônes, raccourcis, sous-menu, cases à cocher et couleur d'élément." code='<UDropdownMenu :items="items">
  <UButton icon="i-lucide-ellipsis" />
</UDropdownMenu>'>
      <ShowcaseGrid>
        <UDropdownMenu :items="demoDropdown">
          <UButton label="Compte" icon="i-lucide-user" trailing-icon="i-lucide-chevron-down" color="neutral" variant="outline" />
        </UDropdownMenu>
        <UDropdownMenu :items="demoDropdown" arrow>
          <UButton icon="i-lucide-ellipsis" color="neutral" variant="ghost" aria-label="Actions" />
        </UDropdownMenu>
      </ShowcaseGrid>
    </ShowcaseSection>

    <ShowcaseSection title="Tailles">
      <ShowcaseGrid>
        <UDropdownMenu v-for="size in sizes" :key="size" :items="demoDropdown" :size="size">
          <UButton :label="size" :size="size" color="neutral" variant="outline" />
        </UDropdownMenu>
      </ShowcaseGrid>
    </ShowcaseSection>
  </ShowcasePage>
</template>
