<script setup lang="ts">
// Échantillon d'un jeton Tailwind de la charte (arrondi, ombre, taille ou graisse de texte)
defineProps<{
  token: string
  kind: 'radius' | 'shadow' | 'text'
  /** Texte d'exemple pour kind="text" */
  sample?: string
}>()
</script>

<template>
  <ShowcaseItem :label="token">
    <span v-if="kind === 'text'" :class="token">{{ sample ?? 'OpenSuite' }}</span>
    <span v-else :class="[token, kind === 'radius' ? 'border-2 border-primary bg-elevated' : 'bg-default']" class="block size-20" />
  </ShowcaseItem>
</template>
