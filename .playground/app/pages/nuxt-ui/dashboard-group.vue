<template>
  <ShowcasePage>
    <ShowcaseSection title="Cadre" description="Ce catalogue est lui-même construit avec UDashboardGroup, UDashboardSidebar, UDashboardPanel, UDashboardNavbar et UDashboardSearch : replier la barre latérale ou ouvrir la recherche pour les voir à l'œuvre.">
      <ShowcaseGrid>
        <UDashboardSearchButton />
        <UDashboardSearchButton collapsed />
        <UDashboardSidebarCollapse />
      </ShowcaseGrid>
    </ShowcaseSection>

    <ShowcaseSection title="DashboardNavbar" code='<UDashboardNavbar title="Utilisateurs">
  <template #right><UButton label="Nouveau" /></template>
</UDashboardNavbar>'>
      <ShowcasePreview>
        <UDashboardNavbar title="Utilisateurs" icon="i-lucide-users">
          <template #trailing>
            <UBadge :label="demoUsers.length" variant="subtle" />
          </template>
          <template #right>
            <UButton label="Nouvel utilisateur" icon="i-lucide-plus" />
          </template>
        </UDashboardNavbar>
      </ShowcasePreview>
    </ShowcaseSection>

    <ShowcaseSection title="DashboardToolbar" description="Barre de filtres sous la navbar." code='<UDashboardToolbar>
  <template #left>...</template>
  <template #right>...</template>
</UDashboardToolbar>'>
      <ShowcasePreview>
        <UDashboardToolbar>
          <template #left>
            <UInput icon="i-lucide-search" placeholder="Rechercher..." />
            <USelect :items="demoOptions" placeholder="Genre" />
          </template>
          <template #right>
            <UButton label="Exporter" icon="i-lucide-download" color="neutral" variant="outline" />
          </template>
        </UDashboardToolbar>
      </ShowcasePreview>
    </ShowcaseSection>
  </ShowcasePage>
</template>
