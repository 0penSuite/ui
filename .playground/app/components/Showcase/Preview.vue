<script setup lang="ts">
// Cadre d'aperçu pour les exemples qui occupent une surface (barre de navigation, layout...)
defineProps<{
  /** Sans marge intérieure, pour les aperçus qui remplissent leur cadre */
  flush?: boolean
}>()
</script>

<template>
  <div class="overflow-hidden rounded-lg border border-default bg-default" :class="{ 'p-4': !flush }">
    <slot />
  </div>
</template>
