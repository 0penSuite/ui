<template>
  <ShowcasePage>
    <ShowcaseSection title="Variantes" code='<UInput v-model="value" placeholder="Rechercher..." icon="i-lucide-search" />'>
      <ShowcaseGrid :cols="3">
        <ShowcaseItem v-for="variant in fieldVariants" :key="variant" :label="variant">
          <UInput placeholder="Rechercher..." icon="i-lucide-search" :variant="variant" />
        </ShowcaseItem>
      </ShowcaseGrid>
    </ShowcaseSection>

    <ShowcaseSection title="Couleurs" description="Couleur de l'anneau de focus, visible avec highlight.">
      <ShowcaseGrid :cols="3">
        <ShowcaseItem v-for="color in colors" :key="color" :label="color">
          <UInput placeholder="Rechercher..." icon="i-lucide-search" :color="color" highlight />
        </ShowcaseItem>
      </ShowcaseGrid>
    </ShowcaseSection>

    <ShowcaseSection title="Tailles">
      <ShowcaseGrid :cols="3">
        <ShowcaseItem v-for="size in sizes" :key="size" :label="size">
          <UInput placeholder="Rechercher..." icon="i-lucide-search" :size="size" />
        </ShowcaseItem>
      </ShowcaseGrid>
    </ShowcaseSection>

    <ShowcaseSection title="États">
      <ShowcaseGrid :cols="3">
        <ShowcaseItem label="loading">
          <UInput placeholder="Chargement" loading />
        </ShowcaseItem>
        <ShowcaseItem label="disabled">
          <UInput placeholder="Désactivé" disabled />
        </ShowcaseItem>
        <ShowcaseItem label="trailing-icon">
          <UInput placeholder="vous@exemple.fr" trailing-icon="i-lucide-at-sign" />
        </ShowcaseItem>
        <ShowcaseItem label="type=password">
          <UInput type="password" model-value="motdepasse" />
        </ShowcaseItem>
        <ShowcaseItem label="avatar">
          <UInput :avatar="{ src: demoUser.avatar }" placeholder="Utilisateur" />
        </ShowcaseItem>
      </ShowcaseGrid>
    </ShowcaseSection>
  </ShowcasePage>
</template>
