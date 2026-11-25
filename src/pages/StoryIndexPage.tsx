import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { getAllStories } from '../lib/storyStore'
import { storyGenres } from '../data/stories'
import PageMeta from '../components/ui/PageMeta'
import ImageFrame from '../components/ui/ImageFrame'
import Reveal from '../components/ui/Reveal'
import { ArrowRight } from '../components/ui/Icons'

export default function StoryIndexPage() {
  const stories = getAllStories()
  const [genre, setGenre] = useState<'All' | (typeof storyGenres)[number]>('All')

  const availableGenres = useMemo(
    () => storyGenres.filter((item) => stories.some((story) => story.genre === item)),
    [stories],
  )

  const filtered = genre === 'All' ? stories : stories.filter((story) => story.genre === genre)

  return (
    <>
      <PageMeta
        title="Stories Beyond Reality — VINA"
        description="Arsip cerita kreatif Vina Nuraini — fiksi, cerita pendek, romance, drama, misteri, fantasi, dan cerita yang belum selesai."
      />

      <header className="page-head">
        <div className="container">
          <Reveal>
            <p className="label page-head__label">Stories Beyond Reality — 02</p>
            <h1 className="page-head__title">
              Stories I <em>Create</em>
            </h1>
          </Reveal>

          <div className="page-head__row">
            <Reveal delay={80}>
              <p className="page-head__intro">
                Cerita-cerita ini lahir ketika ada waktu senggang dan kepala terlalu penuh untuk diam. Sebagian
                selesai, sebagian berhenti di tengah — semuanya masih berhak untuk berubah.
              </p>
            </Reveal>
            <Reveal className="page-head__meta" delay={120}>
              <span>{String(stories.length).padStart(2, '0')} stories</span>
              <span>Demo &amp; local drafts</span>
              <Link to="/studio" className="link-arrow">
                Story Studio
                <ArrowRight />
              </Link>
              <Link to="/" className="link-arrow">
                Back home
                <ArrowRight />
              </Link>
            </Reveal>
          </div>
        </div>
      </header>

      <section className="story-index" aria-labelledby="story-index-heading">
        <div className="container">
          <div className="story-index__bar">
            <div className="gallery__filters" role="group" aria-label="Saring cerita berdasarkan genre">
              <button
                type="button"
                className={`gallery__filter${genre === 'All' ? ' is-active' : ''}`}
                aria-pressed={genre === 'All'}
                onClick={() => setGenre('All')}
              >
                All
                <span className="gallery__filter-count">{stories.length}</span>
              </button>
              {availableGenres.map((item) => (
                <button
                  type="button"
                  key={item}
                  className={`gallery__filter${genre === item ? ' is-active' : ''}`}
                  aria-pressed={genre === item}
                  onClick={() => setGenre(item)}
                >
                  {item}
                  <span className="gallery__filter-count">
                    {stories.filter((story) => story.genre === item).length}
                  </span>
                </button>
              ))}
            </div>
            <p className="gallery__count" aria-live="polite" id="story-index-heading">
              {String(filtered.length).padStart(2, '0')} stories
            </p>
          </div>

          <div className="story-grid" key={genre}>
            {filtered.map((story, index) => (
              <Reveal as="article" className="story-card" key={story.slug} delay={(index % 3) * 60}>
                <Link to={`/stories/${story.slug}`} className="story-card__media" aria-label={`Baca cerita: ${story.title}`}>
                  <ImageFrame src={story.cover} alt={story.coverAlt} ratio="3 / 2" hover sizes="(max-width: 700px) 100vw, 32vw" />
                  <span className={`story-badge story-badge--${story.status.toLowerCase().replace(/\s+/g, '-')}`}>
                    {story.demo ? 'DEMO' : story.status}
                  </span>
                </Link>

                <p className="journal-meta story-card__meta">
                  <span>{story.genre}</span>
                  <span>{story.displayDate}</span>
                  <span>{story.readingTime}</span>
                </p>
                <h2 className="story-card__title">
                  <Link to={`/stories/${story.slug}`}>{story.title}</Link>
                </h2>
                <p className="story-card__synopsis">{story.synopsis}</p>
                <Link className="link-arrow" to={`/stories/${story.slug}`}>
                  Read story
                  <ArrowRight />
                </Link>
              </Reveal>
            ))}
          </div>

          <p className="story-index__note">
            Cerita berlabel DEMO adalah contoh format, bukan karya asli Vina. Cerita berlabel Draft hanya
            tersimpan di peramban ini. Semuanya bisa diganti lewat Story Studio atau berkas data.
          </p>
        </div>
      </section>
    </>
  )
}
