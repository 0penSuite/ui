<script setup lang="ts">
import { fr } from '@nuxt/ui/locale'
</script>

<template>
  <UApp :locale="fr" :toaster="{ position: 'top-right' }">
    <NuxtLayout>
      <NuxtRouteAnnouncer />
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>
