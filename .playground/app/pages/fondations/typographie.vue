<template>
  <ShowcasePage>
    <ShowcaseSection title="Tailles" code='<p class="text-xl">OpenSuite</p>'>
      <ShowcaseGrid :cols="1">
        <ShowcaseToken v-for="token in fontSizes" :key="token" :token="token" kind="text" sample="Une suite libre pour regarder, partager et créer" />
      </ShowcaseGrid>
    </ShowcaseSection>

    <ShowcaseSection title="Graisses" description="Oswald est chargée de 200 à 700.">
      <ShowcaseGrid :cols="3">
        <ShowcaseToken v-for="token in fontWeights" :key="token" :token="token" kind="text" />
      </ShowcaseGrid>
    </ShowcaseSection>

    <ShowcaseSection title="Couleurs de texte">
      <ShowcaseGrid :cols="3">
        <ShowcaseToken v-for="token in textColors" :key="token" :token="token" kind="text" />
      </ShowcaseGrid>
    </ShowcaseSection>
  </ShowcasePage>
</template>
