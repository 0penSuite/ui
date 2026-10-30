<template>
  <ShowcasePage>
    <ShowcaseSection title="Couleurs" code='<UStepper v-model="step" :items="steps" />'>
      <ShowcaseGrid :cols="1">
        <ShowcaseItem v-for="color in colors" :key="color" :label="color">
          <UStepper :items="demoSteps" :color="color" :default-value="1" class="w-full" />
        </ShowcaseItem>
      </ShowcaseGrid>
    </ShowcaseSection>

    <ShowcaseSection title="Tailles">
      <ShowcaseGrid :cols="1">
        <ShowcaseItem v-for="size in sizes" :key="size" :label="size">
          <UStepper :items="demoSteps" :size="size" :default-value="1" class="w-full" />
        </ShowcaseItem>
      </ShowcaseGrid>
    </ShowcaseSection>

    <ShowcaseSection title="Vertical et désactivé">
      <ShowcaseGrid :cols="2" top>
        <UStepper :items="demoSteps" orientation="vertical" :default-value="1" />
        <UStepper :items="demoSteps" disabled :default-value="0" class="w-full" />
      </ShowcaseGrid>
    </ShowcaseSection>
  </ShowcasePage>
</template>
