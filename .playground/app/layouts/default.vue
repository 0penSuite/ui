<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const route = useRoute()

const toMenuItem = (link: ShowcaseLink): NavigationMenuItem => ({ label: link.label, icon: link.icon, to: link.to, exact: true })

const menu = computed<NavigationMenuItem[][]>(() => navigation.map(section => [
  ...(section.label ? [{ label: section.label, type: 'label' as const }] : []),
  ...section.items.map(item => isCategory(item)
    ? {
        label: item.label,
        icon: item.icon,
        defaultOpen: item.children.some(child => child.to === route.path),
        children: item.children.map(toMenuItem),
      }
    : toMenuItem(item)),
]))

// Repli de la barre latérale en glissant
const sidebarUi = {
  root: 'overflow-hidden transition-[width] duration-200 ease-out motion-reduce:transition-none',
  footer: 'border-t border-default',
}

// Sous-menus de la barre repliée : glissent depuis la gauche (seulement repliée, pour garder l'accordéon dépliée)
const collapsedMenuUi = {
  content: 'data-[state=open]:animate-[slide-in-from-left-and-fade_150ms_var(--ease-out)] data-[state=closed]:animate-[slide-out-to-left-and-fade_150ms_var(--ease-out)]',
}

const toSearchItem =(link: ShowcaseLink) => ({ label: link.label, icon: link.icon, to: link.to, suffix: link.description })

const searchGroups = navigation.flatMap(section => {
  const direct = section.items.filter(item => !isCategory(item)) as ShowcaseLink[]
  const categories = section.items.filter(isCategory)
  return [
    ...(direct.length ? [{ id: section.label ?? 'accueil', label: section.label ?? 'Accueil', items: direct.map(toSearchItem) }] : []),
    ...categories.map(category => ({
      id: category.label,
      label: `${section.label} · ${category.label}`,
      items: category.children.map(toSearchItem),
    })),
  ]
})
</script>

<template>
  <UDashboardGroup>
    <UDashboardSidebar collapsible :ui="sidebarUi">
      <template #header="{ collapsed }">
        <NuxtLink to="/" class="flex items-center gap-2">
          <UIcon name="i-lucide-swatch-book" class="size-5 shrink-0 text-primary" />
          <span v-if="!collapsed" class="text-lg font-bold">OpenSuite <span class="text-primary">UI</span></span>
        </NuxtLink>
      </template>

      <template #default="{ collapsed }">
        <UDashboardSearchButton :collapsed="collapsed" />
        <UNavigationMenu
          :collapsed="collapsed"
          :items="menu"
          orientation="vertical"
          popover
          tooltip
          :ui="collapsed ? collapsedMenuUi : undefined"
        />
      </template>

      <template #footer="{ collapsed }">
        <div class="flex w-full items-center justify-between gap-2">
          <span v-if="!collapsed" class="text-sm text-muted">Thème</span>
          <UColorModeButton />
        </div>
      </template>
    </UDashboardSidebar>

    <UDashboardSearch :groups="searchGroups" placeholder="Rechercher un composant..." />

    <slot />
  </UDashboardGroup>
</template>
