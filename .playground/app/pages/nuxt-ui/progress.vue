<template>
  <ShowcasePage>
    <ShowcaseSection title="Couleurs" code='<UProgress v-model="value" color="primary" />'>
      <ShowcaseGrid :cols="1">
        <UProgress v-for="color in colors" :key="color" :model-value="60" :color="color" />
      </ShowcaseGrid>
    </ShowcaseSection>

    <ShowcaseSection title="Tailles">
      <ShowcaseGrid :cols="1">
        <ShowcaseItem v-for="size in progressSizes" :key="size" :label="size">
          <UProgress :model-value="40" :size="size" />
        </ShowcaseItem>
      </ShowcaseGrid>
    </ShowcaseSection>

    <ShowcaseSection title="Indéterminé" description="Sans valeur, avec les différentes animations.">
      <ShowcaseGrid :cols="1">
        <ShowcaseItem v-for="animation in progressAnimations" :key="animation" :label="animation">
          <UProgress :animation="animation" />
        </ShowcaseItem>
      </ShowcaseGrid>
    </ShowcaseSection>

    <ShowcaseSection title="Étapes et statut">
      <ShowcaseGrid :cols="1">
        <UProgress :model-value="2" :max="['En attente', 'Téléversement', 'Encodage', 'Terminé']" />
        <UProgress :model-value="75" status />
      </ShowcaseGrid>
    </ShowcaseSection>
  </ShowcasePage>
</template>
