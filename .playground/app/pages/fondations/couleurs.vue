<template>
  <ShowcasePage>
    <ShowcaseSection title="Charte" description="Variables définies dans app/assets/css/main.css de la layer. --bg est le fond du thème sombre.">
      <ShowcaseThemes>
        <ShowcaseGrid :cols="3">
          <ShowcaseSwatch v-for="name in themeVariables.charte" :key="name" :name="name" />
        </ShowcaseGrid>
      </ShowcaseThemes>
    </ShowcaseSection>

    <ShowcaseSection title="Couleurs des composants" description="Couleurs utilisées par la prop color des composants Nuxt UI.">
      <ShowcaseThemes>
        <ShowcaseGrid :cols="3">
          <ShowcaseSwatch v-for="name in themeVariables.couleurs" :key="name" :name="name" />
        </ShowcaseGrid>
      </ShowcaseThemes>
    </ShowcaseSection>

    <ShowcaseSection title="Textes">
      <ShowcaseThemes>
        <ShowcaseGrid :cols="3">
          <ShowcaseSwatch v-for="name in themeVariables.textes" :key="name" :name="name" />
        </ShowcaseGrid>
      </ShowcaseThemes>
    </ShowcaseSection>

    <ShowcaseSection title="Fonds">
      <ShowcaseThemes>
        <ShowcaseGrid :cols="3">
          <ShowcaseSwatch v-for="name in themeVariables.fonds" :key="name" :name="name" />
        </ShowcaseGrid>
      </ShowcaseThemes>
    </ShowcaseSection>

    <ShowcaseSection title="Bordures">
      <ShowcaseThemes>
        <ShowcaseGrid :cols="3">
          <ShowcaseSwatch v-for="name in themeVariables.bordures" :key="name" :name="name" />
        </ShowcaseGrid>
      </ShowcaseThemes>
    </ShowcaseSection>

    <ShowcaseSection title="Palette des graphiques" description="Couleurs attribuées dans l'ordre aux séries ; --chart-muted pour une part « reste ». Reliées aussi à --ui-chart-1 à 5.">
      <ShowcaseThemes>
        <ShowcaseGrid :cols="3">
          <ShowcaseSwatch v-for="name in themeVariables.graphiques" :key="name" :name="name" />
        </ShowcaseGrid>
      </ShowcaseThemes>
    </ShowcaseSection>
  </ShowcasePage>
</template>
