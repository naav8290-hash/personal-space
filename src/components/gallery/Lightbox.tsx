import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import type { GalleryItem } from '../../data/types'
import { imageMeta } from '../../lib/images'
import { ChevronLeft, ChevronRight, CloseIcon } from '../ui/Icons'

type LightboxProps = {
  items: GalleryItem[]
  index: number
  onClose: () => void
  onNavigate: (index: number) => void
}

export default function Lightbox({ items, index, onClose, onNavigate }: LightboxProps) {
  const dialogRef = useRef<HTMLDivElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)
  const restoreRef = useRef<HTMLElement | null>(null)

  const item = items[index]
  const meta = imageMeta(item.src)
  const count = items.length

  useEffect(() => {
    restoreRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null
    closeRef.current?.focus()
    document.body.classList.add('lightbox-open')

    return () => {
      document.body.classList.remove('lightbox-open')
      restoreRef.current?.focus()
    }
  }, [])

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        onClose()
        return
      }

      if (event.key === 'ArrowRight') {
        event.preventDefault()
        onNavigate((index + 1) % count)
        return
      }

      if (event.key === 'ArrowLeft') {
        event.preventDefault()
        onNavigate((index - 1 + count) % count)
        return
      }

      if (event.key !== 'Tab') return

      const nodes = dialogRef.current?.querySelectorAll<HTMLElement>('button, a[href]')
      if (!nodes || nodes.length === 0) return
      const first = nodes[0]
      const last = nodes[nodes.length - 1]

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [count, index, onClose, onNavigate])

  return createPortal(
    <div
      ref={dialogRef}
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={`Foto ${index + 1} dari ${count} — ${item.title}`}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
    >
      <div className="lightbox__bar">
        <p className="lightbox__meta">
          <span>{item.category}</span>
          <span aria-hidden="true">—</span>
          <span>
            {String(index + 1).padStart(2, '0')} / {String(count).padStart(2, '0')}
          </span>
        </p>
        <button ref={closeRef} type="button" className="lightbox__close" onClick={onClose} aria-label="Tutup galeri">
          <CloseIcon />
        </button>
      </div>

      <div className="lightbox__stage">
        <button
          type="button"
          className="lightbox__nav lightbox__nav--prev"
          onClick={() => onNavigate((index - 1 + count) % count)}
          aria-label="Foto sebelumnya"
        >
          <ChevronLeft />
        </button>

        <figure className="lightbox__figure">
          <img
            key={item.src}
            className="lightbox__img"
            src={item.src}
            alt={item.alt}
            width={meta.width}
            height={meta.height}
            decoding="async"
          />
        </figure>

        <button
          type="button"
          className="lightbox__nav lightbox__nav--next"
          onClick={() => onNavigate((index + 1) % count)}
          aria-label="Foto berikutnya"
        >
          <ChevronRight />
        </button>
      </div>

      <div className="lightbox__foot">
        <div>
          <p className="lightbox__title">{item.title}</p>
          <p className="lightbox__note">
            {item.note} · <span>Use ← → to browse · Esc to close</span>
          </p>
        </div>
        <p className="lightbox__counter" aria-hidden="true">
          No. {String(index + 1).padStart(2, '0')}
        </p>
      </div>
    </div>,
    document.body,
  )
}
