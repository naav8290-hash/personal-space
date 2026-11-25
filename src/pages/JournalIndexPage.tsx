import { Link } from 'react-router-dom'
import { sortedJournalEntries } from '../data/journal'
import PageMeta from '../components/ui/PageMeta'
import ImageFrame from '../components/ui/ImageFrame'
import Reveal from '../components/ui/Reveal'
import { ArrowRight } from '../components/ui/Icons'

export default function JournalIndexPage() {
  return (
    <>
      <PageMeta
        title="Words, Pages & Thoughts — VINA"
        description="Esai pribadi, puisi, catatan harian, dan surat untuk diri sendiri oleh Vina Nuraini — masih terus ditulis."
      />

      <header className="page-head">
        <div className="container">
          <Reveal>
            <p className="label page-head__label">Literature &amp; Writing — 07</p>
            <h1 className="page-head__title">
              Words, Pages &amp; <em>Thoughts</em>
            </h1>
          </Reveal>

          <div className="page-head__row">
            <Reveal delay={80}>
              <p className="page-head__intro">
                Ruang tenang untuk berpikir dengan lantang. Esai, serpihan, dan surat — ditulis perlahan,
                disimpan untuk siapa pun yang menemukannya.
              </p>
            </Reveal>
            <Reveal className="page-head__meta" delay={120}>
              <span>{String(sortedJournalEntries.length).padStart(2, '0')} entries</span>
              <span>An archive in progress</span>
              <Link to="/" className="link-arrow">
                Back home
                <ArrowRight />
              </Link>
            </Reveal>
          </div>
        </div>
      </header>

      <section className="journal-index" aria-labelledby="entries-heading">
        <div className="container">
          <div className="journal-index__bar">
            <p className="label" id="entries-heading">
              All entries
            </p>
            <p className="journal-index__note">Entri draf, ditulis untuk menemukan nada — arsip ini masih terus ditulis.</p>
          </div>

          <ol className="entry-list">
            {sortedJournalEntries.map((entry, index) => (
              <li key={entry.slug}>
                <Reveal as="article" className="entry-row">
                  <span className="entry-row__num" aria-hidden="true">
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <Link
                    to={`/journal/${entry.slug}`}
                    className="entry-row__media"
                    tabIndex={-1}
                    aria-hidden="true"
                  >
                    <ImageFrame src={entry.cover} alt="" ratio="4 / 3" hover sizes="(max-width: 900px) 100vw, 24vw" />
                  </Link>

                  <div className="entry-row__body">
                    <p className="journal-meta">
                      <span>{entry.category}</span>
                      <span>{entry.displayDate}</span>
                      <span>{entry.readingTime}</span>
                    </p>
                    <h2 className="entry-row__title">
                      <Link to={`/journal/${entry.slug}`}>{entry.title}</Link>
                    </h2>
                    <p className="entry-row__excerpt">{entry.excerpt}</p>
                    <Link className="link-arrow" to={`/journal/${entry.slug}`}>
                      Read entry
                      <ArrowRight />
                    </Link>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  )
}
