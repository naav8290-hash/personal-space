import { Link, useParams } from 'react-router-dom'
import { getAdjacentStories, getStory } from '../lib/storyStore'
import PageMeta from '../components/ui/PageMeta'
import ImageFrame from '../components/ui/ImageFrame'
import Reveal from '../components/ui/Reveal'
import ScrollProgress from '../components/ui/ScrollProgress'
import NotFoundPage from './NotFoundPage'
import { ArrowLeft, ArrowRight } from '../components/ui/Icons'
import type { ContentBlock } from '../data/types'

function Block({ block, index }: { block: ContentBlock; index: number }) {
  if (block.type === 'heading') {
    return <h3 className="story-reader__section-title">{block.text}</h3>
  }

  if (block.type === 'quote') {
    return (
      <blockquote className="story-reader__quote">
        <p>{block.text}</p>
        {block.attribution ? <cite>{block.attribution}</cite> : null}
      </blockquote>
    )
  }

  if (block.type === 'list') {
    return (
      <ul className="story-reader__list">
        {block.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    )
  }

  return <p className={index === 0 ? 'story-reader__lede' : undefined}>{block.text}</p>
}

export default function StoryReaderPage() {
  const { slug } = useParams()
  const story = getStory(slug)

  if (!story) {
    return <NotFoundPage />
  }

  const { newer, older } = getAdjacentStories(story.slug)
  const multiChapter = story.chapters.length > 1

  return (
    <>
      <PageMeta title={`${story.title} — VINA`} description={story.synopsis} />
      <ScrollProgress />

      <article className="story-reader">
        <header className="story-reader__head container">
          <Reveal>
            <Link className="article__back link-arrow" to="/stories">
              <ArrowLeft />
              All stories
            </Link>
          </Reveal>

          <Reveal delay={60}>
            <p className="journal-meta article__meta">
              <span>{story.genre}</span>
              <span>{story.displayDate}</span>
              <span>{story.readingTime}</span>
              <span className="story-reader__status">{story.demo ? 'DEMO' : story.status}</span>
            </p>
            <h1 className="article__title">{story.title}</h1>
            <p className="article__excerpt">{story.synopsis}</p>
          </Reveal>

          <Reveal className="story-reader__byline" delay={100}>
            <span className="story-reader__monogram" aria-hidden="true">
              V
            </span>
            <div>
              <p>Written by Vina</p>
              <span>Still becoming · MMXXVI</span>
            </div>
          </Reveal>
        </header>

        <div className="container">
          <ImageFrame
            src={story.cover}
            alt={story.coverAlt}
            ratio="16 / 9"
            eager
            className="article__cover"
            sizes="(max-width: 1360px) 92vw, 1240px"
            caption={
              <>
                <span className="frame__cap-index">Cover</span>
                <em>{story.genre}</em>
              </>
            }
          />
        </div>

        <div className="story-reader__body">
          {multiChapter ? (
            <Reveal className="story-reader__toc">
              <p className="label">Chapters</p>
              <ol>
                {story.chapters.map((chapter, index) => (
                  <li key={chapter.title}>
                    <a href={`#chapter-${index + 1}`}>
                      <span>{String(index + 1).padStart(2, '0')}</span>
                      {chapter.title}
                    </a>
                  </li>
                ))}
              </ol>
            </Reveal>
          ) : null}

          <Reveal>
            <div className="story-reader__prose">
              {story.chapters.map((chapter, chapterIndex) => (
                <section key={chapter.title} id={`chapter-${chapterIndex + 1}`} className="story-reader__chapter">
                  <p className="story-reader__chapter-index">
                    Chapter {String(chapterIndex + 1).padStart(2, '0')}
                  </p>
                  <h2 className="story-reader__chapter-title">{chapter.title}</h2>
                  {chapter.blocks.map((block, index) => (
                    <Block block={block} index={index} key={`${chapterIndex}-${index}`} />
                  ))}
                </section>
              ))}
            </div>

            <footer className="article__foot">
              <p className="article__end" aria-hidden="true">
                ·
              </p>

              <div className="article__sign">
                <span className="article__monogram" aria-hidden="true">
                  V
                </span>
                <div>
                  <p>Written by Vina</p>
                  <span>Still becoming · MMXXVI</span>
                </div>
              </div>

              <p className="article__note">
                {story.demo
                  ? 'Demo story — contoh format, bukan karya asli. Ganti dengan cerita sendiri.'
                  : 'Draft lokal — tersimpan di peramban ini, belum diterbitkan.'}
              </p>
            </footer>
          </Reveal>
        </div>

        <nav className="article-nav container" aria-label="Cerita lainnya">
          {older ? (
            <Link className="article-nav__item" to={`/stories/${older.slug}`}>
              <span className="label">Previous story</span>
              <span className="article-nav__title">{older.title}</span>
              <span className="article-nav__meta">
                {older.genre} · {older.displayDate}
              </span>
              <span className="article-nav__arrow" aria-hidden="true">
                <ArrowLeft />
              </span>
            </Link>
          ) : null}

          {newer ? (
            <Link className="article-nav__item article-nav__item--right" to={`/stories/${newer.slug}`}>
              <span className="label">Next story</span>
              <span className="article-nav__title">{newer.title}</span>
              <span className="article-nav__meta">
                {newer.genre} · {newer.displayDate}
              </span>
              <span className="article-nav__arrow" aria-hidden="true">
                <ArrowRight />
              </span>
            </Link>
          ) : null}
        </nav>
      </article>
    </>
  )
}
