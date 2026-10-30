<template>
  <ShowcasePage>
    <ShowcaseSection title="Lucide" description="Toutes les icônes Lucide sont disponibles hors ligne via @iconify-json/lucide ; voici les plus utilisées." code='<UIcon name="i-lucide-film" />'>
      <ShowcaseGrid :cols="6">
        <ShowcaseItem v-for="icon in demoIcons" :key="icon" :label="icon.replace('i-lucide-', '')">
          <UIcon :name="icon" />
        </ShowcaseItem>
      </ShowcaseGrid>
    </ShowcaseSection>
  </ShowcasePage>
</template>
