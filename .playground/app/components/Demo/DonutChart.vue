<script setup lang="ts">
// Graphique en anneau de démonstration, colorié avec la palette --chart-* de la charte
export interface DonutSlice {
  label: string
  value: number
  /** Part « reste » : grisée plutôt que colorée */
  muted?: boolean
}

const props = defineProps<{
  slices: DonutSlice[]
  centerLabel: string
  unit: string
}>()

const SIZE = 200
const RADIUS = 90
const INNER_RADIUS = 58
const SERIES_COUNT = 5

const total = computed(() => props.slices.reduce((sum, slice) => sum + slice.value, 0))
const hovered = ref<number | null>(null)

const point = (angle: number, radius: number) =>
  `${SIZE / 2 + radius * Math.sin(angle)} ${SIZE / 2 - radius * Math.cos(angle)}`

const arcs = computed(() => {
  let start = 0
  let colorIndex = 0
  return props.slices.map((slice) => {
    const share = total.value ? slice.value / total.value : 0
    const end = start + Math.min(share, 0.9999) * 2 * Math.PI
    const large = end - start > Math.PI ? 1 : 0
    const path = [
      `M ${point(start, RADIUS)}`,
      `A ${RADIUS} ${RADIUS} 0 ${large} 1 ${point(end, RADIUS)}`,
      `L ${point(end, INNER_RADIUS)}`,
      `A ${INNER_RADIUS} ${INNER_RADIUS} 0 ${large} 0 ${point(start, INNER_RADIUS)}`,
      'Z',
    ].join(' ')
    start = end
    const color = slice.muted ? 'var(--chart-muted)' : `var(--chart-${(colorIndex++ % SERIES_COUNT) + 1})`

    return { ...slice, path, color, percent: Math.round(share * 1000) / 10 }
  })
})

const active = computed(() => hovered.value === null ? null : arcs.value[hovered.value])
const format = (value: number) => `${value.toLocaleString('fr-FR')} ${props.unit}`
</script>

<template>
  <div class="flex flex-col items-center gap-6 sm:flex-row sm:items-start">
    <svg :viewBox="`0 0 ${SIZE} ${SIZE}`" class="size-48 shrink-0" role="img" :aria-label="centerLabel">
      <path
        v-for="(arc, index) in arcs"
        :key="arc.label"
        :d="arc.path"
        :fill="arc.color"
        stroke="var(--ui-bg)"
        stroke-width="2"
        class="transition-opacity"
        :class="{ 'opacity-40': hovered !== null && hovered !== index }"
        @mouseenter="hovered = index"
        @mouseleave="hovered = null"
      >
        <title>{{ arc.label }} : {{ format(arc.value) }} ({{ arc.percent }} %)</title>
      </path>
      <text :x="SIZE / 2" :y="SIZE / 2 - 4" text-anchor="middle" class="fill-(--ui-text-highlighted) text-lg font-bold">
        {{ format(active?.value ?? total) }}
      </text>
      <text :x="SIZE / 2" :y="SIZE / 2 + 16" text-anchor="middle" class="fill-(--ui-text-muted) text-[11px]">
        {{ active ? `${active.percent} %` : centerLabel }}
      </text>
    </svg>

    <ul class="flex w-full min-w-0 flex-col gap-1 text-sm">
      <li
        v-for="(arc, index) in arcs"
        :key="arc.label"
        class="flex items-center gap-2 rounded px-2 py-1"
        :class="{ 'bg-elevated': hovered === index }"
        @mouseenter="hovered = index"
        @mouseleave="hovered = null"
      >
        <span class="size-3 shrink-0 rounded-sm" :style="{ background: arc.color }" />
        <span class="min-w-0 flex-1 truncate">{{ arc.label }}</span>
        <span class="shrink-0 tabular-nums text-muted">{{ format(arc.value) }}</span>
        <span class="w-12 shrink-0 text-right tabular-nums text-muted">{{ arc.percent }} %</span>
      </li>
    </ul>
  </div>
</template>
