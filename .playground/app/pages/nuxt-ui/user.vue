<template>
  <ShowcasePage>
    <ShowcaseSection title="Utilisation" code='<UUser name="Camille Laurent" description="Administrateur" :avatar="{ src: photo }" />'>
      <ShowcaseGrid>
        <UUser :name="demoUser.name" :description="demoUser.role" :avatar="{ src: demoUser.avatar, alt: demoUser.name }" />
        <UUser name="Sans photo" description="Initiales" :avatar="{ alt: 'Sans photo' }" />
        <UUser :name="demoUser.name" :description="demoUser.email" :avatar="{ src: demoUser.avatar }" :chip="{ color: 'success', position: 'bottom-right' }" />
        <UUser :name="demoUser.name" :description="demoUser.role" :avatar="{ src: demoUser.avatar }" orientation="vertical" />
      </ShowcaseGrid>
    </ShowcaseSection>

    <ShowcaseSection title="Tailles">
      <ShowcaseGrid :cols="3">
        <ShowcaseItem v-for="size in largeSizes" :key="size" :label="size">
          <UUser :size="size" :name="demoUser.name" :description="demoUser.role" :avatar="{ src: demoUser.avatar }" />
        </ShowcaseItem>
      </ShowcaseGrid>
    </ShowcaseSection>
  </ShowcasePage>
</template>
