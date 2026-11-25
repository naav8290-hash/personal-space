import { site } from '../../data/site'

type PortraitPlaceholderProps = {
  caption?: string
  className?: string
  compact?: boolean
}

export default function PortraitPlaceholder({
  caption = site.about.portraitCaption,
  className = '',
  compact = false,
}: PortraitPlaceholderProps) {
  return (
    <figure className={`portrait${className ? ` ${className}` : ''}`}>
      <div className="portrait__plate" role="img" aria-label="Placeholder potret — foto pribadi akan ditambahkan di sini.">
        <div className="portrait__top">
          <span>{site.shortName} — portrait</span>
          <span>MMXXVI</span>
        </div>
        <div className="portrait__center">
          <span className="portrait__monogram" aria-hidden="true">
            {site.monogram}
          </span>
          {!compact && (
            <>
              <p className="portrait__line">Sebuah potret, masih ditunggu.</p>
              <p className="portrait__note">
                Bingkai ini disediakan untuk foto pribadi — ditambahkan dengan tangan, tidak pernah dipinjam.
              </p>
            </>
          )}
        </div>
        <div className="portrait__bottom">
          <span>Plate 01</span>
          <span>Jawa Barat</span>
        </div>
      </div>
      <figcaption className="portrait__caption">
        <span>{caption}</span>
        <span>To be replaced</span>
      </figcaption>
    </figure>
  )
}
