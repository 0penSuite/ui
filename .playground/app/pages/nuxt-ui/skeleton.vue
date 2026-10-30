<template>
  <ShowcasePage>
    <ShowcaseSection title="Utilisation" description="Les dimensions se donnent par classes ; l'apparence vient de la charte." code='<USkeleton class="h-4 w-48" />'>
      <ShowcaseGrid>
        <USkeleton class="size-12" />
        <div class="grid gap-2">
          <USkeleton class="h-4 w-60" />
          <USkeleton class="h-4 w-48" />
        </div>
      </ShowcaseGrid>
    </ShowcaseSection>

    <ShowcaseSection title="Carte en chargement">
      <ShowcaseGrid :cols="3">
        <UCard v-for="index in 3" :key="index">
          <div class="grid gap-3">
            <USkeleton class="aspect-video w-full" />
            <USkeleton class="h-4 w-3/4" />
            <USkeleton class="h-4 w-1/2" />
          </div>
        </UCard>
      </ShowcaseGrid>
    </ShowcaseSection>
  </ShowcasePage>
</template>
