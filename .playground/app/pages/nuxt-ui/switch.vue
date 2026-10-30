<template>
  <ShowcasePage>
    <ShowcaseSection title="Couleurs" code='<USwitch v-model="enabled" label="Profil enfant" />'>
      <ShowcaseGrid>
        <USwitch v-for="color in colors" :key="color" :color="color" :label="color" default-value />
      </ShowcaseGrid>
    </ShowcaseSection>

    <ShowcaseSection title="Tailles">
      <ShowcaseGrid>
        <USwitch v-for="size in sizes" :key="size" :size="size" :label="size" default-value />
      </ShowcaseGrid>
    </ShowcaseSection>

    <ShowcaseSection title="États">
      <ShowcaseGrid>
        <USwitch label="Non coché" />
        <USwitch label="Avec description" description="Visible par les autres profils." />
        <USwitch label="Icônes" checked-icon="i-lucide-check" unchecked-icon="i-lucide-x" default-value />
        <USwitch label="Chargement" loading default-value />
        <USwitch label="Non modifiable" disabled default-value />
        <USwitch label="Obligatoire" required />
      </ShowcaseGrid>
    </ShowcaseSection>
  </ShowcasePage>
</template>
