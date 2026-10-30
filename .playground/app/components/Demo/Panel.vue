<script setup lang="ts">
// Carte titrée du tableau de bord de démonstration
defineProps<{
  title: string
}>()
</script>

<template>
  <UCard>
    <template #header>
      <div class="flex items-center justify-between gap-2">
        <h2 class="font-semibold text-highlighted">{{ title }}</h2>
        <slot name="actions" />
      </div>
    </template>
    <slot />
  </UCard>
</template>
