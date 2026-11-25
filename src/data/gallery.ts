import type { GalleryItem } from './types'

// Foto-foto ini adalah placeholder editorial, bukan potret pribadi.
// Ganti file di public/images/gallery/ dengan hasil pindaian film Anda sendiri.
// Kategori "Portraits" sengaja kosong sampai foto asli tersedia.
export const galleryItems: GalleryItem[] = [
  {
    id: 'window-light',
    src: '/images/gallery/window-light.webp',
    alt: 'Cahaya sore melintasi dinding plester gading dengan tirai linen dan bayangan bunga kering.',
    title: 'Pagi yang Dipinjam',
    category: 'Little Things',
    note: 'Cahaya, sebelum hari dimulai',
  },
  {
    id: 'coastal-road',
    src: '/images/gallery/coastal-road.webp',
    alt: 'Jalan pesisir kosong saat senja melengkung menuju laut berkabut di bawah langit kelabu dan merah muda berdebu.',
    title: 'Jalan Pesisir, Senja',
    category: 'Places',
    note: 'Entah di mana',
  },
  {
    id: 'open-book',
    src: '/images/gallery/open-book.webp',
    alt: 'Tangan memegang buku tua yang terbuka dengan catatan pensil di margin dalam cahaya jendela yang hangat.',
    title: 'Buku Pinjaman',
    category: 'Everyday Moments',
    note: 'Kebanyakan di margin',
  },
  {
    id: 'film-camera',
    src: '/images/gallery/film-camera.webp',
    alt: 'Kamera film 35mm tua di atas linen kusut di samping potongan film dan benda kuningan kecil.',
    title: 'Kamera yang Tinggal',
    category: 'Creative Works',
    note: 'Instrumen yang tenang',
  },
  {
    id: 'rain-window',
    src: '/images/gallery/rain-window.webp',
    alt: 'Hujan mengalir di jendela gelap pada malam hari dengan cahaya jalan kuning dan merah anggur yang kabur di kejauhan.',
    title: 'Hujan, Pukul Sebelas',
    category: 'Memories',
    note: 'Suara tinggal di dalam',
  },
  {
    id: 'dried-roses',
    src: '/images/gallery/dried-roses.webp',
    alt: 'Mawar merah muda kering dalam vas kaca ambar kecil di atas meja kayu gelap dalam cahaya senja.',
    title: 'Mawar yang Terlalu Lama Disimpan',
    category: 'Little Things',
    note: 'Tentang menyimpan',
  },
  {
    id: 'train-window',
    src: '/images/gallery/train-window.webp',
    alt: 'Pemandangan melalui jendela kereta ke gunung berkabut saat fajar, dengan tiket terlipat dan buku catatan di depan.',
    title: 'Ke Utara, 06.12',
    category: 'Places',
    note: 'Di antara dua stasiun',
  },
  {
    id: 'old-books',
    src: '/images/gallery/old-books.webp',
    alt: 'Tumpukan buku kain tua dengan surat tulisan tangan dan kacamata baca bulat di atas meja kayu.',
    title: 'Surat dan Kertas',
    category: 'Little Things',
    note: 'Hal-hal yang bertahan lebih lama dari tab',
  },
  {
    id: 'bicycle-alley',
    src: '/images/gallery/bicycle-alley.webp',
    alt: 'Sepeda hitam tua bersandar di dinding kuning tua di gang sunyi dalam cahaya keemasan.',
    title: 'Gang pada September',
    category: 'Everyday Moments',
    note: 'Diambil dalam perjalanan pulang',
  },
  {
    id: 'darkroom',
    src: '/images/gallery/darkroom.webp',
    alt: 'Negatif film tergantung di tali di kamar gelap yang redup di bawah lampu pengaman kuning.',
    title: 'Di Bawah Lampu Ambar',
    category: 'Creative Works',
    note: 'Kesabaran, dalam warna ambar',
  },
  {
    id: 'morning-desk',
    src: '/images/gallery/morning-desk.webp',
    alt: 'Meja pagi dengan buku catatan krem terbuka, pulpen, cangkir kopi, dan eukaliptus kering.',
    title: 'Pagi yang Lambat',
    category: 'Everyday Moments',
    note: 'Satu halaman demi satu',
  },
]

export const galleryCategories = [
  'All',
  'Portraits',
  'Everyday Moments',
  'Places',
  'Memories',
  'Creative Works',
  'Little Things',
] as const

export type GalleryFilter = (typeof galleryCategories)[number]
