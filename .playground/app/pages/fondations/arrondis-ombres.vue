<template>
  <ShowcasePage>
    <ShowcaseSection title="Arrondis">
      <ShowcaseGrid>
        <ShowcaseToken v-for="token in radii" :key="token" :token="token" kind="radius" />
      </ShowcaseGrid>
    </ShowcaseSection>

    <ShowcaseSection title="Ombres">
      <ShowcaseGrid>
        <ShowcaseToken v-for="token in shadows" :key="token" :token="token" kind="shadow" />
      </ShowcaseGrid>
    </ShowcaseSection>
  </ShowcasePage>
</template>
