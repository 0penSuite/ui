<template>
  <ShowcasePage>
    <ShowcaseSection title="Utilisation" code='<UModal title="Titre" description="Description">
  <UButton label="Ouvrir" />
  <template #body>Contenu</template>
</UModal>'>
      <ShowcaseGrid>
        <UModal title="Modifier le profil" description="Ces informations sont visibles par les autres membres.">
          <UButton label="Simple" color="neutral" variant="outline" />
          <template #body>
            <UFormField label="Nom affiché">
              <UInput :default-value="demoUser.name" class="w-full" />
            </UFormField>
          </template>
        </UModal>

        <UModal title="Supprimer le titre" description="Cette action est définitive.">
          <UButton label="Avec pied" color="neutral" variant="outline" />
          <template #footer="{ close }">
            <div class="flex w-full justify-end gap-2">
              <UButton label="Annuler" color="neutral" variant="outline" @click="close" />
              <UButton label="Supprimer" color="error" @click="close" />
            </div>
          </template>
        </UModal>

        <UModal title="Plein écran" fullscreen>
          <UButton label="Plein écran" color="neutral" variant="outline" />
          <template #body>
            Contenu occupant tout l'écran.
          </template>
        </UModal>

        <UModal title="Sans fermeture extérieure" description="Ni Échap ni clic à côté : utiliser la croix." :dismissible="false">
          <UButton label="Non refermable" color="neutral" variant="outline" />
        </UModal>

        <UModal title="Sans voile" :overlay="false">
          <UButton label="Sans voile" color="neutral" variant="outline" />
          <template #body>
            Le fond reste visible.
          </template>
        </UModal>
      </ShowcaseGrid>
    </ShowcaseSection>
  </ShowcasePage>
</template>
