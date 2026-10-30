<template>
  <ShowcasePage>
    <ShowcaseSection title="Utilisation" code='<UAccordion :items="items" />'>
      <UAccordion :items="demoAccordion" />
    </ShowcaseSection>

    <ShowcaseSection title="Plusieurs sections ouvertes" description="type=&quot;multiple&quot;.">
      <UAccordion :items="demoAccordion" type="multiple" :default-value="['0', '1']" />
    </ShowcaseSection>

    <ShowcaseSection title="Icône de dépliage">
      <UAccordion :items="demoAccordion" trailing-icon="i-lucide-plus" />
    </ShowcaseSection>
  </ShowcasePage>
</template>
