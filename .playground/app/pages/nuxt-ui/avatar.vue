<template>
  <ShowcasePage>
    <ShowcaseSection title="Contenu" description="Image, initiales tirées de alt quand l'image manque, ou icône." code='<UAvatar src="/photo.jpg" alt="Camille Laurent" />'>
      <ShowcaseGrid>
        <ShowcaseItem label="src">
          <UAvatar :src="demoUser.avatar" :alt="demoUser.name" />
        </ShowcaseItem>
        <ShowcaseItem label="alt">
          <UAvatar alt="Camille Laurent" />
        </ShowcaseItem>
        <ShowcaseItem label="icon">
          <UAvatar icon="i-lucide-user" />
        </ShowcaseItem>
        <ShowcaseItem label="text">
          <UAvatar text="+3" />
        </ShowcaseItem>
      </ShowcaseGrid>
    </ShowcaseSection>

    <ShowcaseSection title="Tailles">
      <ShowcaseGrid>
        <ShowcaseItem v-for="size in largeSizes" :key="size" :label="size">
          <UAvatar :size="size" alt="Hugo Martin" />
        </ShowcaseItem>
      </ShowcaseGrid>
    </ShowcaseSection>

    <ShowcaseSection title="Pastille" description="Avec la prop chip.">
      <ShowcaseGrid>
        <UAvatar v-for="color in colors" :key="color" :src="demoUser.avatar" alt="Hugo Martin" :chip="{ color }" />
      </ShowcaseGrid>
    </ShowcaseSection>

    <ShowcaseSection title="Groupe" code='<UAvatarGroup :max="3">...</UAvatarGroup>'>
      <ShowcaseGrid>
        <UAvatarGroup v-for="size in sizes" :key="size" :size="size" :max="3">
          <UAvatar v-for="user in demoUsers" :key="user.id" :src="user.avatar" :alt="user.name" />
        </UAvatarGroup>
      </ShowcaseGrid>
    </ShowcaseSection>
  </ShowcasePage>
</template>
