<template>
  <ShowcasePage>
    <ShowcaseSection title="Couleurs" code='<URadioGroup v-model="type" :items="types" />'>
      <ShowcaseGrid :cols="3" top>
        <ShowcaseItem v-for="color in colors" :key="color" :label="color">
          <URadioGroup :color="color" :items="demoRadioItems" default-value="movie" />
        </ShowcaseItem>
      </ShowcaseGrid>
    </ShowcaseSection>

    <ShowcaseSection title="Variantes">
      <ShowcaseGrid :cols="3" top>
        <ShowcaseItem v-for="variant in radioVariants" :key="variant" :label="variant">
          <URadioGroup :variant="variant" :items="demoRadioItems" default-value="series" legend="Type de titre" />
        </ShowcaseItem>
      </ShowcaseGrid>
    </ShowcaseSection>

    <ShowcaseSection title="Tailles">
      <ShowcaseGrid :cols="1">
        <ShowcaseItem v-for="size in sizes" :key="size" :label="size">
          <URadioGroup :size="size" :items="demoRadioItems" orientation="horizontal" default-value="movie" />
        </ShowcaseItem>
      </ShowcaseGrid>
    </ShowcaseSection>

    <ShowcaseSection title="États">
      <ShowcaseGrid :cols="2" top>
        <ShowcaseItem label="disabled">
          <URadioGroup :items="demoRadioItems" disabled default-value="movie" />
        </ShowcaseItem>
        <ShowcaseItem label="indicator=end">
          <URadioGroup :items="demoRadioItems" indicator="end" variant="card" default-value="movie" />
        </ShowcaseItem>
      </ShowcaseGrid>
    </ShowcaseSection>
  </ShowcasePage>
</template>
