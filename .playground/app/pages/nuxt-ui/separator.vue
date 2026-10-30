<template>
  <ShowcasePage>
    <ShowcaseSection title="Contenu" code='<USeparator label="ou" />'>
      <ShowcaseGrid :cols="1">
        <USeparator />
        <USeparator label="ou" />
        <USeparator icon="i-lucide-swatch-book" />
        <USeparator :avatar="{ src: demoUser.avatar }" />
      </ShowcaseGrid>
    </ShowcaseSection>

    <ShowcaseSection title="Couleurs">
      <ShowcaseGrid :cols="1">
        <USeparator v-for="color in colors" :key="color" :color="color" :label="color" />
      </ShowcaseGrid>
    </ShowcaseSection>

    <ShowcaseSection title="Types et tailles">
      <ShowcaseGrid :cols="1">
        <USeparator v-for="type in separatorTypes" :key="type" :type="type" :label="type" />
        <USeparator v-for="size in sizes" :key="size" :size="size" :label="size" />
      </ShowcaseGrid>
    </ShowcaseSection>

    <ShowcaseSection title="Positions du libellé">
      <ShowcaseGrid :cols="1">
        <USeparator v-for="position in separatorPositions" :key="position" :position="position" :label="position" />
      </ShowcaseGrid>
    </ShowcaseSection>

    <ShowcaseSection title="Vertical">
      <ShowcaseGrid>
        <span>Films</span>
        <USeparator orientation="vertical" class="h-6" />
        <span>Séries</span>
        <USeparator orientation="vertical" class="h-6" />
        <span>Documentaires</span>
      </ShowcaseGrid>
    </ShowcaseSection>
  </ShowcasePage>
</template>
