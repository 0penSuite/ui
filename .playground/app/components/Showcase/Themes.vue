<script setup lang="ts">
// Rend le même contenu en thème clair et en thème sombre, quel que soit le thème courant
const themes = [
  { label: 'Clair', class: 'light' },
  { label: 'Sombre', class: 'dark' },
]
</script>

<template>
  <div class="grid grid-cols-1 gap-4 xl:grid-cols-2">
    <div v-for="theme in themes" :key="theme.class" :class="theme.class">
      <div class="flex flex-col gap-4 rounded-lg border border-default bg-default p-4 text-default">
        <span class="text-sm font-semibold text-highlighted">{{ theme.label }}</span>
        <slot />
      </div>
    </div>
  </div>
</template>
