<script setup lang="ts">
import type { TableColumn } from '@nuxt/ui'

const UBadge = resolveComponent('UBadge')
const UUser = resolveComponent('UUser')

const columns: TableColumn<DemoUser>[] = [
  { accessorKey: 'name', header: 'Utilisateur', cell: ({ row }) => h(UUser, { name: row.original.name, description: row.original.email, avatar: { src: row.original.avatar, alt: row.original.name }, size: 'sm' }) },
  { accessorKey: 'role', header: 'Rôle' },
  { accessorKey: 'status', header: 'Statut', cell: ({ row }) => h(UBadge, { label: row.original.status, color: demoStatusColors[row.original.status], variant: 'subtle' }) },
]
</script>

<template>
  <ShowcasePage>
    <ShowcaseGrid :cols="4">
      <DemoStatCard v-for="stat in demoStats" :key="stat.label" v-bind="stat" />
    </ShowcaseGrid>

    <ShowcaseGrid :cols="2" top>
      <DemoPanel title="Stockage par catégorie">
        <DemoDonutChart :slices="demoStorage" center-label="Espace total" unit="Go" />
      </DemoPanel>

      <DemoPanel title="Activité récente">
        <UTimeline :items="demoActivity" :default-value="0" size="sm" />
      </DemoPanel>
    </ShowcaseGrid>

    <DemoPanel title="Derniers inscrits">
      <template #actions>
        <UButton label="Voir tout" to="/nuxt-ui/table" color="neutral" variant="outline" size="sm" trailing-icon="i-lucide-arrow-right" />
      </template>
      <UTable :data="demoUsers" :columns="columns" />
    </DemoPanel>
  </ShowcasePage>
</template>
