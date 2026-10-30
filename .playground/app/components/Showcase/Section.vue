<script setup lang="ts">
// Groupe d'exemples : « Couleurs », « Variantes », « Tailles »...
defineProps<{
  title: string
  description?: string
  /** Code d'utilisation, affiché dans un bloc repliable */
  code?: string
}>()
</script>

<template>
  <section class="flex flex-col gap-4">
    <div>
      <h2 class="text-lg font-semibold text-highlighted">{{ title }}</h2>
      <p v-if="description" class="text-sm text-muted">{{ description }}</p>
    </div>
    <slot />
    <ShowcaseCode v-if="code" :code="code" />
  </section>
</template>
