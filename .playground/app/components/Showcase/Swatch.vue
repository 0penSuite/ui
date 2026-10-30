<script setup lang="ts">
// Pastille d'une variable CSS : affiche la valeur calculée dans le thème où elle est rendue
const props = defineProps<{
  name: string
}>()

const el = ref<HTMLElement>()
const value = ref('')
const colorMode = useColorMode()

function read() {
  if (el.value) value.value = getComputedStyle(el.value).getPropertyValue(props.name).trim()
}

onMounted(read)
watch(() => colorMode.value, () => nextTick(read))
</script>

<template>
  <div ref="el" class="flex min-w-0 items-center gap-3">
    <span class="size-10 shrink-0 rounded-md border border-default" :style="{ background: `var(${name})` }" />
    <div class="min-w-0">
      <p class="truncate font-mono text-sm text-highlighted">{{ name }}</p>
      <p class="truncate font-mono text-xs text-muted">{{ value || '...' }}</p>
    </div>
  </div>
</template>
