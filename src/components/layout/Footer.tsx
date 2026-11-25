import { Link } from 'react-router-dom'
import { site } from '../../data/site'

const footerLinks = [
  { label: 'Tentang', to: '/#about' },
  { label: 'Cerita', to: '/stories' },
  { label: 'Film', to: '/#cinema' },
  { label: 'Minat', to: '/#interests' },
  { label: 'Galeri', to: '/#gallery' },
  { label: 'Tulisan', to: '/journal' },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <span className="footer__mark">Vina</span>
          <p className="footer__tag">{site.tagline}</p>
        </div>

        <nav className="footer__nav" aria-label="Kaki halaman">
          {footerLinks.map((link) => (
            <Link key={link.label} to={link.to}>
              {link.label}
            </Link>
          ))}
          <Link to="/studio">Studio</Link>
        </nav>

        <p className="footer__meta">
          © MMXXVI {site.name}
          <span>{site.location}</span>
        </p>

        <div className="footer__rule">
          <span>Still becoming · Est. 2008</span>
          <span>Set in Playfair Display, Cormorant Garamond, DM Sans &amp; Inter</span>
        </div>
      </div>
    </footer>
  )
}
