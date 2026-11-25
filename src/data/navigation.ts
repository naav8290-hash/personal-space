export type NavItem = {
  label: string
  to: string
  hash?: string
}

export const navItems: NavItem[] = [
  { label: 'Beranda', to: '/', hash: 'top' },
  { label: 'Tentang', to: '/', hash: 'about' },
  { label: 'Cerita', to: '/stories' },
  { label: 'Film', to: '/', hash: 'cinema' },
  { label: 'Minat', to: '/', hash: 'interests' },
  { label: 'Tulisan', to: '/journal' },
  { label: 'Galeri', to: '/', hash: 'gallery' },
]

export const sectionIds = [
  'top',
  'about',
  'stories',
  'cinema',
  'interests',
  'journey',
  'gallery',
  'writing',
  'favorites',
  'currently',
] as const
