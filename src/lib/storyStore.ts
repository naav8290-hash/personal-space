import type { Story, StoryGenre, StoryStatus } from '../data/types'
import { demoStories, sortStories } from '../data/stories'

const STORAGE_KEY = 'vina-story-drafts'

export type StoryInput = {
  title: string
  genre: StoryGenre
  status: StoryStatus
  synopsis: string
  body: string
  cover: string
  coverAlt: string
}

export const storyCoverOptions = [
  {
    label: 'Morning pages',
    src: '/images/journal/beginning.webp',
    alt: 'Halaman-halaman awal buku catatan dengan tulisan baru, pulpen, dan cahaya pagi di atas meja.',
  },
  {
    label: 'Night writing',
    src: '/images/journal/night-writing.webp',
    alt: 'Buku jurnal terbuka dengan pulpen di atas meja kayu gelap pada malam hari, diterangi satu lampu hangat.',
  },
  {
    label: 'Foggy road',
    src: '/images/journal/foggy-road.webp',
    alt: 'Jalan kosong menghilang ke dalam kabut pagi pucat di antara siluet pepohonan.',
  },
  {
    label: 'Rain & lamplight',
    src: '/images/journal/rain-lamp.webp',
    alt: 'Ruangan redup pada malam hari dengan jurnal terbuka dan lampu hangat yang terpantul di jendela berlapis hujan.',
  },
  {
    label: 'Letters',
    src: '/images/journal/letters.webp',
    alt: 'Bundel surat tulisan tangan tua diikat pita merah muda berdebu di atas meja kayu gelap.',
  },
]

function safeParse(raw: string | null): Story[] {
  if (!raw) return []
  try {
    const parsed = JSON.parse(raw)
    if (!Array.isArray(parsed)) return []
    return parsed.filter(
      (item): item is Story =>
        Boolean(item) &&
        typeof item.slug === 'string' &&
        typeof item.title === 'string' &&
        Array.isArray(item.chapters),
    )
  } catch {
    return []
  }
}

export function loadDrafts(): Story[] {
  if (typeof window === 'undefined') return []
  try {
    return safeParse(window.localStorage.getItem(STORAGE_KEY))
  } catch {
    return []
  }
}

function persist(drafts: Story[]) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(drafts))
  } catch {
    // Penyimpanan penuh atau diblokir — biarkan halaman tetap berjalan.
  }
}

export function getAllStories(): Story[] {
  return sortStories([...demoStories, ...loadDrafts()])
}

export function getStory(slug: string | undefined): Story | undefined {
  if (!slug) return undefined
  return getAllStories().find((story) => story.slug === slug)
}

export function getAdjacentStories(slug: string) {
  const stories = getAllStories()
  const index = stories.findIndex((story) => story.slug === slug)
  return {
    newer: index > 0 ? stories[index - 1] : undefined,
    older: index >= 0 && index < stories.length - 1 ? stories[index + 1] : undefined,
  }
}

function slugify(title: string): string {
  const base = title
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[^\w\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .slice(0, 60)
  return base || 'cerita-baru'
}

function uniqueSlug(title: string, drafts: Story[], ignoreSlug?: string): string {
  const base = slugify(title)
  const taken = new Set(
    [...demoStories, ...drafts].map((story) => story.slug).filter((slug) => slug !== ignoreSlug),
  )
  if (!taken.has(base)) return base
  let counter = 2
  while (taken.has(`${base}-${counter}`)) counter += 1
  return `${base}-${counter}`
}

function bodyToChapters(body: string) {
  const paragraphs = body
    .split(/\n\s*\n/)
    .map((part) => part.trim())
    .filter(Boolean)

  return [
    {
      title: 'Draft',
      blocks: (paragraphs.length > 0 ? paragraphs : ['']).map((text) => ({
        type: 'paragraph' as const,
        text,
      })),
    },
  ]
}

function readingTimeFor(body: string): string {
  const words = body.trim().split(/\s+/).filter(Boolean).length
  const minutes = Math.max(1, Math.round(words / 200))
  return `${minutes} min read`
}

function today() {
  const now = new Date()
  const date = now.toISOString().slice(0, 10)
  const displayDate = now.toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
  return { date, displayDate }
}

export function createDraft(input: StoryInput): Story {
  const drafts = loadDrafts()
  const { date, displayDate } = today()
  const draft: Story = {
    slug: uniqueSlug(input.title, drafts),
    title: input.title.trim(),
    genre: input.genre,
    status: input.status === 'Demo' ? 'Draft' : input.status,
    date,
    displayDate,
    readingTime: readingTimeFor(input.body),
    synopsis: input.synopsis.trim(),
    cover: input.cover,
    coverAlt: input.coverAlt,
    note: 'Draft lokal — tersimpan di peramban ini saja.',
    chapters: bodyToChapters(input.body),
  }

  persist([...drafts, draft])
  return draft
}

export function updateDraft(slug: string, input: StoryInput): Story | undefined {
  const drafts = loadDrafts()
  const existing = drafts.find((draft) => draft.slug === slug)
  if (!existing) return undefined

  const updated: Story = {
    ...existing,
    slug: uniqueSlug(input.title, drafts, slug),
    title: input.title.trim(),
    genre: input.genre,
    status: input.status === 'Demo' ? 'Draft' : input.status,
    readingTime: readingTimeFor(input.body),
    synopsis: input.synopsis.trim(),
    cover: input.cover,
    coverAlt: input.coverAlt,
    chapters: bodyToChapters(input.body),
  }

  const next = drafts.map((draft) => (draft.slug === slug ? updated : draft))
  persist(next)
  return updated
}

export function deleteDraft(slug: string) {
  persist(loadDrafts().filter((draft) => draft.slug !== slug))
}

export function draftBody(story: Story): string {
  return story.chapters
    .flatMap((chapter) =>
      chapter.blocks.map((block) => {
        if (block.type === 'paragraph') return block.text
        if (block.type === 'heading') return block.text
        if (block.type === 'quote') return block.text
        return block.items.join('\n')
      }),
    )
    .filter(Boolean)
    .join('\n\n')
}

export function exportDrafts(): string {
  return JSON.stringify(loadDrafts(), null, 2)
}
