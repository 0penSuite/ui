<script setup lang="ts">
import type { BadgeProps } from '@nuxt/ui'

defineProps<{
  label: string
  value: string
  icon: string
  trend: string
  color: BadgeProps['color']
}>()
</script>

<template>
  <UCard>
    <div class="flex items-start justify-between gap-4">
      <div class="flex flex-col gap-1">
        <span class="text-sm text-muted">{{ label }}</span>
        <span class="text-2xl font-semibold text-highlighted">{{ value }}</span>
      </div>
      <UIcon :name="icon" class="size-6 text-primary" />
    </div>
    <UBadge :label="trend" :color="color" variant="subtle" size="sm" class="mt-3" />
  </UCard>
</template>
