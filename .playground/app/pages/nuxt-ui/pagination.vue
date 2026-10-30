<template>
  <ShowcasePage>
    <ShowcaseSection title="Utilisation" code='<UPagination v-model:page="page" :total="120" :items-per-page="10" />'>
      <UPagination :default-page="3" :total="120" :items-per-page="10" />
    </ShowcaseSection>

    <ShowcaseSection title="Couleurs" description="Couleur de la page courante.">
      <ShowcaseGrid :cols="1">
        <UPagination v-for="color in colors" :key="color" :default-page="3" :total="120" :active-color="color" />
      </ShowcaseGrid>
    </ShowcaseSection>

    <ShowcaseSection title="Variantes">
      <ShowcaseGrid :cols="1">
        <ShowcaseItem v-for="variant in buttonVariants" :key="variant" :label="variant">
          <UPagination :default-page="3" :total="120" :variant="variant" :active-variant="variant" />
        </ShowcaseItem>
      </ShowcaseGrid>
    </ShowcaseSection>

    <ShowcaseSection title="Tailles">
      <ShowcaseGrid :cols="1">
        <ShowcaseItem v-for="size in sizes" :key="size" :label="size">
          <UPagination :default-page="3" :total="120" :size="size" />
        </ShowcaseItem>
      </ShowcaseGrid>
    </ShowcaseSection>

    <ShowcaseSection title="Options">
      <ShowcaseGrid :cols="1">
        <ShowcaseItem label="show-edges">
          <UPagination :default-page="6" :total="200" show-edges />
        </ShowcaseItem>
        <ShowcaseItem label="disabled">
          <UPagination :default-page="3" :total="120" disabled />
        </ShowcaseItem>
      </ShowcaseGrid>
    </ShowcaseSection>
  </ShowcasePage>
</template>
