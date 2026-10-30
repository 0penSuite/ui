<template>
  <ShowcasePage>
    <ShowcaseSection title="Variantes" code='<UTabs :items="items" />'>
      <ShowcaseGrid :cols="2" top>
        <ShowcaseItem label="pill">
          <UTabs :items="demoTabs" />
        </ShowcaseItem>
        <ShowcaseItem label="link">
          <UTabs :items="demoTabs" variant="link" />
        </ShowcaseItem>
      </ShowcaseGrid>
    </ShowcaseSection>

    <ShowcaseSection title="Couleurs">
      <ShowcaseGrid :cols="2" top>
        <ShowcaseItem v-for="color in colors" :key="color" :label="color">
          <UTabs :items="demoTabs" :color="color" :content="false" />
          <UTabs :items="demoTabs" :color="color" variant="link" :content="false" />
        </ShowcaseItem>
      </ShowcaseGrid>
    </ShowcaseSection>

    <ShowcaseSection title="Tailles">
      <ShowcaseGrid :cols="1">
        <ShowcaseItem v-for="size in sizes" :key="size" :label="size">
          <UTabs :items="demoTabs" :size="size" :content="false" />
        </ShowcaseItem>
      </ShowcaseGrid>
    </ShowcaseSection>

    <ShowcaseSection title="Vertical">
      <UTabs :items="demoTabs" orientation="vertical" />
    </ShowcaseSection>
  </ShowcasePage>
</template>
