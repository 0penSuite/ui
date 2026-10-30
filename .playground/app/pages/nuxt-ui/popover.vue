<template>
  <ShowcasePage>
    <ShowcaseSection title="Modes" code='<UPopover>
  <UButton label="Ouvrir" />
  <template #content>Contenu</template>
</UPopover>'>
      <ShowcaseGrid>
        <UPopover>
          <UButton label="Au clic" color="neutral" variant="outline" />
          <template #content>
            <div class="p-4">
              <UUser :name="demoUser.name" :description="demoUser.email" :avatar="{ src: demoUser.avatar }" />
            </div>
          </template>
        </UPopover>
        <UPopover mode="hover">
          <UButton label="Au survol" color="neutral" variant="outline" />
          <template #content>
            <div class="p-4">Ouvert au survol.</div>
          </template>
        </UPopover>
        <UPopover arrow>
          <UButton label="Avec flèche" color="neutral" variant="outline" />
          <template #content>
            <div class="p-4">Flèche vers le déclencheur.</div>
          </template>
        </UPopover>
      </ShowcaseGrid>
    </ShowcaseSection>

    <ShowcaseSection title="Positions">
      <ShowcaseGrid>
        <UPopover v-for="side in sides" :key="side" :content="{ side }">
          <UButton :label="side" color="neutral" variant="outline" />
          <template #content>
            <div class="p-4">{{ side }}</div>
          </template>
        </UPopover>
      </ShowcaseGrid>
    </ShowcaseSection>
  </ShowcasePage>
</template>
