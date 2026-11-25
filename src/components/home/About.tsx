import { site } from '../../data/site'
import SectionHead from '../ui/SectionHead'
import PortraitPlaceholder from '../ui/PortraitPlaceholder'
import Reveal from '../ui/Reveal'

const groups = [site.about.personality, site.about.enjoy, site.about.discovering]

export default function About() {
  return (
    <section className="section about" id="about">
      <div className="container">
        <SectionHead
          index="01"
          label={site.about.kicker}
          title={
            <>
              Perhaps I’m Still <em>Figuring It Out.</em>
            </>
          }
          aside={site.sectionIntros.about}
        />

        <div className="about__grid">
          <Reveal className="about__portrait">
            <PortraitPlaceholder />
          </Reveal>

          <div className="about__body">
            <Reveal>
              <p className="about__lead">{site.about.lead}</p>
            </Reveal>

            <Reveal delay={60}>
              <blockquote className="about__quote">
                <p>{site.about.quote.text}</p>
                <cite>{site.about.quote.source}</cite>
              </blockquote>
            </Reveal>

            {site.about.paragraphs.map((paragraph, index) => (
              <Reveal key={paragraph.slice(0, 24)} delay={80 + index * 40}>
                <p className="about__text">{paragraph}</p>
              </Reveal>
            ))}

            <Reveal className="about__lists" delay={120}>
              {groups.map((group) => (
                <div className="about__list" key={group.label}>
                  <p className="label">{group.label}</p>
                  <ul>
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </Reveal>

            <Reveal className="about__details" delay={140}>
              <p className="label">At a Glance</p>
              <dl>
                {site.about.details.map((detail) => (
                  <div className="about__detail" key={detail.label}>
                    <dt>{detail.label}</dt>
                    <dd>{detail.value}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>

            <Reveal className="about__closing" delay={100}>
              <p className="about__note">{site.about.note}</p>
              <p className="about__sign">{site.shortName}</p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
