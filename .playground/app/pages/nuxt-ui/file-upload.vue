<template>
  <ShowcasePage>
    <ShowcaseSection title="Variantes" code='<UFileUpload v-model="file" label="Déposez une vidéo" accept="video/*" />'>
      <ShowcaseGrid :cols="2" top>
        <ShowcaseItem label="area">
          <UFileUpload label="Déposez une vidéo ici" description="MP4, MKV ou WebM" icon="i-lucide-film" class="w-full" />
        </ShowcaseItem>
        <ShowcaseItem label="button">
          <UFileUpload variant="button" label="Choisir" />
        </ShowcaseItem>
      </ShowcaseGrid>
    </ShowcaseSection>

    <ShowcaseSection title="Couleurs" description="Couleur du survol et du dépôt, visible avec highlight.">
      <ShowcaseGrid :cols="3">
        <ShowcaseItem v-for="color in colors" :key="color" :label="color">
          <UFileUpload :color="color" highlight label="Déposer" class="w-full" />
        </ShowcaseItem>
      </ShowcaseGrid>
    </ShowcaseSection>

    <ShowcaseSection title="Tailles">
      <ShowcaseGrid :cols="3">
        <ShowcaseItem v-for="size in sizes" :key="size" :label="size">
          <UFileUpload :size="size" label="Déposer" class="w-full" />
        </ShowcaseItem>
      </ShowcaseGrid>
    </ShowcaseSection>

    <ShowcaseSection title="Plusieurs fichiers">
      <ShowcaseGrid :cols="2" top>
        <ShowcaseItem label="layout=list">
          <UFileUpload multiple layout="list" label="Déposer des images" accept="image/*" class="w-full" />
        </ShowcaseItem>
        <ShowcaseItem label="layout=grid">
          <UFileUpload multiple layout="grid" label="Déposer des images" accept="image/*" class="w-full" />
        </ShowcaseItem>
        <ShowcaseItem label="disabled">
          <UFileUpload disabled label="Désactivé" class="w-full" />
        </ShowcaseItem>
      </ShowcaseGrid>
    </ShowcaseSection>
  </ShowcasePage>
</template>
