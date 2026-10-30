<template>
  <ShowcasePage>
    <ShowcaseSection title="Directions" code='<UDrawer title="Partager" direction="bottom">
  <UButton label="Ouvrir" />
  <template #body>Contenu</template>
</UDrawer>'>
      <ShowcaseGrid>
        <UDrawer v-for="direction in sides" :key="direction" :direction="direction" title="Partager" description="Envoyer ce titre à un proche.">
          <UButton :label="direction" color="neutral" variant="outline" />
          <template #body>
            <UInput icon="i-lucide-mail" placeholder="adresse@exemple.fr" class="w-full" />
          </template>
        </UDrawer>
      </ShowcaseGrid>
    </ShowcaseSection>

    <ShowcaseSection title="Options">
      <ShowcaseGrid>
        <UDrawer title="Encart" inset>
          <UButton label="inset" color="neutral" variant="outline" />
          <template #body>
            Tiroir détaché des bords.
          </template>
        </UDrawer>
        <UDrawer title="Sans poignée" :handle="false">
          <UButton label="handle=false" color="neutral" variant="outline" />
          <template #body>
            Pas de poignée de glissement.
          </template>
        </UDrawer>
      </ShowcaseGrid>
    </ShowcaseSection>
  </ShowcasePage>
</template>
