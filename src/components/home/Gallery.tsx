import { useMemo, useState } from 'react'
import { galleryCategories, galleryItems } from '../../data/gallery'
import { site } from '../../data/site'
import { imageMeta } from '../../lib/images'
import SectionHead from '../ui/SectionHead'
import Reveal from '../ui/Reveal'
import Lightbox from '../gallery/Lightbox'

type Category = (typeof galleryCategories)[number]

export default function Gallery() {
  const [filter, setFilter] = useState<Category>('All')
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const filtered = useMemo(
    () => (filter === 'All' ? galleryItems : galleryItems.filter((item) => item.category === filter)),
    [filter],
  )

  const selectFilter = (category: Category) => {
    setFilter(category)
    setLightboxIndex(null)
  }

  return (
    <section className="section gallery" id="gallery">
      <div className="container">
        <SectionHead
          index="06"
          label="The Gallery"
          title={
            <>
              Fragments <em>of My World</em>
            </>
          }
          aside={site.sectionIntros.gallery}
        />

        <div className="gallery__bar">
          <div className="gallery__filters" role="group" aria-label="Saring foto berdasarkan kategori">
            {galleryCategories.map((category) => (
              <button
                type="button"
                key={category}
                className={`gallery__filter${filter === category ? ' is-active' : ''}`}
                aria-pressed={filter === category}
                onClick={() => selectFilter(category)}
              >
                {category}
                <span className="gallery__filter-count">
                  {category === 'All'
                    ? galleryItems.length
                    : galleryItems.filter((item) => item.category === category).length}
                </span>
              </button>
            ))}
          </div>
          <p className="gallery__count" aria-live="polite">
            {String(filtered.length).padStart(2, '0')} frames
          </p>
        </div>

        {filtered.length === 0 ? (
          <div className="gallery__empty">
            <p className="gallery__empty-title">A portrait is still to come.</p>
            <p className="gallery__empty-note">
              Kategori ini menunggu foto asli. Saya tidak menempatkan wajah pinjaman atau gambar stok di sini —
              hanya potret yang benar-benar milik saya.
            </p>
          </div>
        ) : (
          <div className="gallery__grid" key={filter}>
            {filtered.map((item, index) => {
              const meta = imageMeta(item.src)
              return (
                <button
                  type="button"
                  className="gallery__item"
                  key={item.id}
                  onClick={() => setLightboxIndex(index)}
                  aria-label={`Buka foto: ${item.title}, ${item.category}`}
                >
                  <Reveal
                    as="span"
                    variant="image"
                    className="gallery__media"
                    delay={(index % 3) * 60}
                    style={{
                      aspectRatio: `${meta.width} / ${meta.height}`,
                      backgroundImage: meta.lqip ? `url("${meta.lqip}")` : undefined,
                    }}
                  >
                    <img
                      src={item.src}
                      alt={item.alt}
                      width={meta.width}
                      height={meta.height}
                      loading="lazy"
                      decoding="async"
                      sizes="(max-width: 640px) 100vw, (max-width: 1100px) 50vw, 33vw"
                    />
                    <span className="gallery__index" aria-hidden="true">
                      No. {String(index + 1).padStart(2, '0')}
                    </span>
                  </Reveal>
                  <span className="gallery__cap">
                    <span className="gallery__title">{item.title}</span>
                    <span className="gallery__meta">{item.category}</span>
                  </span>
                  <span className="gallery__note">{item.note}</span>
                </button>
              )
            })}
          </div>
        )}
      </div>

      {lightboxIndex !== null ? (
        <Lightbox
          items={filtered}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />
      ) : null}
    </section>
  )
}
