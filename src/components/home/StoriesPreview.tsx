import { Link } from 'react-router-dom'
import { getAllStories } from '../../lib/storyStore'
import { site } from '../../data/site'
import SectionHead from '../ui/SectionHead'
import ImageFrame from '../ui/ImageFrame'
import Reveal from '../ui/Reveal'
import { ArrowRight } from '../ui/Icons'

export default function StoriesPreview() {
  const stories = getAllStories().slice(0, 3)

  return (
    <section className="section stories-preview" id="stories">
      <div className="container">
        <SectionHead
          index="02"
          label="Stories Beyond Reality"
          title={
            <>
              Stories I <em>Create</em>
            </>
          }
          aside={site.sectionIntros.stories}
        />

        <div className="story-grid story-grid--preview">
          {stories.map((story, index) => (
            <Reveal as="article" className="story-card" key={story.slug} delay={(index % 3) * 70}>
              <Link to={`/stories/${story.slug}`} className="story-card__media" aria-label={`Baca cerita: ${story.title}`}>
                <ImageFrame src={story.cover} alt={story.coverAlt} ratio="3 / 2" hover sizes="(max-width: 900px) 100vw, 32vw" />
                <span className={`story-badge story-badge--${story.status.toLowerCase().replace(/\s+/g, '-')}`}>
                  {story.demo ? 'DEMO' : story.status}
                </span>
              </Link>

              <p className="journal-meta story-card__meta">
                <span>{story.genre}</span>
                <span>{story.displayDate}</span>
                <span>{story.readingTime}</span>
              </p>
              <h3 className="story-card__title">
                <Link to={`/stories/${story.slug}`}>{story.title}</Link>
              </h3>
              <p className="story-card__synopsis">{story.synopsis}</p>
              <Link className="link-arrow" to={`/stories/${story.slug}`}>
                Read story
                <ArrowRight />
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal className="stories-preview__foot">
          <p className="stories-preview__note">
            Cerita di atas adalah contoh berlabel DEMO untuk menunjukkan formatnya — bukan karya asli Vina.
            Sebagian besar masih berupa draf, dan itu memang bagian dari prosesnya.
          </p>
          <div className="stories-preview__links">
            <Link className="link-arrow" to="/stories">
              All stories — {String(getAllStories().length).padStart(2, '0')}
              <ArrowRight />
            </Link>
            <Link className="link-arrow" to="/studio">
              Story Studio
              <ArrowRight />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
