<template>
  <ShowcasePage>
    <ShowcaseSection title="Couleurs" code='<UButton label="Enregistrer" color="primary" />'>
      <ShowcaseGrid>
        <UButton v-for="color in colors" :key="color" :label="color" :color="color" />
      </ShowcaseGrid>
    </ShowcaseSection>

    <ShowcaseSection title="Variantes" description="Chaque variante dans chaque couleur.">
      <ShowcaseGrid v-for="variant in buttonVariants" :key="variant">
        <UButton v-for="color in colors" :key="color" :label="variant" :color="color" :variant="variant" />
      </ShowcaseGrid>
    </ShowcaseSection>

    <ShowcaseSection title="Tailles">
      <ShowcaseGrid>
        <UButton v-for="size in sizes" :key="size" :label="size" :size="size" icon="i-lucide-plus" />
      </ShowcaseGrid>
    </ShowcaseSection>

    <ShowcaseSection title="Icônes" code='<UButton icon="i-lucide-plus" label="Ajouter" />
<UButton trailing-icon="i-lucide-arrow-right" label="Suivant" />
<UButton icon="i-lucide-pencil" aria-label="Modifier" />'>
      <ShowcaseGrid>
        <UButton icon="i-lucide-plus" label="Ajouter" />
        <UButton trailing-icon="i-lucide-arrow-right" label="Suivant" color="neutral" variant="outline" />
        <UButton icon="i-lucide-pencil" aria-label="Modifier" color="neutral" variant="ghost" />
        <UButton icon="i-lucide-search" aria-label="Rechercher" variant="soft" square />
        <UButton avatar="https://i.pravatar.cc/128?u=1" label="Avatar" color="neutral" variant="outline" />
      </ShowcaseGrid>
    </ShowcaseSection>

    <ShowcaseSection title="États">
      <ShowcaseGrid>
        <ShowcaseItem label="loading">
          <UButton label="Chargement" loading />
        </ShowcaseItem>
        <ShowcaseItem label="disabled">
          <UButton label="Désactivé" disabled />
        </ShowcaseItem>
        <ShowcaseItem label="active">
          <UButton label="Actif" color="neutral" variant="ghost" active active-color="primary" active-variant="soft" />
        </ShowcaseItem>
        <ShowcaseItem label="to (lien)">
          <UButton label="Lien" to="/" />
        </ShowcaseItem>
      </ShowcaseGrid>
    </ShowcaseSection>

    <ShowcaseSection title="Pleine largeur" code='<UButton label="Se connecter" block />'>
      <UButton label="Se connecter" block />
    </ShowcaseSection>
  </ShowcasePage>
</template>
