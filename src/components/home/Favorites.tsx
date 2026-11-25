import { favoriteGroups, favoriteQuotes } from '../../data/favorites'
import { site } from '../../data/site'
import SectionHead from '../ui/SectionHead'
import Reveal from '../ui/Reveal'

export default function Favorites() {
  return (
    <section className="section favorites" id="favorites">
      <div className="container">
        <SectionHead
          index="08"
          label="Favorites"
          title={
            <>
              Little Things <em>I Love</em>
            </>
          }
          aside={site.sectionIntros.favorites}
        />

        <div className="favorites__grid">
          {favoriteGroups.map((group, index) => (
            <Reveal as="article" className="fav" key={group.label} delay={(index % 2) * 60}>
              <header className="fav__head">
                <span className="fav__index">{group.index}</span>
                <h3>{group.label}</h3>
              </header>
              <ul className="fav__list">
                {group.items.map((item) => (
                  <li key={item.title}>
                    <span className="fav__title">{item.title}</span>
                    <span className="fav__meta">{item.meta}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}

          <div className="fav-quotes">
            <p className="label fav-quotes__label">Favorite Quotes</p>
            {favoriteQuotes.map((quote) => (
              <Reveal as="blockquote" className="fav-quote" key={quote.text}>
                <p>{quote.text}</p>
                <cite>— {quote.meta}</cite>
              </Reveal>
            ))}
          </div>
        </div>

        <p className="favorites__note">A living list — urutannya berubah mengikuti musim dan suasana.</p>
      </div>
    </section>
  )
}
