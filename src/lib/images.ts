import manifest from '../data/imageManifest.json'

type ImageMeta = {
  width: number
  height: number
  lqip: string
}

const images = manifest as Record<string, ImageMeta>

const fallback: ImageMeta = { width: 1200, height: 800, lqip: '' }

export function imageMeta(src: string): ImageMeta {
  return images[src] ?? fallback
}
