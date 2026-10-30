# OpenSuite UI

Charte graphique commune des projets OpenSuite (Watch, MainSite...), distribuée sous forme de **layer Nuxt** (`@opensuite/ui`), avec un **catalogue** de tous les composants.

- **La layer** (racine du projet) : CSS de la charte, composants `OpenSuite*`, layout `auth`, configuration Nuxt commune et favicon.
- **Le catalogue** (`.playground/`) : application de démonstration au format « Admin template ». Elle étend la layer et n'est jamais livrée aux projets enfants.

## Lancer le catalogue

Tout tourne dans Docker.

```bash
cp .env.example .env
make up      # http://localhost:3001
make logs    # journaux du serveur de dev
make down
```

Le port par défaut est 3001 (`PLAYGROUND_PORT`), pour tourner en même temps qu'un projet enfant sur le 3000.

## Contenu de la layer

| Élément | Fichier |
|---|---|
| Police Oswald, couleurs, palette des graphiques, barre de navigation, transitions de page | `app/assets/css/main.css` |
| Config commune : `@nuxt/ui`, CSS, `lang="fr"`, transition de page | `nuxt.config.ts` |
| Bouton d'action destructrice avec confirmation | `app/components/OpenSuite/ConfirmButton.vue` (`OpenSuiteConfirmButton`) |
| Barre de navigation flottante | `app/components/OpenSuite/Navbar.vue` (`OpenSuiteNavbar`) |
| Layout `auth` (carte centrée sur fond `bg-elevated`) | `app/layouts/auth.vue` |
| Favicon | `public/favicon.ico` |

La layer ne fournit ni `app.vue` ni `title` : ils restent propres à chaque projet.

### Variables CSS

| Variable | Rôle |
|---|---|
| `--primary`, `--success`, `--warning`, `--error`, `--info` | Couleurs de la charte, reliées à `--ui-primary`, `--ui-success`... |
| `--bg` | Fond du thème sombre (`--ui-bg` sous `.dark`). Le thème clair garde le fond blanc de Nuxt UI. |
| `--chart-1` à `--chart-5`, `--chart-muted` | Palette des graphiques, en clair et en sombre, reliée aussi à `--ui-chart-1` à 5 |

## Utiliser la layer dans un projet enfant

```bash
npm install @opensuite/ui
```

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  extends: ['@opensuite/ui'],
  app: {
    head: { title: 'Watch' }
  }
})
```

`nuxt`, `@nuxt/ui` et `tailwindcss` sont des `peerDependencies` : le projet enfant les installe lui-même, ce qui évite deux versions de Nuxt UI.

Le projet enfant n'a plus besoin de son propre `main.css` ni de `modules: ['@nuxt/ui']` : ils viennent de la layer.

### Référencer le CSS de la layer dans un composant

Pour utiliser `@apply` avec les couleurs de la charte dans un `<style scoped>`, référencer le CSS de la layer par l'alias `#open-ui` (et non `~`, qui désigne le projet enfant) :

```vue
<style scoped>
@reference "#open-ui/assets/css/main.css";

.title {
  @apply text-primary;
}
</style>
```

## Modifier la charte

Toute évolution visuelle passe par la layer : `app/assets/css/main.css`, les composants `app/components/OpenSuite/` et, si besoin, un `app/app.config.ts` pour le thème Nuxt UI. Les pages du catalogue ne changent pas : elles montrent les composants tels que la charte les rend.

## Ajouter un composant au catalogue

1. Une entrée dans `.playground/app/utils/navigation.ts` (source unique de la barre latérale et de la recherche).
2. Une page dans `.playground/app/pages/` au chemin de l'entrée, construite avec les blocs `Showcase*` :

```vue
<template>
  <ShowcasePage>
    <ShowcaseSection title="Couleurs" code='<UButton color="primary" />'>
      <ShowcaseGrid>
        <UButton v-for="color in colors" :key="color" :label="color" :color="color" />
      </ShowcaseGrid>
    </ShowcaseSection>
  </ShowcasePage>
</template>
```

| Bloc | Rôle |
|---|---|
| `ShowcasePage` | Cadre de la page : titre, description et lien vers la documentation, lus dans `navigation.ts` |
| `ShowcaseSection` | Groupe d'exemples titré, avec le code d'utilisation repliable (`code`) |
| `ShowcaseGrid` | Disposition : en ligne, ou en grille avec `cols` |
| `ShowcaseItem` | Exemple légendé (nom de la variante, de la taille) |
| `ShowcasePreview` | Cadre pour les exemples qui occupent une surface |
| `ShowcaseThemes` | Rend son contenu en clair et en sombre côte à côte |
| `ShowcaseSwatch`, `ShowcaseToken`, `ShowcaseCode` | Fondations (variables CSS, jetons Tailwind) et code |

Les listes de couleurs, tailles et variantes sont dans `.playground/app/utils/showcase.ts`, les données fictives dans `.playground/app/utils/demo.ts`.
