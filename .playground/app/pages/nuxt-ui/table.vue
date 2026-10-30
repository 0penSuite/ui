<script setup lang="ts">
import type { TableColumn } from '@nuxt/ui'

const UBadge = resolveComponent('UBadge')
const UUser = resolveComponent('UUser')
const UProgress = resolveComponent('UProgress')

const columns: TableColumn<DemoUser>[] = [
  { accessorKey: 'name', header: 'Utilisateur', cell: ({ row }) => h(UUser, { name: row.original.name, description: row.original.email, avatar: { src: row.original.avatar, alt: row.original.name }, size: 'sm' }) },
  { accessorKey: 'role', header: 'Rôle' },
  { accessorKey: 'status', header: 'Statut', cell: ({ row }) => h(UBadge, { label: row.original.status, color: demoStatusColors[row.original.status], variant: 'subtle' }) },
  { accessorKey: 'storage', header: 'Stockage', cell: ({ row }) => h(UProgress, { modelValue: row.original.storage, size: 'sm' }) },
]
</script>

<template>
  <ShowcasePage>
    <ShowcaseSection title="Utilisation" description="Colonnes définies en TypeScript, cellules rendues avec d'autres composants." code='<UTable :data="users" :columns="columns" />'>
      <UTable :data="demoUsers" :columns="columns" />
    </ShowcaseSection>

    <ShowcaseSection title="Colonnes automatiques" description="Sans columns, une colonne par propriété.">
      <UTable :data="demoUsers.slice(0, 3).map(({ name, email, role }) => ({ name, email, role }))" />
    </ShowcaseSection>

    <ShowcaseSection title="Chargement">
      <UTable :data="[]" :columns="columns" loading />
    </ShowcaseSection>

    <ShowcaseSection title="Vide">
      <UTable :data="[]" :columns="columns" empty="Aucun utilisateur" />
    </ShowcaseSection>

    <ShowcaseSection title="En-tête fixe" description="sticky, dans un conteneur à hauteur limitée.">
      <UTable :data="[...demoUsers, ...demoUsers]" :columns="columns" sticky class="max-h-72" />
    </ShowcaseSection>
  </ShowcasePage>
</template>
