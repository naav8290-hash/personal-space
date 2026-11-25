import { interests } from '../../data/interests'
import { site } from '../../data/site'
import SectionHead from '../ui/SectionHead'
import ImageFrame from '../ui/ImageFrame'
import Reveal from '../ui/Reveal'

export default function Interests() {
  return (
    <section className="section section--tint interests" id="interests">
      <div className="container">
        <SectionHead
          index="03"
          label="Interests"
          title={
            <>
              Hal-hal yang <em>Saya Minati</em>
            </>
          }
          aside={site.sectionIntros.interests}
        />

        <div className="interests__grid">
          {interests.map((interest, index) => (
            <Reveal
              as="article"
              className={`interest interest--${interest.layout}`}
              key={interest.index}
              delay={(index % 3) * 70}
            >
              <ImageFrame
                src={interest.image}
                alt={interest.imageAlt}
                ratio={interest.ratio}
                hover
                sizes="(max-width: 700px) 100vw, 50vw"
              />
              <div className="interest__head">
                <span className="interest__index">{interest.index}</span>
                <h3>{interest.title}</h3>
                <span className="interest__meta">{interest.meta}</span>
              </div>
              <p className="interest__text">{interest.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
