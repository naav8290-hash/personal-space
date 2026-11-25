import sharp from 'sharp'
import { mkdir, readdir, rm, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)))
const sourceDir = path.join(root, 'source-images')
const outputDir = path.join(root, 'public', 'images')
const manifestPath = path.join(root, 'src', 'data', 'imageManifest.json')

const targets = [
  { source: 'cover-still-life', dest: 'hero/portrait-interim', width: 1200 },
  { source: 'gallery-window-light', dest: 'gallery/window-light', width: 1200 },
  { source: 'gallery-coastal-road', dest: 'gallery/coastal-road', width: 1500 },
  { source: 'gallery-open-book', dest: 'gallery/open-book', width: 1200 },
  { source: 'gallery-film-camera', dest: 'gallery/film-camera', width: 1200 },
  { source: 'gallery-rain-window', dest: 'gallery/rain-window', width: 1200 },
  { source: 'gallery-dried-roses', dest: 'gallery/dried-roses', width: 1200 },
  { source: 'gallery-train-window', dest: 'gallery/train-window', width: 1500 },
  { source: 'gallery-old-books', dest: 'gallery/old-books', width: 1200 },
  { source: 'gallery-bicycle-alley', dest: 'gallery/bicycle-alley', width: 1100 },
  { source: 'gallery-darkroom', dest: 'gallery/darkroom', width: 1500 },
  { source: 'gallery-morning-desk', dest: 'gallery/morning-desk', width: 1300 },
  { source: 'interest-cinema', dest: 'interests/cinema', width: 1500 },
  { source: 'interest-literature', dest: 'interests/literature', width: 1300 },
  { source: 'interest-languages', dest: 'interests/languages', width: 1300 },
  { source: 'interest-photography', dest: 'interests/photography', width: 1300 },
  { source: 'interest-design', dest: 'interests/design', width: 1300 },
  { source: 'interest-technology', dest: 'interests/technology', width: 1300 },
  { source: 'story-childhood', dest: 'story/childhood', width: 1300 },
  { source: 'story-school', dest: 'story/school', width: 1300 },
  { source: 'story-discovering', dest: 'story/discovering', width: 1300 },
  { source: 'story-today', dest: 'story/today', width: 1300 },
  { source: 'story-next', dest: 'story/next', width: 1500 },
  { source: 'journal-rain-lamp', dest: 'journal/rain-lamp', width: 1500 },
  { source: 'journal-letters', dest: 'journal/letters', width: 1500 },
  { source: 'journal-foggy-road', dest: 'journal/foggy-road', width: 1500 },
  { source: 'journal-night-writing', dest: 'journal/night-writing', width: 1500 },
  { source: 'journal-beginning', dest: 'journal/beginning', width: 1500 },
]

const manifest = {}

await rm(outputDir, { recursive: true, force: true })
await mkdir(outputDir, { recursive: true })

const sources = await readdir(sourceDir)
for (const target of targets) {
  const sourceFile = sources.find((file) => file.startsWith(`${target.source}_`))
  if (!sourceFile) {
    throw new Error(`Missing source image for ${target.source}`)
  }

  const input = path.join(sourceDir, sourceFile)
  const outputFile = path.join(outputDir, `${target.dest}.webp`)
  await mkdir(path.dirname(outputFile), { recursive: true })

  const pipeline = sharp(input).rotate()
  const { width = target.width } = await pipeline.metadata()
  const resized = width > target.width ? pipeline.resize({ width: target.width }) : pipeline

  const info = await resized
    .webp({ quality: 80, effort: 6 })
    .toFile(outputFile)

  const lqip = await sharp(input)
    .rotate()
    .resize({ width: 24 })
    .webp({ quality: 40 })
    .toBuffer()

  manifest[`/images/${target.dest}.webp`] = {
    width: info.width,
    height: info.height,
    lqip: `data:image/webp;base64,${lqip.toString('base64')}`,
  }

  console.log(`${target.dest}  ${info.width}x${info.height}  ${Math.round(info.size / 1024)} KB`)
}

await writeFile(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`)
console.log(`\n${targets.length} images written. Manifest: ${path.relative(root, manifestPath)}`)
