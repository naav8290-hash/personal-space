import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { navItems } from '../../data/navigation'
import { site } from '../../data/site'
import ThemeToggle from '../ui/ThemeToggle'
import { ArrowRight } from '../ui/Icons'

const spySectionIds = [
  'top',
  'about',
  'stories',
  'cinema',
  'interests',
  'journey',
  'gallery',
  'writing',
  'favorites',
  'currently',
]

function targetFor(item: (typeof navItems)[number]) {
  return item.hash ? `/#${item.hash}` : item.to
}

export default function Navbar() {
  const { pathname, hash } = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [activeId, setActiveId] = useState('top')
  const menuRef = useRef<HTMLDivElement>(null)
  const burgerRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname, hash])

  useEffect(() => {
    document.body.classList.toggle('menu-open', open)
    return () => document.body.classList.remove('menu-open')
  }, [open])

  useEffect(() => {
    if (!open) return

    const focusMenu = window.requestAnimationFrame(() => {
      const firstLink = menuRef.current?.querySelector<HTMLElement>('a, button')
      firstLink?.focus()
    })

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
        burgerRef.current?.focus()
        return
      }

      if (event.key !== 'Tab') return

      const nodes: HTMLElement[] = []
      const themeToggle = document.querySelector<HTMLElement>('.theme-toggle')
      if (themeToggle) nodes.push(themeToggle)
      if (burgerRef.current) nodes.push(burgerRef.current)
      menuRef.current?.querySelectorAll<HTMLElement>('a[href], button').forEach((node) => nodes.push(node))

      if (nodes.length === 0) return
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
    return () => {
      window.cancelAnimationFrame(focusMenu)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  useEffect(() => {
    if (pathname !== '/') {
      setActiveId('')
      return
    }

    const sections = spySectionIds
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => Boolean(element))

    if (sections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visible[0]) {
          setActiveId(visible[0].target.id)
        }
      },
      { rootMargin: '-42% 0px -48% 0px', threshold: [0, 0.2, 0.5, 1] },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [pathname])

  const isJournalRoute = pathname.startsWith('/journal')
  const solid = scrolled || pathname !== '/' || open

  const isActive = (item: (typeof navItems)[number]) => {
    if (item.hash) {
      if (pathname !== '/') return false
      if (item.hash === 'top') return activeId === 'top'
      return activeId === item.hash
    }
    return isJournalRoute
  }

  return (
    <>
      <header className={`nav${solid ? ' nav--solid' : ''}${open ? ' nav--open' : ''}`}>
        <div className="nav__inner">
          <Link className="nav__logo" to="/" aria-label="Vina — kembali ke beranda">
            <span className="nav__logo-mark">Vina</span>
            <span className="nav__logo-sub">Still Becoming</span>
          </Link>

          <nav aria-label="Utama">
            <ul className="nav__links">
              {navItems.map((item) => (
                <li key={item.label}>
                  <Link
                    className="nav__link"
                    to={targetFor(item)}
                    aria-current={isActive(item) ? 'page' : undefined}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="nav__actions">
            <ThemeToggle />
            <button
              ref={burgerRef}
              type="button"
              className={`nav__burger${open ? ' is-open' : ''}`}
              aria-label={open ? 'Tutup menu' : 'Buka menu'}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((value) => !value)}
            >
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      <div
        ref={menuRef}
        id="mobile-menu"
        className={`menu${open ? ' is-open' : ''}`}
        role="dialog"
        aria-modal={open ? 'true' : undefined}
        aria-label="Menu situs"
        aria-hidden={!open}
      >
        <div className="menu__inner">
          <p className="label menu__label">Index — MMXXVI</p>
          <nav className="menu__nav" aria-label="Seluler">
            {navItems.map((item, index) => (
              <Link
                key={item.label}
                className="menu__link"
                to={targetFor(item)}
                aria-current={isActive(item) ? 'page' : undefined}
                onClick={() => setOpen(false)}
              >
                <span className="menu__num" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="menu__title">{item.label}</span>
                <ArrowRight />
              </Link>
            ))}
          </nav>
          <div className="menu__foot">
            <div>
              <p>{site.location}</p>
              <a href={site.instagram.url} target="_blank" rel="noreferrer">
                Instagram — {site.instagram.handle}
              </a>
            </div>
            <p>© MMXXVI {site.shortName}</p>
          </div>
        </div>
      </div>
    </>
  )
}
