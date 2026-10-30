<script setup lang="ts">
// Formulaire de connexion de Watch (pages/login.vue), sans l'appel à l'API
import * as z from 'zod'

const schema = z.object({
  email: z.email('Adresse email invalide'),
  password: z.string().min(1, 'Le mot de passe est obligatoire'),
})

const state = reactive({ email: '', password: '' })
const error = ref<string | null>(null)
const loading = ref(false)

async function onSubmit() {
  error.value = null
  loading.value = true
  await new Promise(resolve => setTimeout(resolve, 800))
  loading.value = false
  error.value = 'Identifiants incorrects'
}
</script>

<template>
  <UCard class="w-full max-w-sm">
    <template #header>
      <div class="text-center">
        <h1 class="text-xl font-semibold text-highlighted">Bon retour parmi nous</h1>
        <p class="mt-1 text-sm text-muted">Connectez-vous à votre compte</p>
      </div>
    </template>

    <UForm :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">
      <UAlert v-if="error" color="error" icon="i-lucide-circle-alert" :title="error" />

      <UFormField name="email" label="Email" required>
        <UInput v-model="state.email" type="email" placeholder="vous@exemple.fr" class="w-full" />
      </UFormField>

      <UFormField name="password" label="Mot de passe" required>
        <UInput v-model="state.password" type="password" placeholder="Votre mot de passe" class="w-full" />
      </UFormField>

      <UButton type="submit" label="Se connecter" block :loading="loading" />
    </UForm>

    <template #footer>
      <p class="text-center text-sm text-muted">
        Pas encore de compte ?
        <ULink to="/layouts/auth" class="text-primary font-medium">S'inscrire</ULink>
      </p>
    </template>
  </UCard>
</template>
