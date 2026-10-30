import type { AccordionItem, BreadcrumbItem, DropdownMenuItem, NavigationMenuItem, StepperItem, TabsItem, TimelineItem } from '@nuxt/ui'

// Données fictives des pages du catalogue
export interface DemoUser {
  id: number
  name: string
  email: string
  role: 'Administrateur' | 'Membre' | 'Invité'
  status: 'actif' | 'en attente' | 'suspendu'
  avatar: string
  storage: number
}

export const demoUsers: DemoUser[] = [
  { id: 1, name: 'Camille Laurent', email: 'camille.laurent@exemple.fr', role: 'Administrateur', status: 'actif', avatar: 'https://i.pravatar.cc/128?u=1', storage: 42 },
  { id: 2, name: 'Hugo Martin', email: 'hugo.martin@exemple.fr', role: 'Membre', status: 'actif', avatar: 'https://i.pravatar.cc/128?u=2', storage: 18 },
  { id: 3, name: 'Léa Bernard', email: 'lea.bernard@exemple.fr', role: 'Membre', status: 'en attente', avatar: 'https://i.pravatar.cc/128?u=3', storage: 7 },
  { id: 4, name: 'Nathan Petit', email: 'nathan.petit@exemple.fr', role: 'Invité', status: 'suspendu', avatar: 'https://i.pravatar.cc/128?u=4', storage: 0 },
  { id: 5, name: 'Inès Moreau', email: 'ines.moreau@exemple.fr', role: 'Membre', status: 'actif', avatar: 'https://i.pravatar.cc/128?u=5', storage: 63 },
  { id: 6, name: 'Louis Dubois', email: 'louis.dubois@exemple.fr', role: 'Administrateur', status: 'actif', avatar: 'https://i.pravatar.cc/128?u=6', storage: 25 },
]

export const demoStatusColors = {
  'actif': 'success',
  'en attente': 'warning',
  'suspendu': 'error',
} as const

export const demoStats = [
  { label: 'Utilisateurs', value: '1 284', icon: 'i-lucide-users', trend: '+12 %', color: 'success' },
  { label: 'Titres au catalogue', value: '3 507', icon: 'i-lucide-clapperboard', trend: '+3 %', color: 'success' },
  { label: 'Heures visionnées', value: '18 920', icon: 'i-lucide-clock', trend: '-4 %', color: 'error' },
  { label: 'Encodages en cours', value: '6', icon: 'i-lucide-cpu', trend: 'stable', color: 'neutral' },
] as const

export const demoStorage = [
  { label: 'Films', value: 1840 },
  { label: 'Séries', value: 1210 },
  { label: 'Documentaires', value: 420 },
  { label: 'Animation', value: 260 },
  { label: 'Courts métrages', value: 95 },
  { label: 'Espace libre', value: 1175, muted: true },
]

export const demoActivity: TimelineItem[] = [
  { date: 'Il y a 5 min', title: 'Nouvel utilisateur', description: 'Léa Bernard a créé un compte.', icon: 'i-lucide-user-plus' },
  { date: 'Il y a 1 h', title: 'Encodage terminé', description: 'Le film « Les Hauts Plateaux » est disponible.', icon: 'i-lucide-film' },
  { date: 'Il y a 3 h', title: 'Genre ajouté', description: 'Camille Laurent a ajouté le genre « Polar ».', icon: 'i-lucide-tags' },
  { date: 'Hier', title: 'Compte suspendu', description: 'Nathan Petit a été suspendu.', icon: 'i-lucide-user-x' },
]

export const demoOptions = ['Action', 'Animation', 'Comédie', 'Documentaire', 'Drame', 'Fantastique', 'Polar', 'Science-fiction']

export const demoRadioItems = [
  { label: 'Film', value: 'movie', description: 'Un seul fichier vidéo.' },
  { label: 'Série', value: 'series', description: 'Saisons et épisodes.' },
  { label: 'Documentaire', value: 'documentary', description: 'Film ou série documentaire.' },
]

export const demoNavigation: NavigationMenuItem[] = [
  { label: 'Accueil', icon: 'i-lucide-house', to: '/nuxt-ui/navigation-menu' },
  { label: 'Parcourir', icon: 'i-lucide-compass', children: [
    { label: 'Films', icon: 'i-lucide-film', description: 'Tout le catalogue des films.' },
    { label: 'Séries', icon: 'i-lucide-tv', description: 'Saisons et épisodes.' },
  ] },
  { label: 'Ma liste', icon: 'i-lucide-bookmark', badge: 4 },
  { label: 'Désactivé', icon: 'i-lucide-ban', disabled: true },
]

export const demoBreadcrumb: BreadcrumbItem[] = [
  { label: 'Administration', icon: 'i-lucide-shield', to: '/' },
  { label: 'Catalogue', icon: 'i-lucide-clapperboard', to: '/nuxt-ui/table' },
  { label: 'Les Hauts Plateaux' },
]

export const demoTabs: TabsItem[] = [
  { label: 'Informations', icon: 'i-lucide-info', content: 'Titre, synopsis et genres.' },
  { label: 'Vidéo', icon: 'i-lucide-film', content: 'Fichier source et encodages.' },
  { label: 'Distribution', icon: 'i-lucide-users', content: 'Réalisateurs et interprètes.' },
]

export const demoSteps: StepperItem[] = [
  { title: 'Fichier', description: 'Choisir la vidéo', icon: 'i-lucide-upload' },
  { title: 'Fiche', description: 'Importer depuis TMDB', icon: 'i-lucide-file-text' },
  { title: 'Publication', description: 'Rendre visible', icon: 'i-lucide-send' },
]

export const demoAccordion: AccordionItem[] = [
  { label: 'Qu\'est-ce qu\'OpenSuite ?', icon: 'i-lucide-info', content: 'Une suite d\'applications libres qui partagent la même charte graphique.' },
  { label: 'Comment modifier la charte ?', icon: 'i-lucide-palette', content: 'Dans la layer open-ui : le CSS, les composants et la configuration du thème.' },
  { label: 'Section désactivée', icon: 'i-lucide-ban', content: 'Contenu inaccessible.', disabled: true },
]

export const demoDropdown: DropdownMenuItem[][] = [
  [{ label: 'Camille Laurent', avatar: { src: 'https://i.pravatar.cc/128?u=1' }, type: 'label' }],
  [
    { label: 'Profil', icon: 'i-lucide-user', kbds: ['meta', 'p'] },
    { label: 'Paramètres', icon: 'i-lucide-settings', kbds: ['meta', ','] },
    { label: 'Thème', icon: 'i-lucide-sun-moon', children: [[
      { label: 'Clair', icon: 'i-lucide-sun', type: 'checkbox', checked: true },
      { label: 'Sombre', icon: 'i-lucide-moon', type: 'checkbox' },
    ]] },
  ],
  [
    { label: 'Désactivé', icon: 'i-lucide-ban', disabled: true },
    { label: 'Déconnexion', icon: 'i-lucide-log-out', color: 'error' },
  ],
]

export const demoIcons = [
  'i-lucide-house', 'i-lucide-compass', 'i-lucide-search', 'i-lucide-user', 'i-lucide-users', 'i-lucide-user-plus',
  'i-lucide-shield', 'i-lucide-log-in', 'i-lucide-log-out', 'i-lucide-settings', 'i-lucide-bell', 'i-lucide-bookmark',
  'i-lucide-film', 'i-lucide-tv', 'i-lucide-clapperboard', 'i-lucide-play', 'i-lucide-pause', 'i-lucide-tags',
  'i-lucide-activity', 'i-lucide-chart-pie', 'i-lucide-hard-drive', 'i-lucide-cpu', 'i-lucide-clock', 'i-lucide-calendar',
  'i-lucide-plus', 'i-lucide-pencil', 'i-lucide-trash-2', 'i-lucide-upload', 'i-lucide-download', 'i-lucide-external-link',
  'i-lucide-arrow-left', 'i-lucide-arrow-right', 'i-lucide-chevron-down', 'i-lucide-x', 'i-lucide-check', 'i-lucide-ellipsis',
  'i-lucide-info', 'i-lucide-circle-alert', 'i-lucide-circle-check', 'i-lucide-triangle-alert', 'i-lucide-github', 'i-lucide-mail',
]

export const demoUser: DemoUser = demoUsers[0]!
