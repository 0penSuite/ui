<template>
  <ShowcasePage>
    <ShowcaseSection title="Horizontal" code='<UNavigationMenu :items="items" />'>
      <ShowcaseGrid :cols="1">
        <ShowcaseItem label="pill">
          <UNavigationMenu :items="demoNavigation" />
        </ShowcaseItem>
        <ShowcaseItem label="link">
          <UNavigationMenu :items="demoNavigation" variant="link" />
        </ShowcaseItem>
        <ShowcaseItem label="highlight">
          <UNavigationMenu :items="demoNavigation" highlight />
        </ShowcaseItem>
      </ShowcaseGrid>
    </ShowcaseSection>

    <ShowcaseSection title="Couleurs" description="Couleur du lien actif.">
      <ShowcaseGrid :cols="1">
        <ShowcaseItem v-for="color in colors" :key="color" :label="color">
          <UNavigationMenu :items="demoNavigation" :color="color" highlight :highlight-color="color" />
        </ShowcaseItem>
      </ShowcaseGrid>
    </ShowcaseSection>

    <ShowcaseSection title="Vertical" description="Comme dans la barre latérale du catalogue.">
      <ShowcaseGrid :cols="3" top>
        <ShowcaseItem label="pill">
          <UNavigationMenu :items="demoNavigation" orientation="vertical" />
        </ShowcaseItem>
        <ShowcaseItem label="link">
          <UNavigationMenu :items="demoNavigation" orientation="vertical" variant="link" />
        </ShowcaseItem>
        <ShowcaseItem label="collapsed">
          <UNavigationMenu :items="demoNavigation" orientation="vertical" collapsed />
        </ShowcaseItem>
      </ShowcaseGrid>
    </ShowcaseSection>
  </ShowcasePage>
</template>
