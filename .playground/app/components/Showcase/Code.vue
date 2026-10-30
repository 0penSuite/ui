<script setup lang="ts">
defineProps<{
  code: string
}>()
</script>

<template>
  <UCollapsible>
    <UButton label="Code" icon="i-lucide-code" trailing-icon="i-lucide-chevron-down" color="neutral" variant="ghost" size="sm" />

    <template #content>
      <pre class="mt-2 overflow-x-auto rounded-md border border-default bg-muted p-4 text-sm"><code>{{ code.trim() }}</code></pre>
    </template>
  </UCollapsible>
</template>
