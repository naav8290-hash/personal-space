import { site } from '../../data/site'
import Reveal from '../ui/Reveal'
import { ArrowRight, ArrowUp } from '../ui/Icons'

export default function Contact() {
  const scrollToTop = () => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    window.scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' })
  }

  return (
    <section className="contact" id="contact">
      <div className="container contact__inner">
        <Reveal className="contact__head">
          <span className="label contact__label">To Be Continued — 10</span>
          <span className="contact__rule" aria-hidden="true" />
        </Reveal>

        <Reveal>
          <h2 className="contact__quote">
            This is not the whole story. <em>Just a few pages of who I am</em> — and there are still many more
            to come.
          </h2>
        </Reveal>

        <Reveal className="contact__actions" delay={80}>
          <p className="contact__invite">Every story has another page.</p>
          <div className="contact__links">
            <a
              className="link-arrow contact__link"
              href={site.instagram.url}
              target="_blank"
              rel="noreferrer"
            >
              Instagram — {site.instagram.handle}
              <ArrowRight />
            </a>
            <button type="button" className="link-arrow contact__link" onClick={scrollToTop}>
              Back to the Beginning
              <ArrowUp />
            </button>
          </div>
        </Reveal>

        <Reveal className="contact__sign" delay={120}>
          <span className="contact__monogram" aria-hidden="true">
            V
          </span>
          <div>
            <p className="contact__name">{site.name}</p>
            <p className="contact__place">Still becoming · {site.location} · MMXXVI</p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
