<template>
  <ShowcasePage>
    <ShowcaseSection title="Utilisation" description="L'icône prend la taille et la couleur du texte qui l'entoure. Voir aussi Fondations > Icônes." code='<UIcon name="i-lucide-film" />'>
      <ShowcaseGrid>
        <UIcon name="i-lucide-film" />
        <UIcon name="i-lucide-tv" />
        <UIcon name="i-lucide-clapperboard" />
        <UIcon name="i-lucide-tags" />
      </ShowcaseGrid>
    </ShowcaseSection>

    <ShowcaseSection title="Dans les composants" description="La plupart des composants prennent une prop icon.">
      <ShowcaseGrid>
        <UButton icon="i-lucide-film" label="Button" />
        <UBadge icon="i-lucide-film" label="Badge" variant="subtle" />
        <UInput icon="i-lucide-search" placeholder="Input" />
        <UAlert icon="i-lucide-info" title="Alert" color="info" variant="subtle" />
      </ShowcaseGrid>
    </ShowcaseSection>
  </ShowcasePage>
</template>
