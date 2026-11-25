import { Link, useParams } from 'react-router-dom'
import { getAdjacentEntries, getJournalEntry } from '../data/journal'
import PageMeta from '../components/ui/PageMeta'
import ImageFrame from '../components/ui/ImageFrame'
import Reveal from '../components/ui/Reveal'
import ScrollProgress from '../components/ui/ScrollProgress'
import NotFoundPage from './NotFoundPage'
import { ArrowLeft, ArrowRight } from '../components/ui/Icons'

export default function JournalArticlePage() {
  const { slug } = useParams()
  const entry = getJournalEntry(slug)

  if (!entry) {
    return <NotFoundPage />
  }

  const { newer, older } = getAdjacentEntries(entry.slug)

  return (
    <>
      <PageMeta title={`${entry.title} — VINA`} description={entry.excerpt} />
      <ScrollProgress />

      <article className="article">
        <header className="article__head container">
          <Reveal>
            <Link className="article__back link-arrow" to="/journal">
              <ArrowLeft />
              All entries
            </Link>
          </Reveal>

          <Reveal delay={60}>
            <p className="journal-meta article__meta">
              <span>{entry.category}</span>
              <span>{entry.displayDate}</span>
              <span>{entry.readingTime}</span>
            </p>
            <h1 className="article__title">{entry.title}</h1>
            <p className="article__excerpt">{entry.excerpt}</p>
          </Reveal>
        </header>

        <div className="container">
          <ImageFrame
            src={entry.cover}
            alt={entry.coverAlt}
            ratio="16 / 9"
            eager
            className="article__cover"
            sizes="(max-width: 1360px) 92vw, 1240px"
            caption={
              <>
                <span className="frame__cap-index">Cover</span>
                <em>{entry.category}</em>
              </>
            }
          />
        </div>

        <div className="article__body">
          <Reveal>
            <div className="article__prose">
              {entry.body.map((block, index) => {
                if (block.type === 'heading') {
                  return (
                    <h2 className="article__section-title" key={`${block.text}-${index}`}>
                      {block.text}
                    </h2>
                  )
                }

                if (block.type === 'quote') {
                  return (
                    <blockquote className="article__quote" key={`${block.text}-${index}`}>
                      <p>{block.text}</p>
                      {block.attribution ? <cite>{block.attribution}</cite> : null}
                    </blockquote>
                  )
                }

                if (block.type === 'list') {
                  return (
                    <ul className="article__list" key={`list-${index}`}>
                      {block.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  )
                }

                return (
                  <p className={index === 0 ? 'article__lede' : undefined} key={`${block.text.slice(0, 20)}-${index}`}>
                    {block.text}
                  </p>
                )
              })}
            </div>

            <footer className="article__foot">
              <ul className="article__tags" aria-label="Tag">
                {entry.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>

              <p className="article__end" aria-hidden="true">
                ·
              </p>

              <div className="article__sign">
                <span className="article__monogram" aria-hidden="true">
                  V
                </span>
                <div>
                  <p>Written by Vina</p>
                  <span>Jawa Barat · MMXXVI</span>
                </div>
              </div>

              <p className="article__note">Draft entry — jurnal ini masih terus ditulis.</p>
            </footer>
          </Reveal>
        </div>

        <nav className="article-nav container" aria-label="More journal entries">
          {older ? (
            <Link className="article-nav__item" to={`/journal/${older.slug}`}>
              <span className="label">Older entry</span>
              <span className="article-nav__title">{older.title}</span>
              <span className="article-nav__meta">
                {older.category} · {older.displayDate}
              </span>
              <span className="article-nav__arrow" aria-hidden="true">
                <ArrowRight />
              </span>
            </Link>
          ) : (
            <span />
          )}

          {newer ? (
            <Link className="article-nav__item article-nav__item--right" to={`/journal/${newer.slug}`}>
              <span className="label">Newer entry</span>
              <span className="article-nav__title">{newer.title}</span>
              <span className="article-nav__meta">
                {newer.category} · {newer.displayDate}
              </span>
              <span className="article-nav__arrow" aria-hidden="true">
                <ArrowLeft />
              </span>
            </Link>
          ) : null}
        </nav>
      </article>
    </>
  )
}
