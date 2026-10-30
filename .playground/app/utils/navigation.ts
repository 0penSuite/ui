// Source unique de la barre latérale et de la recherche : ajouter un composant = une entrée ici + une page
export interface ShowcaseLink {
  label: string
  to: string
  icon?: string
  description: string
  /** Lien vers la documentation Nuxt UI */
  docs?: string
}

export interface ShowcaseCategory {
  label: string
  icon: string
  children: ShowcaseLink[]
}

export interface ShowcaseSection {
  label?: string
  items: (ShowcaseLink | ShowcaseCategory)[]
}

const nuxtUi = (slug: string, label: string, description: string): ShowcaseLink => ({
  label,
  to: `/nuxt-ui/${slug}`,
  description,
  docs: `https://ui.nuxt.com/docs/components/${slug}`,
})

export const navigation: ShowcaseSection[] = [
  {
    items: [
      { label: 'Tableau de bord', to: '/', icon: 'i-lucide-layout-dashboard', description: 'Vue d\'ensemble de la charte sur un écran d\'administration type.' },
    ],
  },
  {
    label: 'Fondations',
    items: [
      { label: 'Couleurs', to: '/fondations/couleurs', icon: 'i-lucide-palette', description: 'Couleurs de la charte, variables Nuxt UI et palette des graphiques, en clair et en sombre.' },
      { label: 'Typographie', to: '/fondations/typographie', icon: 'i-lucide-type', description: 'Police Oswald : tailles et graisses.' },
      { label: 'Icônes', to: '/fondations/icones', icon: 'i-lucide-shapes', description: 'Jeu d\'icônes Lucide, utilisé par tous les projets.' },
      { label: 'Arrondis et ombres', to: '/fondations/arrondis-ombres', icon: 'i-lucide-square-dashed', description: 'Échelle des arrondis (dérivée de --ui-radius) et des ombres.' },
    ],
  },
  {
    label: 'Nuxt UI',
    items: [
      {
        label: 'Éléments',
        icon: 'i-lucide-box',
        children: [
          nuxtUi('button', 'Button', 'Bouton d\'action ou de lien.'),
          nuxtUi('badge', 'Badge', 'Étiquette courte pour un statut ou une catégorie.'),
          nuxtUi('avatar', 'Avatar', 'Image, initiales ou icône représentant une personne.'),
          nuxtUi('icon', 'Icon', 'Icône Iconify.'),
          nuxtUi('chip', 'Chip', 'Pastille d\'indication posée sur un autre élément.'),
          nuxtUi('kbd', 'Kbd', 'Touche ou raccourci clavier.'),
          nuxtUi('separator', 'Separator', 'Séparateur horizontal ou vertical.'),
          nuxtUi('skeleton', 'Skeleton', 'Espace réservé pendant un chargement.'),
          nuxtUi('progress', 'Progress', 'Barre de progression.'),
          nuxtUi('color-mode-button', 'ColorModeButton', 'Bascule entre le thème clair et le thème sombre.'),
        ],
      },
      {
        label: 'Formulaires',
        icon: 'i-lucide-text-cursor-input',
        children: [
          nuxtUi('form', 'Form et FormField', 'Formulaire validé par un schéma, champs avec libellé, aide et erreur.'),
          nuxtUi('input', 'Input', 'Champ de saisie sur une ligne.'),
          nuxtUi('textarea', 'Textarea', 'Champ de saisie sur plusieurs lignes.'),
          nuxtUi('select', 'Select', 'Liste déroulante simple.'),
          nuxtUi('select-menu', 'SelectMenu', 'Liste déroulante avec recherche.'),
          nuxtUi('input-menu', 'InputMenu', 'Champ de saisie avec suggestions.'),
          nuxtUi('checkbox', 'Checkbox', 'Case à cocher.'),
          nuxtUi('radio-group', 'RadioGroup', 'Choix unique parmi plusieurs options.'),
          nuxtUi('switch', 'Switch', 'Interrupteur activé / désactivé.'),
          nuxtUi('slider', 'Slider', 'Curseur de valeur.'),
          nuxtUi('pin-input', 'PinInput', 'Saisie d\'un code caractère par caractère.'),
          nuxtUi('input-number', 'InputNumber', 'Saisie d\'un nombre avec boutons.'),
          nuxtUi('file-upload', 'FileUpload', 'Dépôt ou sélection de fichiers.'),
        ],
      },
      {
        label: 'Navigation',
        icon: 'i-lucide-compass',
        children: [
          nuxtUi('navigation-menu', 'NavigationMenu', 'Menu de navigation horizontal ou vertical.'),
          nuxtUi('breadcrumb', 'Breadcrumb', 'Fil d\'Ariane.'),
          nuxtUi('tabs', 'Tabs', 'Onglets.'),
          nuxtUi('pagination', 'Pagination', 'Navigation entre pages de résultats.'),
          nuxtUi('link', 'Link', 'Lien interne ou externe.'),
          nuxtUi('stepper', 'Stepper', 'Étapes d\'un parcours.'),
        ],
      },
      {
        label: 'Données',
        icon: 'i-lucide-table',
        children: [
          nuxtUi('table', 'Table', 'Tableau de données.'),
          nuxtUi('accordion', 'Accordion', 'Sections repliables.'),
          nuxtUi('card', 'Card', 'Carte avec en-tête, contenu et pied.'),
          nuxtUi('user', 'User', 'Avatar accompagné d\'un nom et d\'une description.'),
          nuxtUi('timeline', 'Timeline', 'Suite d\'événements datés.'),
        ],
      },
      {
        label: 'Retours',
        icon: 'i-lucide-message-square-warning',
        children: [
          nuxtUi('alert', 'Alert', 'Message d\'information mis en avant.'),
          nuxtUi('toast', 'Toast', 'Notification temporaire.'),
          nuxtUi('tooltip', 'Tooltip', 'Bulle d\'aide au survol.'),
          nuxtUi('empty', 'Empty', 'État vide.'),
        ],
      },
      {
        label: 'Superpositions',
        icon: 'i-lucide-layers',
        children: [
          nuxtUi('modal', 'Modal', 'Fenêtre modale.'),
          nuxtUi('slideover', 'Slideover', 'Panneau latéral.'),
          nuxtUi('drawer', 'Drawer', 'Tiroir glissant.'),
          nuxtUi('popover', 'Popover', 'Contenu flottant ancré à un élément.'),
          nuxtUi('dropdown-menu', 'DropdownMenu', 'Menu déroulant d\'actions.'),
          nuxtUi('context-menu', 'ContextMenu', 'Menu ouvert au clic droit.'),
        ],
      },
      {
        label: 'Mise en page',
        icon: 'i-lucide-layout-template',
        children: [
          nuxtUi('container', 'Container', 'Conteneur centré à largeur maximale.'),
          nuxtUi('page-card', 'Page', 'Blocs de page : en-tête, grille et cartes.'),
          nuxtUi('dashboard-group', 'Dashboard', 'Composants d\'interface d\'administration (ce catalogue en est construit).'),
        ],
      },
    ],
  },
  {
    label: 'Composants OpenSuite',
    items: [
      { label: 'ConfirmButton', to: '/opensuite/confirm-button', icon: 'i-lucide-trash-2', description: 'Bouton d\'action destructrice avec fenêtre de confirmation (OpenSuiteConfirmButton).' },
      { label: 'Navbar', to: '/opensuite/navbar', icon: 'i-lucide-panel-top', description: 'Barre de navigation flottante des sites (OpenSuiteNavbar).' },
    ],
  },
  {
    label: 'Layouts',
    items: [
      { label: 'Auth', to: '/layouts/auth', icon: 'i-lucide-log-in', description: 'Layout auth : carte centrée sur fond bg-elevated, pour la connexion et l\'inscription.' },
    ],
  },
]

export const isCategory = (item: ShowcaseLink | ShowcaseCategory): item is ShowcaseCategory => 'children' in item

export const showcaseLinks: ShowcaseLink[] = navigation.flatMap(section =>
  section.items.flatMap(item => isCategory(item) ? item.children : [item]),
)

export const findShowcaseLink = (path: string) => showcaseLinks.find(link => link.to === path)
