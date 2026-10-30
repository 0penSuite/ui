<template>
  <ShowcasePage>
    <ShowcaseSection title="Utilisation" code='<UContextMenu :items="items">
  <div>Zone</div>
</UContextMenu>'>
      <UContextMenu :items="demoDropdown">
        <ShowcasePreview>
          Clic droit dans ce cadre
        </ShowcasePreview>
      </UContextMenu>
    </ShowcaseSection>

    <ShowcaseSection title="Tailles">
      <ShowcaseGrid :cols="3">
        <UContextMenu v-for="size in sizes" :key="size" :items="demoDropdown" :size="size">
          <ShowcasePreview>
            {{ size }}
          </ShowcasePreview>
        </UContextMenu>
      </ShowcaseGrid>
    </ShowcaseSection>
  </ShowcasePage>
</template>
