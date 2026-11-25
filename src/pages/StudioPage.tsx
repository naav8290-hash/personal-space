import { useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import type { Story, StoryGenre, StoryStatus } from '../data/types'
import { demoStories, storyGenres } from '../data/stories'
import {
  createDraft,
  deleteDraft,
  draftBody,
  exportDrafts,
  loadDrafts,
  storyCoverOptions,
  updateDraft,
  type StoryInput,
} from '../lib/storyStore'
import PageMeta from '../components/ui/PageMeta'
import Reveal from '../components/ui/Reveal'
import { ArrowRight } from '../components/ui/Icons'

const emptyForm: StoryInput = {
  title: '',
  genre: 'Fiction',
  status: 'Draft',
  synopsis: '',
  body: '',
  cover: storyCoverOptions[0].src,
  coverAlt: storyCoverOptions[0].alt,
}

const editableStatuses: StoryStatus[] = ['Draft', 'In Progress', 'Finished']

export default function StudioPage() {
  const [drafts, setDrafts] = useState<Story[]>(() => loadDrafts())
  const [editingSlug, setEditingSlug] = useState<string | null>(null)
  const [form, setForm] = useState<StoryInput>(emptyForm)
  const [message, setMessage] = useState('')

  const refresh = () => setDrafts(loadDrafts())

  const setField = <K extends keyof StoryInput>(key: K, value: StoryInput[K]) => {
    setForm((current) => ({ ...current, [key]: value }))
    setMessage('')
  }

  const startNew = () => {
    setEditingSlug(null)
    setForm(emptyForm)
    setMessage('')
  }

  const startEdit = (story: Story) => {
    setEditingSlug(story.slug)
    setForm({
      title: story.title,
      genre: story.genre,
      status: story.status === 'Demo' ? 'Draft' : story.status,
      synopsis: story.synopsis,
      body: draftBody(story),
      cover: story.cover,
      coverAlt: story.coverAlt,
    })
    setMessage('')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!form.title.trim() || !form.body.trim()) {
      setMessage('Judul dan isi cerita belum boleh kosong.')
      return
    }

    if (editingSlug) {
      const updated = updateDraft(editingSlug, form)
      setEditingSlug(updated?.slug ?? null)
      setMessage('Draft diperbarui dan tersimpan di peramban ini.')
    } else {
      const created = createDraft(form)
      setEditingSlug(created.slug)
      setMessage('Draft baru tersimpan di peramban ini.')
    }
    refresh()
  }

  const remove = (story: Story) => {
    const confirmed = window.confirm(`Hapus draft “${story.title}”? Tindakan ini tidak bisa dibatalkan.`)
    if (!confirmed) return
    deleteDraft(story.slug)
    if (editingSlug === story.slug) startNew()
    refresh()
    setMessage('Draft dihapus.')
  }

  const download = () => {
    const blob = new Blob([exportDrafts()], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const anchor = document.createElement('a')
    anchor.href = url
    anchor.download = 'vina-story-drafts.json'
    anchor.click()
    URL.revokeObjectURL(url)
  }

  return (
    <>
      <PageMeta
        title="Story Studio — VINA"
        description="Ruang privat untuk menulis dan mengedit draft cerita. Tersimpan lokal di peramban, tanpa server."
      />

      <header className="page-head">
        <div className="container">
          <Reveal>
            <p className="label page-head__label">Story Studio — Private</p>
            <h1 className="page-head__title">
              Write the Next <em>Page</em>
            </h1>
          </Reveal>
          <div className="page-head__row">
            <Reveal delay={80}>
              <p className="page-head__intro">
                Studio kecil untuk menyimpan draft cerita. Semua yang ditulis di sini hanya tersimpan di
                peramban ini — tidak dikirim ke mana pun, dan tidak terlihat publik sampai kamu membagikannya
                sendiri.
              </p>
            </Reveal>
            <Reveal className="page-head__meta" delay={120}>
              <span>{String(drafts.length).padStart(2, '0')} local drafts</span>
              <span>No account · no server</span>
              <Link to="/stories" className="link-arrow">
                All stories
                <ArrowRight />
              </Link>
            </Reveal>
          </div>
        </div>
      </header>

      <section className="studio">
        <div className="container studio__grid">
          <Reveal className="studio__panel">
            <div className="studio__panel-head">
              <p className="label">{editingSlug ? 'Editing draft' : 'New draft'}</p>
              {editingSlug ? (
                <button type="button" className="studio__text-button" onClick={startNew}>
                  Start a new draft
                </button>
              ) : null}
            </div>

            <form className="studio__form" onSubmit={submit}>
              <label className="studio__field">
                <span>Title</span>
                <input
                  type="text"
                  value={form.title}
                  onChange={(event) => setField('title', event.target.value)}
                  placeholder="Judul cerita"
                  maxLength={120}
                />
              </label>

              <div className="studio__row">
                <label className="studio__field">
                  <span>Genre</span>
                  <select value={form.genre} onChange={(event) => setField('genre', event.target.value as StoryGenre)}>
                    {storyGenres.map((genre) => (
                      <option key={genre} value={genre}>
                        {genre}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="studio__field">
                  <span>Status</span>
                  <select
                    value={form.status}
                    onChange={(event) => setField('status', event.target.value as StoryStatus)}
                  >
                    {editableStatuses.map((status) => (
                      <option key={status} value={status}>
                        {status}
                      </option>
                    ))}
                  </select>
                </label>
              </div>

              <label className="studio__field">
                <span>Synopsis</span>
                <textarea
                  value={form.synopsis}
                  onChange={(event) => setField('synopsis', event.target.value)}
                  placeholder="Satu atau dua kalimat tentang cerita ini."
                  rows={3}
                  maxLength={320}
                />
              </label>

              <label className="studio__field">
                <span>Cover placeholder</span>
                <select
                  value={form.cover}
                  onChange={(event) => {
                    const option = storyCoverOptions.find((item) => item.src === event.target.value)
                    setField('cover', event.target.value)
                    if (option) setField('coverAlt', option.alt)
                  }}
                >
                  {storyCoverOptions.map((option) => (
                    <option key={option.src} value={option.src}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </label>

              <label className="studio__field">
                <span>Story</span>
                <textarea
                  value={form.body}
                  onChange={(event) => setField('body', event.target.value)}
                  placeholder={'Tulis cerita di sini.\n\nPisahkan paragraf dengan satu baris kosong.'}
                  rows={14}
                />
              </label>

              <div className="studio__actions">
                <button type="submit" className="btn">
                  {editingSlug ? 'Save changes' : 'Save draft'}
                  <ArrowRight />
                </button>
                {editingSlug ? (
                  <Link className="link-arrow" to={`/stories/${editingSlug}`}>
                    Preview
                    <ArrowRight />
                  </Link>
                ) : null}
              </div>

              <p className="studio__message" role="status">
                {message}
              </p>
            </form>
          </Reveal>

          <aside className="studio__aside">
            <Reveal className="studio__list">
              <div className="studio__panel-head">
                <p className="label">Local drafts</p>
                <button type="button" className="studio__text-button" onClick={download} disabled={drafts.length === 0}>
                  Export JSON
                </button>
              </div>

              {drafts.length === 0 ? (
                <p className="studio__empty">Belum ada draft. Mulailah dari formulir di samping.</p>
              ) : (
                <ul>
                  {drafts.map((draft) => (
                    <li key={draft.slug} className="studio__draft">
                      <div>
                        <p className="studio__draft-title">{draft.title}</p>
                        <p className="studio__draft-meta">
                          {draft.genre} · {draft.status} · {draft.readingTime}
                        </p>
                      </div>
                      <div className="studio__draft-actions">
                        <Link to={`/stories/${draft.slug}`}>Preview</Link>
                        <button type="button" onClick={() => startEdit(draft)}>
                          Edit
                        </button>
                        <button type="button" onClick={() => remove(draft)}>
                          Delete
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </Reveal>

            <Reveal className="studio__list" delay={60}>
              <p className="label">Demo stories — read only</p>
              <ul>
                {demoStories.map((story) => (
                  <li key={story.slug} className="studio__draft studio__draft--demo">
                    <div>
                      <p className="studio__draft-title">{story.title}</p>
                      <p className="studio__draft-meta">
                        {story.genre} · {story.readingTime}
                      </p>
                    </div>
                    <div className="studio__draft-actions">
                      <Link to={`/stories/${story.slug}`}>Read</Link>
                    </div>
                  </li>
                ))}
              </ul>
              <p className="studio__hint">
                Demo tidak bisa diedit di sini. Untuk menggantinya secara permanen, edit
                <code> src/data/stories.ts</code>.
              </p>
            </Reveal>
          </aside>
        </div>
      </section>
    </>
  )
}
