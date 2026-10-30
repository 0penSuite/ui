<script setup lang="ts">
const toast = useToast()

function show(color: typeof colors[number]) {
  toast.add({ title: `Notification ${color}`, description: 'Les modifications ont été enregistrées.', color, icon: 'i-lucide-bell' })
}

function showWithActions() {
  toast.add({
    title: 'Titre supprimé',
    description: '« Les Hauts Plateaux » a été retiré du catalogue.',
    icon: 'i-lucide-trash-2',
    color: 'error',
    actions: [{ label: 'Annuler', color: 'neutral', variant: 'outline' }],
  })
}

function showWithAvatar() {
  toast.add({ title: 'Camille Laurent', description: 'vous a ajouté à un groupe.', avatar: { src: demoUser.avatar } })
}

function showHorizontal() {
  toast.add({ title: 'Connexion perdue', orientation: 'horizontal', color: 'warning', actions: [{ label: 'Réessayer', color: 'warning', variant: 'soft' }] })
}
</script>

<template>
  <ShowcasePage>
    <ShowcaseSection title="Couleurs" description="Les notifications s'affichent en haut à droite." code="const toast = useToast()
toast.add({ title: 'Enregistré', color: 'success', icon: 'i-lucide-circle-check' })">
      <ShowcaseGrid>
        <UButton v-for="color in colors" :key="color" :label="color" :color="color" variant="outline" @click="show(color)" />
      </ShowcaseGrid>
    </ShowcaseSection>

    <ShowcaseSection title="Options">
      <ShowcaseGrid>
        <UButton label="Avec actions" color="neutral" variant="outline" @click="showWithActions" />
        <UButton label="Avec avatar" color="neutral" variant="outline" @click="showWithAvatar" />
        <UButton label="Horizontal" color="neutral" variant="outline" @click="showHorizontal" />
      </ShowcaseGrid>
    </ShowcaseSection>
  </ShowcasePage>
</template>
