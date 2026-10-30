<template>
  <ShowcasePage>
    <ShowcaseSection title="Couleurs" description="Les étapes jusqu'à default-value sont colorées." code='<UTimeline :items="items" :default-value="1" />'>
      <ShowcaseGrid :cols="3" top>
        <ShowcaseItem v-for="color in colors" :key="color" :label="color">
          <UTimeline :items="demoActivity" :color="color" :default-value="1" />
        </ShowcaseItem>
      </ShowcaseGrid>
    </ShowcaseSection>

    <ShowcaseSection title="Tailles">
      <ShowcaseGrid :cols="3" top>
        <ShowcaseItem v-for="size in sizes" :key="size" :label="size">
          <UTimeline :items="demoActivity" :size="size" :default-value="1" />
        </ShowcaseItem>
      </ShowcaseGrid>
    </ShowcaseSection>

    <ShowcaseSection title="Horizontal et inversé">
      <ShowcaseGrid :cols="1">
        <UTimeline :items="demoActivity" orientation="horizontal" :default-value="2" class="w-full" />
        <UTimeline :items="demoActivity" orientation="horizontal" reverse :default-value="2" class="w-full" />
      </ShowcaseGrid>
    </ShowcaseSection>
  </ShowcasePage>
</template>
