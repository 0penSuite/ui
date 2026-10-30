<template>
  <ShowcasePage>
    <ShowcaseSection title="Couleurs" code='<UCheckbox v-model="checked" label="Sous-titres" />'>
      <ShowcaseGrid>
        <UCheckbox v-for="color in colors" :key="color" :color="color" :label="color" default-value />
      </ShowcaseGrid>
    </ShowcaseSection>

    <ShowcaseSection title="Tailles">
      <ShowcaseGrid>
        <UCheckbox v-for="size in sizes" :key="size" :size="size" :label="size" default-value />
      </ShowcaseGrid>
    </ShowcaseSection>

    <ShowcaseSection title="Variantes">
      <ShowcaseGrid :cols="2" top>
        <ShowcaseItem label="list">
          <UCheckbox label="Lecture automatique" description="Enchaîner l'épisode suivant." default-value />
        </ShowcaseItem>
        <ShowcaseItem label="card">
          <UCheckbox variant="card" label="Lecture automatique" description="Enchaîner l'épisode suivant." default-value />
        </ShowcaseItem>
      </ShowcaseGrid>
    </ShowcaseSection>

    <ShowcaseSection title="États">
      <ShowcaseGrid>
        <UCheckbox label="Non cochée" />
        <UCheckbox label="Indéterminée" default-value="indeterminate" />
        <UCheckbox label="Obligatoire" required />
        <UCheckbox label="Désactivée" disabled default-value />
        <UCheckbox label="Indicateur à droite" indicator="end" />
      </ShowcaseGrid>
    </ShowcaseSection>

    <ShowcaseSection title="Groupe" code='<UCheckboxGroup v-model="genres" :items="genres" />'>
      <ShowcaseGrid :cols="2" top>
        <UCheckboxGroup legend="Genres" :items="demoOptions.slice(0, 4)" :default-value="[demoOptions[0]]" />
        <UCheckboxGroup legend="Genres" :items="demoOptions.slice(0, 3)" variant="card" orientation="horizontal" />
      </ShowcaseGrid>
    </ShowcaseSection>
  </ShowcasePage>
</template>
