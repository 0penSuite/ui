<script setup lang="ts">
import * as z from 'zod'

const schema = z.object({
  title: z.string().min(2, 'Au moins 2 caractères'),
  email: z.email('Adresse email invalide'),
  genre: z.string('Choisissez un genre'),
  bio: z.string().max(200, '200 caractères au plus').optional(),
  terms: z.boolean().refine(value => value, 'Obligatoire'),
})

const state = reactive<Partial<z.output<typeof schema>>>({ title: '', email: '' })
const toast = useToast()

function onSubmit() {
  toast.add({ title: 'Formulaire valide', color: 'success', icon: 'i-lucide-circle-check' })
}
</script>

<template>
  <ShowcasePage>
    <ShowcaseSection title="Formulaire validé" description="Schéma zod ; les erreurs s'affichent sous chaque champ. Valider sans rien saisir pour les voir." code='<UForm :schema="schema" :state="state" @submit="onSubmit">
  <UFormField name="email" label="Email" required>
    <UInput v-model="state.email" />
  </UFormField>
</UForm>'>
      <UForm :schema="schema" :state="state" class="max-w-lg space-y-4" @submit="onSubmit">
        <UFormField name="title" label="Titre" required>
          <UInput v-model="state.title" class="w-full" />
        </UFormField>
        <UFormField name="email" label="Email" required>
          <UInput v-model="state.email" type="email" placeholder="vous@exemple.fr" class="w-full" />
        </UFormField>
        <UFormField name="genre" label="Genre" required>
          <USelect v-model="state.genre" :items="demoOptions" placeholder="Choisir" class="w-full" />
        </UFormField>
        <UFormField name="bio" label="Présentation" hint="Facultatif" help="Affichée sur votre profil.">
          <UTextarea v-model="state.bio" class="w-full" />
        </UFormField>
        <UFormField name="terms">
          <UCheckbox v-model="state.terms" label="J'accepte les conditions d'utilisation" />
        </UFormField>
        <UButton type="submit" label="Valider" />
      </UForm>
    </ShowcaseSection>

    <ShowcaseSection title="FormField : libellé, aide, erreur">
      <ShowcaseGrid :cols="2" top>
        <UFormField label="Libellé" description="Description sous le libellé.">
          <UInput class="w-full" />
        </UFormField>
        <UFormField label="Indice" hint="Facultatif" help="Texte d'aide sous le champ.">
          <UInput class="w-full" />
        </UFormField>
        <UFormField label="Obligatoire" required>
          <UInput class="w-full" />
        </UFormField>
        <UFormField label="En erreur" error="Ce champ est invalide.">
          <UInput class="w-full" />
        </UFormField>
      </ShowcaseGrid>
    </ShowcaseSection>

    <ShowcaseSection title="Tailles">
      <ShowcaseGrid :cols="1">
        <UFormField v-for="size in sizes" :key="size" :size="size" :label="`Taille ${size}`" help="Texte d'aide">
          <UInput class="w-full" />
        </UFormField>
      </ShowcaseGrid>
    </ShowcaseSection>

    <ShowcaseSection title="Orientation horizontale">
      <UFormField label="Nom affiché" description="Visible par les autres membres." orientation="horizontal">
        <UInput />
      </UFormField>
    </ShowcaseSection>
  </ShowcasePage>
</template>
