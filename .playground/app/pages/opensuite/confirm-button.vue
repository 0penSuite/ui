<script setup lang="ts">
const toast = useToast()

async function remove() {
  await new Promise(resolve => setTimeout(resolve, 1000))
  toast.add({ title: 'Supprimé', color: 'success', icon: 'i-lucide-circle-check' })
}

async function fail() {
  await new Promise((_, reject) => setTimeout(() => reject(new Error('Échec')), 1000))
}
</script>

<template>
  <ShowcasePage>
    <ShowcaseSection title="Bouton icône" description="Sans libellé, l'infobulle affiche tooltip (« Supprimer » par défaut)." code='<OpenSuiteConfirmButton
  title="Supprimer ce titre ?"
  description="Cette action est définitive."
  :action="remove"
/>'>
      <ShowcaseGrid>
        <ShowcaseItem label="défaut">
          <OpenSuiteConfirmButton title="Supprimer ce titre ?" description="Cette action est définitive." :action="remove" />
        </ShowcaseItem>
        <ShowcaseItem label="icon + tooltip">
          <OpenSuiteConfirmButton title="Suspendre ce compte ?" icon="i-lucide-user-x" tooltip="Suspendre" confirm-label="Suspendre" :action="remove" />
        </ShowcaseItem>
      </ShowcaseGrid>
    </ShowcaseSection>

    <ShowcaseSection title="Avec libellé">
      <ShowcaseGrid>
        <OpenSuiteConfirmButton label="Supprimer le compte" title="Supprimer votre compte ?" description="Vos profils et votre historique seront effacés." confirm-label="Supprimer définitivement" :action="remove" />
      </ShowcaseGrid>
    </ShowcaseSection>

    <ShowcaseSection title="États">
      <ShowcaseGrid>
        <ShowcaseItem label="disabled">
          <OpenSuiteConfirmButton title="Supprimer ?" disabled :action="remove" />
        </ShowcaseItem>
        <ShowcaseItem label="action en échec">
          <OpenSuiteConfirmButton label="Échoue" title="Cette action va échouer" description="La fenêtre reste ouverte si l'action lève une erreur." :action="fail" />
        </ShowcaseItem>
      </ShowcaseGrid>
    </ShowcaseSection>
  </ShowcasePage>
</template>
