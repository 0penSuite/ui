<script setup lang="ts">
// Barre de navigation flottante : liens en prop, boutons supplémentaires dans le slot
export interface NavbarItem {
  label?: string
  to: string
  icon?: string
  target?: string
  /** Obligatoire pour un lien sans libellé */
  ariaLabel?: string
}

withDefaults(defineProps<{
  items?: NavbarItem[]
  colorMode?: boolean
}>(), {
  items: () => [],
  colorMode: true,
})
</script>

<template>
  <nav class="navbar mt-3 px-2 py-2">
    <UButton
      v-for="item in items"
      :key="item.to"
      :to="item.to"
      :target="item.target"
      :label="item.label"
      :icon="item.icon"
      :aria-label="item.ariaLabel"
      variant="ghost"
      color="neutral"
      class="rounded-full"
    />
    <slot />
    <UColorModeButton v-if="colorMode" />
  </nav>
</template>
