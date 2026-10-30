<template>
  <ShowcasePage>
    <ShowcaseSection title="Utilisation" description="ULink gère les liens internes et externes ; il prend la couleur primaire quand il pointe sur la page courante." code='<ULink to="/register">S&apos;inscrire</ULink>'>
      <ShowcaseGrid>
        <ShowcaseItem label="interne">
          <ULink to="/">Tableau de bord</ULink>
        </ShowcaseItem>
        <ShowcaseItem label="actif">
          <ULink to="/nuxt-ui/link">Page courante</ULink>
        </ShowcaseItem>
        <ShowcaseItem label="externe">
          <ULink to="https://ui.nuxt.com" target="_blank">Nuxt UI</ULink>
        </ShowcaseItem>
        <ShowcaseItem label="disabled">
          <ULink to="/" disabled>Désactivé</ULink>
        </ShowcaseItem>
        <ShowcaseItem label="raw">
          <ULink to="/" raw>Sans style</ULink>
        </ShowcaseItem>
      </ShowcaseGrid>
    </ShowcaseSection>
  </ShowcasePage>
</template>
