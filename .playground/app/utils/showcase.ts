// Valeurs parcourues par les pages : ajouter une couleur ou une taille ici l'ajoute partout
export const colors = ['primary', 'neutral', 'success', 'warning', 'error', 'info'] as const

export const sizes = ['xs', 'sm', 'md', 'lg', 'xl'] as const
export const largeSizes = ['3xs', '2xs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl'] as const
export const progressSizes = ['2xs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl'] as const

export const buttonVariants = ['solid', 'outline', 'soft', 'subtle', 'ghost', 'link'] as const
export const badgeVariants = ['solid', 'outline', 'soft', 'subtle'] as const
export const fieldVariants = ['outline', 'soft', 'subtle', 'ghost', 'none'] as const
export const pageCardVariants = ['outline', 'soft', 'subtle', 'solid', 'ghost', 'naked'] as const
export const emptyVariants = ['outline', 'soft', 'subtle', 'solid', 'naked'] as const
export const sides = ['top', 'right', 'bottom', 'left'] as const

export const themeVariables = {
  charte: ['--primary', '--bg', '--success', '--warning', '--error', '--info'],
  couleurs: ['--ui-primary', '--ui-secondary', '--ui-success', '--ui-info', '--ui-warning', '--ui-error'],
  textes: ['--ui-text-dimmed', '--ui-text-muted', '--ui-text-toned', '--ui-text', '--ui-text-highlighted', '--ui-text-inverted'],
  fonds: ['--ui-bg', '--ui-bg-muted', '--ui-bg-elevated', '--ui-bg-accented', '--ui-bg-inverted'],
  bordures: ['--ui-border', '--ui-border-muted', '--ui-border-accented', '--ui-border-inverted'],
  graphiques: ['--chart-1', '--chart-2', '--chart-3', '--chart-4', '--chart-5', '--chart-muted'],
}

export const fontSizes = ['text-xs', 'text-sm', 'text-base', 'text-lg', 'text-xl', 'text-2xl', 'text-3xl', 'text-4xl', 'text-5xl']
export const fontWeights = ['font-extralight', 'font-light', 'font-normal', 'font-medium', 'font-semibold', 'font-bold']
export const textColors = ['text-dimmed', 'text-muted', 'text-toned', 'text-default', 'text-highlighted']
export const radii = ['rounded-none', 'rounded-xs', 'rounded-sm', 'rounded-md', 'rounded-lg', 'rounded-xl', 'rounded-2xl', 'rounded-3xl', 'rounded-full']
export const shadows = ['shadow-2xs', 'shadow-xs', 'shadow-sm', 'shadow-md', 'shadow-lg', 'shadow-xl', 'shadow-2xl']

export const kbdSizes = ['sm', 'md', 'lg'] as const
export const chipPositions = ['top-right', 'bottom-right', 'top-left', 'bottom-left'] as const
export const separatorTypes = ['solid', 'dashed', 'dotted'] as const
export const separatorPositions = ['start', 'center', 'end'] as const
export const progressAnimations = ['carousel', 'carousel-inverse', 'swing', 'elastic'] as const
export const radioVariants = ['list', 'card', 'table'] as const
