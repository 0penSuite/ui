<script setup lang="ts">
// Cadre de chaque page : titre, description et lien vers la documentation viennent de utils/navigation.ts
const route = useRoute()
const link = computed(() => findShowcaseLink(route.path))
</script>

<template>
  <UDashboardPanel>
    <template #header>
      <UDashboardNavbar :title="link?.label">
        <template #leading>
          <UDashboardSidebarCollapse />
        </template>

        <template #right>
          <UButton
            v-if="link?.docs"
            :to="link.docs"
            target="_blank"
            label="Documentation"
            icon="i-lucide-book-open"
            trailing-icon="i-lucide-external-link"
            color="neutral"
            variant="ghost"
          />
          <UDashboardSearchButton :collapsed="true" />
        </template>
      </UDashboardNavbar>
    </template>

    <template #body>
      <div class="flex flex-col gap-10">
        <p v-if="link?.description" class="text-muted">{{ link.description }}</p>
        <slot />
      </div>
    </template>
  </UDashboardPanel>
</template>
