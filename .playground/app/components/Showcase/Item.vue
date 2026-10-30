<script setup lang="ts">
// Un exemple légendé (nom de la variante, de la taille...)
defineProps<{
  label: string
}>()
</script>

<template>
  <div class="flex min-w-0 flex-col items-start gap-2">
    <slot />
    <span class="font-mono text-xs text-muted">{{ label }}</span>
  </div>
</template>
