<script setup lang="ts">
// Disposition des exemples : en ligne par défaut, en grille avec `cols`
const props = defineProps<{
  cols?: 1 | 2 | 3 | 4 | 6
  /** Aligne les exemples en haut plutôt qu'au centre */
  top?: boolean
}>()

const grids = {
  1: 'grid grid-cols-1',
  2: 'grid grid-cols-1 md:grid-cols-2',
  3: 'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3',
  4: 'grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4',
  6: 'grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6',
}

const classes = computed(() => [
  props.cols ? grids[props.cols] : 'flex flex-wrap',
  props.top ? 'items-start' : 'items-center',
  'gap-4',
])
</script>

<template>
  <div :class="classes">
    <slot />
  </div>
</template>
