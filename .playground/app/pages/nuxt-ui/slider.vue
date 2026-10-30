<template>
  <ShowcasePage>
    <ShowcaseSection title="Couleurs" code='<USlider v-model="volume" :min="0" :max="100" />'>
      <ShowcaseGrid :cols="1">
        <USlider v-for="color in colors" :key="color" :color="color" :default-value="60" />
      </ShowcaseGrid>
    </ShowcaseSection>

    <ShowcaseSection title="Tailles">
      <ShowcaseGrid :cols="1">
        <ShowcaseItem v-for="size in sizes" :key="size" :label="size">
          <USlider :size="size" :default-value="40" />
        </ShowcaseItem>
      </ShowcaseGrid>
    </ShowcaseSection>

    <ShowcaseSection title="États">
      <ShowcaseGrid :cols="1">
        <ShowcaseItem label="plage">
          <USlider :default-value="[20, 70]" />
        </ShowcaseItem>
        <ShowcaseItem label="step=10, tooltip">
          <USlider :default-value="50" :step="10" tooltip />
        </ShowcaseItem>
        <ShowcaseItem label="disabled">
          <USlider :default-value="30" disabled />
        </ShowcaseItem>
      </ShowcaseGrid>
    </ShowcaseSection>

    <ShowcaseSection title="Vertical">
      <ShowcaseGrid>
        <USlider v-for="color in colors" :key="color" :color="color" orientation="vertical" :default-value="50" class="h-40" />
      </ShowcaseGrid>
    </ShowcaseSection>
  </ShowcasePage>
</template>
