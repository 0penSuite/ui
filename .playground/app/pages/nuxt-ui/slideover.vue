<template>
  <ShowcasePage>
    <ShowcaseSection title="Côtés" code='<USlideover title="Filtres" side="right">
  <UButton label="Ouvrir" />
  <template #body>Contenu</template>
</USlideover>'>
      <ShowcaseGrid>
        <USlideover v-for="side in sides" :key="side" :side="side" title="Filtres" description="Affiner la recherche.">
          <UButton :label="side" color="neutral" variant="outline" />
          <template #body>
            <UCheckboxGroup legend="Genres" :items="demoOptions" />
          </template>
        </USlideover>
      </ShowcaseGrid>
    </ShowcaseSection>

    <ShowcaseSection title="Options">
      <ShowcaseGrid>
        <USlideover title="Encart" inset>
          <UButton label="inset" color="neutral" variant="outline" />
          <template #body>
            Panneau détaché des bords.
          </template>
        </USlideover>
        <USlideover title="Avec pied">
          <UButton label="footer" color="neutral" variant="outline" />
          <template #body>
            <UCheckboxGroup legend="Genres" :items="demoOptions" />
          </template>
          <template #footer="{ close }">
            <UButton label="Appliquer" block @click="close" />
          </template>
        </USlideover>
      </ShowcaseGrid>
    </ShowcaseSection>
  </ShowcasePage>
</template>
