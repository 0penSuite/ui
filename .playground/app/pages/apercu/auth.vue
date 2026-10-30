<script setup lang="ts">
definePageMeta({ layout: 'auth' })
</script>

<template>
  <div class="flex w-full flex-col items-center gap-4">
    <DemoLoginForm />
    <UButton label="Retour au catalogue" to="/layouts/auth" icon="i-lucide-arrow-left" color="neutral" variant="ghost" />
  </div>
</template>
