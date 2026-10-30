<script setup lang="ts">
// Bouton d'action destructrice : ouvre une fenêtre de confirmation avant d'émettre `confirm`
const props = withDefaults(defineProps<{
  title: string
  description?: string
  confirmLabel?: string
  icon?: string
  label?: string
  /** Bulle au survol, affichée seulement sans libellé (bouton icône) */
  tooltip?: string
  disabled?: boolean
  /** Action appelée à la confirmation ; la fenêtre reste ouverte tant qu'elle n'est pas terminée */
  action: () => Promise<unknown>
}>(), {
  confirmLabel: 'Supprimer',
  icon: 'i-lucide-trash-2',
  tooltip: 'Supprimer',
})

const open = ref(false)
const loading = ref(false)

async function confirm() {
  loading.value = true
  try {
    await props.action()
    open.value = false
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <UTooltip :text="tooltip" :disabled="!!label">
    <UButton :icon="icon" :label="label" :disabled="disabled" color="error" variant="ghost" size="sm" :aria-label="label ?? tooltip" @click="open = true" />
  </UTooltip>

  <UModal v-model:open="open" :title="title" :description="description">
    <template #footer>
      <div class="flex w-full justify-end gap-2">
        <UButton label="Annuler" color="neutral" variant="outline" @click="open = false" />
        <UButton :label="confirmLabel" color="error" :loading="loading" @click="confirm" />
      </div>
    </template>
  </UModal>
</template>
