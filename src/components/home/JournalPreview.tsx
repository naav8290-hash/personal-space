import { Link } from 'react-router-dom'
import { sortedJournalEntries } from '../../data/journal'
import { site } from '../../data/site'
import SectionHead from '../ui/SectionHead'
import ImageFrame from '../ui/ImageFrame'
import Reveal from '../ui/Reveal'
import { ArrowRight } from '../ui/Icons'

export default function JournalPreview() {
  const [featured, ...rest] = sortedJournalEntries.slice(0, 3)

  return (
    <section className="section journal-preview" id="writing">
      <div className="container">
        <SectionHead
          index="07"
          label="Literature & Writing"
          title={
            <>
              Words, Pages &amp; <em>Thoughts</em>
            </>
          }
          aside={site.sectionIntros.writing}
        />

        <div className="journal-feature">
          <Link to={`/journal/${featured.slug}`} className="journal-feature__media" aria-label={`Baca ${featured.title}`}>
            <ImageFrame
              src={featured.cover}
              alt={featured.coverAlt}
              ratio="16 / 10"
              hover
              sizes="(max-width: 900px) 100vw, 58vw"
            />
          </Link>

          <Reveal className="journal-feature__copy" delay={80}>
            <p className="journal-meta">
              <span>{featured.category}</span>
              <span>{featured.displayDate}</span>
              <span>{featured.readingTime}</span>
            </p>
            <h3 className="journal-feature__title">
              <Link to={`/journal/${featured.slug}`}>{featured.title}</Link>
            </h3>
            <p className="journal-feature__excerpt">{featured.excerpt}</p>
            <Link className="link-arrow" to={`/journal/${featured.slug}`}>
              Read entry
              <ArrowRight />
            </Link>
          </Reveal>
        </div>

        <div className="journal-preview__grid">
          {rest.map((entry, index) => (
            <Reveal as="article" className="journal-card" key={entry.slug} delay={index * 80}>
              <Link to={`/journal/${entry.slug}`} className="journal-card__media" aria-label={`Baca ${entry.title}`}>
                <ImageFrame src={entry.cover} alt={entry.coverAlt} ratio="3 / 2" hover sizes="(max-width: 900px) 100vw, 32vw" />
              </Link>
              <p className="journal-meta">
                <span>{entry.category}</span>
                <span>{entry.displayDate}</span>
              </p>
              <h3 className="journal-card__title">
                <Link to={`/journal/${entry.slug}`}>{entry.title}</Link>
              </h3>
              <p className="journal-card__excerpt">{entry.excerpt}</p>
              <Link className="link-arrow" to={`/journal/${entry.slug}`}>
                Read entry
                <ArrowRight />
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal className="journal-preview__foot">
          <p className="journal-preview__note">
            Esai, refleksi, surat, dan catatan harian. Tidak semuanya selesai — dan tidak semuanya harus.
          </p>
          <Link className="link-arrow" to="/journal">
            All entries — {String(sortedJournalEntries.length).padStart(2, '0')}
            <ArrowRight />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
