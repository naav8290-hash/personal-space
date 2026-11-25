import { useEffect, useRef } from 'react'
import { site } from '../../data/site'
import ImageFrame from '../ui/ImageFrame'
import { ArrowRight } from '../ui/Icons'

export default function Hero() {
  const visualRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if (window.innerWidth < 900) return

    let frame = 0
    const onScroll = () => {
      window.cancelAnimationFrame(frame)
      frame = window.requestAnimationFrame(() => {
        const shift = Math.min(window.scrollY * 0.05, 34)
        visualRef.current?.style.setProperty('--hero-shift', `${shift}px`)
      })
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <section className="hero" id="top">
      <div className="hero__side" aria-hidden="true">
        Stories · Thoughts · Archive · Becoming
      </div>

      <div className="container hero__inner">
        <div className="hero__meta">
          <span>A Personal Space</span>
          <span>Est. 2008</span>
          <span>Personal Archive — MMXXVI</span>
        </div>

        <div className="hero__grid">
          <div className="hero__copy">
            <p className="label hero__eyebrow">{site.hero.eyebrow}</p>

            <h1 className="hero__name">
              <span className="hero__name-first">Vina</span>
              <span className="hero__name-last">Nuraini</span>
            </h1>

            <p className="hero__theme">{site.theme}</p>
            <p className="hero__tagline">{site.tagline}</p>
            <p className="hero__desc">{site.hero.description}</p>
            <p className="hero__intro">{site.hero.intro}</p>

            <div className="hero__actions">
              <a className="btn" href="#stories">
                Explore My World
                <ArrowRight />
              </a>
              <a className="btn btn--ghost" href="#about">
                A Little Introduction
                <ArrowRight />
              </a>
            </div>

            <div className="hero__foot">
              <span>Vol. I</span>
              <span>{site.hero.date}</span>
              <span className="hero__foot-loc">{site.location}</span>
            </div>
          </div>

          <div className="hero__visual" ref={visualRef}>
            <ImageFrame
              src={site.hero.cover}
              alt={site.hero.coverAlt}
              ratio="4 / 5"
              className="hero__frame"
              eager
              priority
              sizes="(max-width: 900px) 92vw, 42vw"
              caption={
                <>
                  <span className="frame__cap-index">Plate I</span>
                  <em>The reading room — interim cover</em>
                </>
              }
            />
            <div className="hero__seal" aria-hidden="true">
              <span className="hero__seal-mark">V</span>
              <span className="hero__seal-text">Still becoming</span>
            </div>
          </div>
        </div>

        <a className="hero__scroll" href="#about" aria-label="Gulir ke bagian tentang">
          <span>Scroll</span>
          <span className="hero__scroll-line" aria-hidden="true" />
        </a>
      </div>
    </section>
  )
}
