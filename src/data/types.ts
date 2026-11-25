export type ContentBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'heading'; text: string }
  | { type: 'quote'; text: string; attribution?: string }
  | { type: 'list'; items: string[] }

export type JournalCategory =
  | 'Essays'
  | 'Reflections'
  | 'Poetry'
  | 'Letters to Myself'
  | 'Daily Notes'
  | 'Random Thoughts'
  | 'Short Writings'

export type JournalEntry = {
  slug: string
  title: string
  category: JournalCategory
  date: string
  displayDate: string
  readingTime: string
  excerpt: string
  cover: string
  coverAlt: string
  quote: { text: string; attribution?: string }
  tags: string[]
  body: ContentBlock[]
}

export type JourneyChapter = {
  numeral: string
  title: string
  era: string
  marker: string
  image?: string
  imageAlt?: string
  imageCaption?: string
  body: string[]
}

export type Interest = {
  index: string
  title: string
  meta: string
  description: string
  image: string
  imageAlt: string
  layout: 'wide' | 'narrow' | 'half' | 'full'
  ratio: string
}

export type GalleryCategory =
  | 'Portraits'
  | 'Everyday Moments'
  | 'Places'
  | 'Memories'
  | 'Creative Works'
  | 'Little Things'

export type GalleryItem = {
  id: string
  src: string
  alt: string
  title: string
  category: GalleryCategory
  note: string
}

export type StoryGenre =
  | 'Fiction'
  | 'Short Stories'
  | 'Romance'
  | 'Drama'
  | 'Mystery'
  | 'Fantasy'
  | 'Personal Narratives'
  | 'Unfinished Stories'

export type StoryStatus = 'Demo' | 'Draft' | 'In Progress' | 'Finished'

export type StoryChapter = {
  title: string
  blocks: ContentBlock[]
}

export type Story = {
  slug: string
  title: string
  genre: StoryGenre
  status: StoryStatus
  date: string
  displayDate: string
  readingTime: string
  synopsis: string
  cover: string
  coverAlt: string
  note?: string
  demo?: boolean
  chapters: StoryChapter[]
}
