# VINA — Still Becoming

Situs personal space bergaya editorial: majalah, jurnal, arsip cerita, dan catatan yang masih berjalan. Bukan portofolio developer, CV, website perusahaan, atau landing page jasa. Dibangun dengan React + Vite + TypeScript, tanpa backend dan tanpa database.

Tema situs adalah **Still Becoming.** — "Somewhere between who I am and who I'm becoming." Seluruh halaman dirancang seperti buku yang masih ditulis: ada bagian yang selesai, ada yang berupa draf, dan sebagian menunggu diisi.

Bahasa bersifat campuran secara sadar: label struktural, kicker, kategori, tag, kutipan, dan metadata kecil memakai bahasa Inggris; judul, prosa, dan kalimat naratif memakai bahasa Indonesia yang sudah dipoles. Gaya ini meniru majalah cetak — istilah Inggris sebagai penanda rubrik, bahasa Indonesia sebagai suara.

## Menjalankan lewat Laragon

Situs disajikan oleh **Nginx Laragon** di `http://personal-space.test` — bukan oleh dev server Vite.

| Bagian | Lokasi |
| --- | --- |
| Folder proyek | `C:\laragon\www\personal space` |
| Alias tanpa spasi (junction) | `C:\laragon\www\personal-space` |
| Vhost Nginx | `C:\laragon\etc\nginx\sites-enabled\00-personal-space.test.conf` |
| Document root | `C:\laragon\www\personal-space\dist` |

Alur kerja:

```bash
npm run typecheck  # cek TypeScript
npm run build      # typecheck + build ke dist/
```

Setelah build, muat ulang `http://personal-space.test` (hard refresh). Vhost memakai `try_files $uri $uri/ /index.html`, jadi tautan dalam seperti `/stories/...` dan `/journal/...` tetap bekerja saat dibuka langsung.

**Hosts.** Laragon menambahkan `127.0.0.1 personal-space.test` otomatis saat start. Jika belum ada, jalankan Laragon (Stop lalu Start All) atau tambahkan baris tersebut ke hosts melalui Notepad sebagai administrator:

```powershell
Start-Process notepad -Verb RunAs "C:\Windows\System32\drivers\etc\hosts"
```

Catatan: nama folder asli masih mengandung spasi. Junction `personal-space` dibuat agar nama host valid dan konfigurasi Nginx tetap rapi. Jika folder asli suatu saat diubah namanya, buat ulang junction-nya.

### Pengembangan lokal (opsional)

```bash
npm install
npm run dev        # http://localhost:5173 (Vite, hanya untuk pengembangan)
npm run preview    # pratinjau hasil build
```

## Rute

| Rute | Halaman |
| --- | --- |
| `/` | Beranda — Hero, Tentang, Stories, Cinema, Interests, Journey, Gallery, Writing, Favorites, Currently, To Be Continued |
| `/stories` | Arsip cerita dengan filter genre |
| `/stories/:slug` | Pembaca cerita bergaya buku (cover, daftar bab, progres baca, cerita sebelumnya/berikutnya) |
| `/studio` | Story Studio — menulis, mengedit, menghapus draft lokal, dan ekspor JSON |
| `/journal` | Arsip tulisan (esai, puisi, catatan, surat) |
| `/journal/:slug` | Halaman baca tulisan |
| `*` | Halaman 404 |

## Struktur penting

| Lokasi | Isi |
| --- | --- |
| `src/data/site.ts` | Nama, tema "Still Becoming.", tagline, hero, teks Tentang, daftar kepribadian/minat, lokasi, Instagram |
| `src/data/stories.ts` | Empat cerita **DEMO** + daftar genre. Ini contoh format, bukan karya asli |
| `src/data/cinema.ts` | Teks Cinema — film inspirasi, area yang dipelajari, catatan proses |
| `src/data/journey.ts` | Enam bab perjalanan dengan isi placeholder (tanpa tanggal/kejadian karangan) |
| `src/data/interests.ts` | Lima minat + gambar + layout grid |
| `src/data/gallery.ts` | Item galeri + kategori (Portraits, Everyday Moments, Places, Memories, Creative Works, Little Things) |
| `src/data/journal.ts` | Entri tulisan lengkap (judul, tanggal, isi, cover) |
| `src/data/favorites.ts` | Daftar film, buku, musik, karakter, tempat, bahasa, kutipan |
| `src/data/currently.ts` | Isi "These Days" — perbarui berkala |
| `src/data/navigation.ts` | Label navigasi dan id bagian |
| `src/data/types.ts` | Tipe konten: jurnal, perjalanan, galeri, cerita, blok isi |
| `src/lib/storyStore.ts` | Penyimpanan draft cerita di localStorage + util slug/urutan/ekspor |
| `src/data/imageManifest.json` | Dimensi + LQIP gambar, dibuat otomatis |
| `public/images/*` | Foto WebP yang dipakai situs |
| `source-images/` | Foto sumber (PNG) untuk pipeline gambar |
| `src/styles/tokens.css` | Palet, tipografi, spacing, token tema terang/gelap |
| `src/styles/editorial.css` | Gaya khusus Still Becoming: hero, cerita, cinema, reader, studio |

## Menulis dan mengedit cerita

Ada dua lapis penyimpanan, tanpa server:

1. **Cerita DEMO** di `src/data/stories.ts` — contoh format yang bisa dibaca semua orang. Semua diberi `demo: true` sehingga kartu dan pembaca menampilkan label **DEMO**. Untuk menggantinya secara permanen, edit berkas itu (atau ganti dengan cerita sendiri dan hapus label demo).
2. **Draft lokal** lewat `/studio` — tersimpan di `localStorage` peramban (`vina-story-drafts`), hanya terlihat di perangkat itu. Bisa dibuat, diedit, dihapus, dipratinjau, dan diekspor sebagai JSON.

Bentuk satu cerita:

```ts
{
  slug: 'judul-cerita',
  title: 'Judul Cerita',
  genre: 'Mystery',            // Fiction, Short Stories, Romance, Drama,
                               // Mystery, Fantasy, Personal Narratives, Unfinished Stories
  status: 'Draft',             // Demo, Draft, In Progress, Finished
  date: '2026-11-20',          // untuk pengurutan
  displayDate: '20 November 2026',
  readingTime: '5 min read',
  synopsis: 'Satu atau dua kalimat.',
  cover: '/images/journal/night-writing.webp',
  coverAlt: 'Deskripsi gambar.',
  demo: true,                  // hanya untuk contoh
  chapters: [
    {
      title: 'Bab Satu',
      blocks: [
        { type: 'paragraph', text: '...' },
        { type: 'heading', text: '...' },
        { type: 'quote', text: '...', attribution: '...' },
        { type: 'list', items: ['...'] },
      ],
    },
  ],
}
```

Di Story Studio, isi cerita berupa teks biasa; paragraf dipisahkan satu baris kosong dan otomatis menjadi blok paragraf dalam satu bab berjudul "Draft". Untuk cerita banyak bab, susun langsung di `src/data/stories.ts`.

Draft lokal tidak ikut ter-build dan tidak dikirim ke mana pun. Ekspor JSON berguna sebagai cadangan sebelum membersihkan data peramban.

## Mengganti foto

Semua foto saat ini adalah **gambar suasana/placeholder hasil AI — bukan wajah pemilik**. Kategori galeri **Portraits** sengaja dibiarkan kosong sampai foto asli tersedia; halaman menampilkan catatan jujur, bukan wajah pinjaman. Ganti dengan foto asli Vina.

1. Simpan foto asli ke `source-images/` dengan nama berawalan salah satu prefix di `scripts/prepare-images.mjs` (contoh: `gallery-window-light_1.jpg`, `story-childhood_1.jpg`).
2. Jalankan `npm run prepare-images`. Skrip akan mengubah semua gambar ke WebP (kualitas 80, lebar maksimum per target), membuat LQIP, dan menulis ulang `src/data/imageManifest.json`.
3. Jalankan `npm run build` agar Laragon menyajikan gambar terbaru.
4. Simpan atau hapus file sumber lama agar tidak tertukar — skrip memilih file pertama yang cocok dengan prefix.

Jika hanya ingin menukar satu file tanpa pipeline, timpa file di `public/images/...` dengan WebP bernama sama, lalu sesuaikan `width`/`height` di `imageManifest.json` bila rasio fotonya berbeda.

Untuk **foto portrait Tentang**, ganti `<PortraitPlaceholder />` di `src/components/home/About.tsx` dengan `<ImageFrame src="/images/portrait.webp" alt="..." />` setelah foto asli tersedia. Foto hero ada di `site.hero.cover` (`src/data/site.ts`).

## Konten contoh dan aturan kejujuran

- Cerita di `src/data/stories.ts` adalah **contoh berlabel DEMO**; jangan menyajikannya sebagai karya asli Vina. Draft buatan pengunjung hanya tersimpan di peramban mereka.
- Bab perjalanan di `src/data/journey.ts` sengaja berisi placeholder. Jangan menambahkan tanggal, sekolah, prestasi, atau kejadian yang belum benar-benar terjadi.
- Entri jurnal, daftar favorit, dan isi "These Days" adalah contoh/draf untuk menunjukkan suasana; ganti dengan tulisan dan pilihan Vina sendiri.
- Bagian Tentang memakai placeholder yang jujur ("sebuah potret, masih ditunggu", tahun lahir, satu kata sifat). Isi hanya informasi yang benar.
- Nomor telepon tidak ditampilkan; kontak publik memakai Instagram `@vin_vjr`.

## Tema & desain

- Tema terang/gelap disimpan di `localStorage` (`vina-theme`), mengikuti `prefers-color-scheme` saat pertama dibuka. Mode gelap dirancang sebagai jurnal sastra klasik (maroon, near-black, ivory), bukan inversi sederhana.
- Warna, font, dan skala tipografi diatur lewat custom property di `src/styles/tokens.css`.
- Gaya halaman baru (cerita, cinema, studio, reader) ada di `src/styles/editorial.css`.
- Animasi menghormati `prefers-reduced-motion`.
- Font di-host sendiri: Playfair Display (judul editorial), Cormorant Garamond (aksen italic & prosa), DM Sans (teks), Inter (label dan UI).
- Palet: Burgundy `#591C2B`, Deep Maroon `#35131D`, Near Black `#171515`, Warm Ivory `#F2EEE7`, Antique White `#E7DFD3`, Muted Gray `#99918B`.

## Publikasi

`npm run build` menghasilkan folder `dist/` yang bisa diunggah ke hosting statis apa pun (Netlify, Vercel, Cloudflare Pages, GitHub Pages). Karena memakai React Router, arahkan semua rute ke `index.html` (SPA fallback) — persis seperti vhost Nginx Laragon di atas. Draft cerita dari `/studio` tersimpan di peramban pengunjung, bukan di server, jadi tidak ikut ter-publish.
