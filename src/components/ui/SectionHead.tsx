import type { ReactNode } from 'react'

type SectionHeadProps = {
  index: string
  label: string
  title: ReactNode
  aside?: string
  tone?: 'default' | 'band'
}

export default function SectionHead({ index, label, title, aside, tone = 'default' }: SectionHeadProps) {
  return (
    <header className={`section-head${tone === 'band' ? ' section-head--band' : ''}`}>
      <div className="section-head__rail">
        <span className="section-head__index">{index}</span>
      </div>
      <div>
        <p className="label section-head__label">{label}</p>
        <h2 className="section-head__title">{title}</h2>
      </div>
      {aside ? <p className="section-head__aside">{aside}</p> : null}
    </header>
  )
}
