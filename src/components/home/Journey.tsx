import { journeyChapters } from '../../data/journey'
import { site } from '../../data/site'
import SectionHead from '../ui/SectionHead'
import ImageFrame from '../ui/ImageFrame'
import Reveal from '../ui/Reveal'

export default function Journey() {
  return (
    <section className="section story" id="journey">
      <div className="container">
        <SectionHead
          index="05"
          label="My Journey"
          title={
            <>
              Still in <em>Progress</em>
            </>
          }
          aside={site.sectionIntros.journey}
        />

        <div className="story__timeline">
          {journeyChapters.map((chapter, index) => (
            <Reveal
              as="article"
              className={`story-row${index % 2 === 1 ? ' story-row--flip' : ''}`}
              key={chapter.numeral}
            >
              <div className="story-row__meta">
                <span className="story-row__numeral">{chapter.numeral}</span>
                <span className="story-row__era">{chapter.era}</span>
                <span className="story-row__marker">{chapter.marker}</span>
              </div>

              <div className="story-row__body">
                <h3>{chapter.title}</h3>
                {chapter.body.map((paragraph) => (
                  <p key={paragraph.slice(0, 32)}>{paragraph}</p>
                ))}
              </div>

              {chapter.image ? (
                <div className="story-row__media">
                  <ImageFrame
                    src={chapter.image}
                    alt={chapter.imageAlt ?? ''}
                    ratio="4 / 3"
                    hover
                    sizes="(max-width: 900px) 100vw, 30vw"
                    caption={
                      <>
                        <span className="frame__cap-index">{chapter.numeral}</span>
                        <em>{chapter.imageCaption}</em>
                      </>
                    }
                  />
                </div>
              ) : null}
            </Reveal>
          ))}
        </div>

        <Reveal className="story__note">
          <span aria-hidden="true">·</span>
          <p>
            Beberapa bab di atas sengaja masih kosong. Tanggal, tempat, dan detail kecil akan diisi sendiri
            saat ingatannya sudah siap — bukan dikarang agar halaman ini terlihat penuh.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
