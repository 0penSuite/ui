<template>
  <ShowcasePage>
    <ShowcaseSection title="Variantes" code='<UCard>
  <template #header>En-tête</template>
  Contenu
  <template #footer>Pied</template>
</UCard>'>
      <ShowcaseGrid :cols="2" top>
        <ShowcaseItem v-for="variant in badgeVariants" :key="variant" :label="variant">
          <UCard :variant="variant" class="w-full">
            <template #header>
              Les Hauts Plateaux
            </template>
            Un berger, un hiver, une vallée coupée du monde.
            <template #footer>
              <UButton label="Regarder" icon="i-lucide-play" size="sm" />
            </template>
          </UCard>
        </ShowcaseItem>
      </ShowcaseGrid>
    </ShowcaseSection>

    <ShowcaseSection title="Contenu seul">
      <UCard>Carte sans en-tête ni pied.</UCard>
    </ShowcaseSection>
  </ShowcasePage>
</template>
