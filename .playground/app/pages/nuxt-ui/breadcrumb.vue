<template>
  <ShowcasePage>
    <ShowcaseSection title="Utilisation" code='<UBreadcrumb :items="items" />'>
      <UBreadcrumb :items="demoBreadcrumb" />
    </ShowcaseSection>

    <ShowcaseSection title="Couleurs" description="Couleur de l'élément actif.">
      <ShowcaseGrid :cols="1">
        <UBreadcrumb v-for="color in colors" :key="color" :items="demoBreadcrumb" :color="color" />
      </ShowcaseGrid>
    </ShowcaseSection>

    <ShowcaseSection title="Séparateur">
      <UBreadcrumb :items="demoBreadcrumb" separator-icon="i-lucide-slash" />
    </ShowcaseSection>
  </ShowcasePage>
</template>
