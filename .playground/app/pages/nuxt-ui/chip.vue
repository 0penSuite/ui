<template>
  <ShowcasePage>
    <ShowcaseSection title="Couleurs" code='<UChip color="error"><UButton icon="i-lucide-bell" color="neutral" variant="subtle" /></UChip>'>
      <ShowcaseGrid>
        <UChip v-for="color in colors" :key="color" :color="color">
          <UButton icon="i-lucide-bell" color="neutral" variant="subtle" :aria-label="color" />
        </UChip>
      </ShowcaseGrid>
    </ShowcaseSection>

    <ShowcaseSection title="Tailles">
      <ShowcaseGrid>
        <ShowcaseItem v-for="size in largeSizes" :key="size" :label="size">
          <UChip :size="size">
            <UAvatar alt="Léa Bernard" />
          </UChip>
        </ShowcaseItem>
      </ShowcaseGrid>
    </ShowcaseSection>

    <ShowcaseSection title="Positions et texte">
      <ShowcaseGrid>
        <ShowcaseItem v-for="position in chipPositions" :key="position" :label="position">
          <UChip :position="position" color="success" inset>
            <UAvatar :src="demoUser.avatar" alt="Léa Bernard" />
          </UChip>
        </ShowcaseItem>
        <ShowcaseItem label="text">
          <UChip text="4" size="3xl">
            <UButton icon="i-lucide-mail" color="neutral" variant="subtle" aria-label="Messages" />
          </UChip>
        </ShowcaseItem>
      </ShowcaseGrid>
    </ShowcaseSection>
  </ShowcasePage>
</template>
