<template>
  <ShowcasePage>
    <ShowcaseSection title="Variantes et couleurs" code='<UAlert color="error" icon="i-lucide-circle-alert" title="Identifiants incorrects" />'>
      <ShowcaseGrid v-for="variant in badgeVariants" :key="variant" :cols="3">
        <UAlert v-for="color in colors" :key="color" :color="color" :variant="variant" icon="i-lucide-info" :title="`${color} ${variant}`" description="Message d'information." />
      </ShowcaseGrid>
    </ShowcaseSection>

    <ShowcaseSection title="Options">
      <ShowcaseGrid :cols="2" top>
        <ShowcaseItem label="titre seul">
          <UAlert color="error" icon="i-lucide-circle-alert" title="Identifiants incorrects" />
        </ShowcaseItem>
        <ShowcaseItem label="avatar">
          <UAlert :avatar="{ src: demoUser.avatar }" color="neutral" variant="outline" title="Camille Laurent vous a invité" />
        </ShowcaseItem>
        <ShowcaseItem label="close">
          <UAlert color="info" variant="subtle" icon="i-lucide-info" title="Nouvelle version disponible" close />
        </ShowcaseItem>
        <ShowcaseItem label="actions">
          <UAlert
            color="warning"
            variant="subtle"
            icon="i-lucide-triangle-alert"
            title="Espace disque presque plein"
            description="Il reste 4 % d'espace libre."
            :actions="[{ label: 'Libérer', color: 'warning' }, { label: 'Plus tard', color: 'neutral', variant: 'ghost' }]"
          />
        </ShowcaseItem>
        <ShowcaseItem label="orientation=horizontal">
          <UAlert
            color="primary"
            variant="soft"
            title="Encodage terminé"
            description="Le film est disponible."
            orientation="horizontal"
            :actions="[{ label: 'Voir', color: 'primary' }]"
          />
        </ShowcaseItem>
      </ShowcaseGrid>
    </ShowcaseSection>
  </ShowcasePage>
</template>
