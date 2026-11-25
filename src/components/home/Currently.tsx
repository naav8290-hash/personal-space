import { currently } from '../../data/currently'
import Reveal from '../ui/Reveal'

export default function Currently() {
  return (
    <section className="section now" id="currently">
      <div className="container">
        <div className="now__grid">
          <header className="now__head">
            <p className="label now__label">Currently — 09</p>
            <h2 className="now__title">
              These <em>Days</em>
            </h2>
            <p className="now__intro">{currently.intro}</p>
            <p className="now__updated">Last updated — {currently.updated}</p>
          </header>

          <div className="now__list">
            {currently.entries.map((entry, index) => (
              <Reveal as="article" className="now__item" key={entry.label} delay={(index % 2) * 70}>
                <span className="now__num">{String(index + 1).padStart(2, '0')}</span>
                <h3>{entry.label}</h3>
                <p>{entry.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
