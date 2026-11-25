import { Link } from 'react-router-dom'
import PageMeta from '../components/ui/PageMeta'
import { ArrowRight } from '../components/ui/Icons'

export default function NotFoundPage() {
  return (
    <>
      <PageMeta
        title="Halaman tidak ditemukan — VINA"
        description="Halaman ini tampaknya telah sunyi. Kembali ke ruang pribadi Vina."
      />
      <section className="notfound">
        <div className="container notfound__inner">
          <p className="label">Error 404</p>
          <p className="notfound__code" aria-hidden="true">
            404
          </p>
          <h1 className="notfound__title">
            Halaman ini telah <em>sunyi.</em>
          </h1>
          <p className="notfound__text">
            Halaman yang Anda cari mungkin telah dipindahkan, atau mungkin memang tidak pernah ditulis.
            Bagaimanapun, arsipnya masih di sini.
          </p>
          <Link className="btn" to="/">
            Kembali ke awal
            <ArrowRight />
          </Link>
        </div>
      </section>
    </>
  )
}
