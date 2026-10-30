<template>
  <ShowcasePage>
    <ShowcaseSection title="Liens" description="Liens en prop items ; le bouton de thème est ajouté à la fin." code='<OpenSuiteNavbar :items="[
  { label: &apos;Accueil&apos;, to: &apos;/&apos; },
  { label: &apos;Parcourir&apos;, to: &apos;/browse&apos; },
]" />'>
      <ShowcasePreview>
        <OpenSuiteNavbar :items="[{ label: 'Accueil', to: '/opensuite/navbar' }, { label: 'Parcourir', to: '/' }]" />
      </ShowcasePreview>
    </ShowcaseSection>

    <ShowcaseSection title="Boutons supplémentaires" description="Dans le slot par défaut, entre les liens et le bouton de thème." code='<OpenSuiteNavbar :items="items">
  <UButton to="/search" icon="i-lucide-search" variant="ghost" color="neutral" aria-label="Rechercher" />
</OpenSuiteNavbar>'>
      <ShowcasePreview>
        <OpenSuiteNavbar :items="[{ label: 'Accueil', to: '/opensuite/navbar' }, { label: 'Parcourir', to: '/' }]">
          <UButton to="/" icon="i-lucide-search" variant="ghost" color="neutral" aria-label="Rechercher" />
          <UButton to="/layouts/auth" icon="i-lucide-user" variant="ghost" color="neutral" aria-label="Profil" />
          <UButton to="/" icon="i-lucide-shield" variant="ghost" color="neutral" aria-label="Administration" />
        </OpenSuiteNavbar>
      </ShowcasePreview>
    </ShowcaseSection>

    <ShowcaseSection title="Liens icônes et externes" description="Un lien sans libellé doit avoir un ariaLabel.">
      <ShowcasePreview>
        <OpenSuiteNavbar :items="[{ label: 'Accueil', to: '/opensuite/navbar' }, { label: 'Applications', to: '/' }, { icon: 'i-lucide-github', to: 'https://github.com/0penSuite', target: '_blank', ariaLabel: 'GitHub' }]" />
      </ShowcasePreview>
    </ShowcaseSection>

    <ShowcaseSection title="Sans bouton de thème">
      <ShowcasePreview>
        <OpenSuiteNavbar :items="[{ label: 'Accueil', to: '/opensuite/navbar' }, { label: 'Parcourir', to: '/' }]" :color-mode="false" />
      </ShowcasePreview>
    </ShowcaseSection>
  </ShowcasePage>
</template>
