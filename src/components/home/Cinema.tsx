import { cinema } from '../../data/cinema'
import { site } from '../../data/site'
import SectionHead from '../ui/SectionHead'
import ImageFrame from '../ui/ImageFrame'
import Reveal from '../ui/Reveal'

export default function Cinema() {
  return (
    <section className="section section--tint cinema" id="cinema">
      <div className="container">
        <SectionHead
          index="03"
          label="Behind the Stories"
          title={
            <>
              Where Stories <em>Come Alive</em>
            </>
          }
          aside={site.sectionIntros.cinema}
        />

        <div className="cinema__grid">
          <div className="cinema__visual">
            <Reveal variant="image" className="cinema__shot cinema__shot--main">
              <ImageFrame
                src={cinema.images.primary}
                alt={cinema.images.primaryAlt}
                ratio="16 / 10"
                sizes="(max-width: 900px) 100vw, 58vw"
                caption={
                  <>
                    <span className="frame__cap-index">Frame 01</span>
                    <em>Light, before the story</em>
                  </>
                }
              />
            </Reveal>
            <Reveal variant="image" className="cinema__shot cinema__shot--small" delay={90}>
              <ImageFrame src={cinema.images.secondary} alt={cinema.images.secondaryAlt} ratio="4 / 3" hover sizes="(max-width: 900px) 45vw, 22vw" />
            </Reveal>
            <Reveal variant="image" className="cinema__shot cinema__shot--small" delay={150}>
              <ImageFrame src={cinema.images.tertiary} alt={cinema.images.tertiaryAlt} ratio="4 / 3" hover sizes="(max-width: 900px) 45vw, 22vw" />
            </Reveal>
          </div>

          <div className="cinema__copy">
            <Reveal>
              <p className="cinema__intro">{cinema.intro}</p>
            </Reveal>

            <Reveal delay={60}>
              <ul className="cinema__roles" aria-label="Area yang sedang dipelajari">
                {cinema.roles.map((role) => (
                  <li key={role}>{role}</li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={100}>
              <p className="label cinema__label">Film Inspirations</p>
              <ul className="cinema__films">
                {cinema.touchstones.map((film) => (
                  <li key={film.title}>
                    <span className="cinema__film-title">{film.title}</span>
                    <span className="cinema__film-note">{film.note}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={140}>
              <p className="cinema__note">{cinema.note}</p>
            </Reveal>
          </div>
        </div>

        <div className="cinema__craft">
          {cinema.craft.map((item, index) => (
            <Reveal as="article" className="cinema__craft-item" key={item.title} delay={(index % 3) * 60}>
              <span className="cinema__craft-index">{item.index}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
