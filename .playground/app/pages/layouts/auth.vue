<template>
  <ShowcasePage>
    <ShowcaseSection title="Aperçu" description="Formulaire de connexion de Watch, sans appel à l'API (la soumission renvoie toujours une erreur)." code="definePageMeta({ layout: 'auth' })">
      <ShowcaseGrid>
        <UButton label="Ouvrir en plein écran" to="/apercu/auth" icon="i-lucide-maximize-2" color="neutral" variant="outline" />
      </ShowcaseGrid>
      <ShowcasePreview flush>
        <NuxtLayout name="auth">
          <DemoLoginForm />
        </NuxtLayout>
      </ShowcasePreview>
    </ShowcaseSection>
  </ShowcasePage>
</template>
