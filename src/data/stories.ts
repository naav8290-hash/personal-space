import type { Story } from './types'

// Cerita contoh. Semua ditandai DEMO — bukan karya asli Vina.
// Ganti isi file ini dengan cerita Anda sendiri, atau tambahkan lewat /studio.
export const demoStories: Story[] = [
  {
    slug: 'kamar-nomor-tujuh',
    title: 'Kamar Nomor Tujuh',
    genre: 'Mystery',
    status: 'Demo',
    demo: true,
    date: '2026-10-02',
    displayDate: '2 Oktober 2026',
    readingTime: '6 min read',
    synopsis:
      'Seorang tamu kembali ke penginapan yang sama setiap tahun, selalu meminta kamar nomor tujuh — meski kamar itu sudah lama ditutup.',
    cover: '/images/journal/rain-lamp.webp',
    coverAlt: 'Ruangan redup pada malam hari dengan jurnal terbuka dan lampu hangat yang terpantul di jendela berlapis hujan.',
    note: 'Demo draft — belum selesai. Gunakan sebagai contoh format, lalu ganti dengan cerita Anda.',
    chapters: [
      {
        title: 'Chapter One — Check In',
        blocks: [
          {
            type: 'paragraph',
            text: 'Hujan turun seperti orang yang tidak ingin pulang. Di meja resepsi, perempuan itu meletakkan payungnya dengan hati-hati, seolah benda itu juga lelah.',
          },
          {
            type: 'paragraph',
            text: '“Kamar nomor tujuh,” katanya. Bukan pertanyaan. Kalimat itu sudah ia ucapkan berkali-kali, di tahun yang berbeda, dengan wajah yang tidak bertambah tua.',
          },
          {
            type: 'paragraph',
            text: 'Petugas baru itu hendak menjelaskan bahwa sayap lama sedang ditutup. Tapi ia berhenti, karena perempuan di depannya tersenyum seperti seseorang yang tahu lebih banyak daripada bangunan ini.',
          },
        ],
      },
      {
        title: 'Chapter Two — The Corridor',
        blocks: [
          {
            type: 'paragraph',
            text: 'Lorong menuju kamar tujuh lebih panjang malam itu. Lampu-lampu dinding menyala satu per satu, mengikuti langkahnya, lalu padam setelah ia lewat.',
          },
          {
            type: 'quote',
            text: 'Ada kamar yang menyimpan tamunya lebih lama daripada tamu itu menyimpan kuncinya.',
          },
          {
            type: 'paragraph',
            text: 'Di depan pintu, ia berhenti. Di bawahnya, cahaya tipis terlihat — padahal listrik di sayap ini sudah diputus sejak lama.',
          },
        ],
      },
    ],
  },
  {
    slug: 'sepuluh-menit-sebelum-fajar',
    title: 'Sepuluh Menit Sebelum Fajar',
    genre: 'Romance',
    status: 'Demo',
    demo: true,
    date: '2026-08-14',
    displayDate: '14 Agustus 2026',
    readingTime: '4 min read',
    synopsis:
      'Dua orang yang tak sempat mengucapkan hal penting bertemu lagi di peron pertama, sepuluh menit sebelum kereta pagi berangkat.',
    cover: '/images/journal/night-writing.webp',
    coverAlt: 'Buku jurnal terbuka dengan pulpen di atas meja kayu gelap pada malam hari, diterangi satu lampu hangat.',
    note: 'Demo draft. Dialog dan detail masih berupa kerangka.',
    chapters: [
      {
        title: 'Before Sunrise',
        blocks: [
          {
            type: 'paragraph',
            text: 'Peron pertama selalu lebih dingin daripada yang lain. Atau mungkin hanya ingatan saya yang membuatnya begitu.',
          },
          {
            type: 'paragraph',
            text: 'Ia berdiri di sana, memegang dua cangkir kopi, seperti sepuluh menit terakhir belum pernah terjadi.',
          },
          {
            type: 'paragraph',
            text: '“Aku tidak tahu kamu masih naik kereta ini,” katanya.',
          },
          {
            type: 'paragraph',
            text: 'Saya ingin bilang: saya sengaja. Tapi kereta sudah terlihat di ujung rel, dan kebenaran selalu terasa terlalu panjang untuk sepuluh menit.',
          },
        ],
      },
    ],
  },
  {
    slug: 'pulang-lewat-jalur-kabut',
    title: 'Pulang Lewat Jalur Kabut',
    genre: 'Personal Narratives',
    status: 'Demo',
    demo: true,
    date: '2026-06-21',
    displayDate: '21 Juni 2026',
    readingTime: '5 min read',
    synopsis:
      'Sebuah catatan tentang rute memutar, jalan yang tidak efisien, dan hal-hal yang hanya terlihat ketika kita tidak sedang terburu-buru.',
    cover: '/images/journal/foggy-road.webp',
    coverAlt: 'Jalan kosong menghilang ke dalam kabut pagi pucat di antara siluet pepohonan, dengan cakrawala hangat yang samar.',
    note: 'Demo draft — nada dan suasana masih akan berubah.',
    chapters: [
      {
        title: 'The Long Way',
        blocks: [
          {
            type: 'paragraph',
            text: 'Ada satu rute yang selalu saya ambil ketika belum siap pulang. Ia menambah dua belas menit dan hampir tidak ada apa-apa di sepanjangnya.',
          },
          {
            type: 'paragraph',
            text: 'Deretan toko yang tutup. Sebuah jembatan. Sebatang pohon yang selalu pertama menggugurkan daunnya.',
          },
          {
            type: 'quote',
            text: 'Not every detour is a mistake. Some are how the day finally arrives.',
            attribution: '— a note to myself',
          },
          {
            type: 'paragraph',
            text: 'Mungkin yang saya cari bukan jalan pulang yang lebih cepat, melainkan sedikit waktu tambahan untuk menjadi seseorang yang siap sampai.',
          },
        ],
      },
    ],
  },
  {
    slug: 'anak-yang-menyimpan-bintang',
    title: 'Anak yang Menyimpan Bintang',
    genre: 'Fantasy',
    status: 'Demo',
    demo: true,
    date: '2026-04-09',
    displayDate: '9 April 2026',
    readingTime: '7 min read',
    synopsis:
      'Seorang anak menemukan bahwa setiap bintang yang jatuh bisa disimpan dalam toples kaca — dan bahwa beberapa cahaya tidak ingin disimpan.',
    cover: '/images/journal/beginning.webp',
    coverAlt: 'Halaman-halaman awal buku catatan dengan tulisan baru, pulpen, dan cahaya pagi di atas meja.',
    note: 'Demo draft — bab pembuka saja, sisanya masih berupa catatan.',
    chapters: [
      {
        title: 'The Jar',
        blocks: [
          {
            type: 'paragraph',
            text: 'Malam itu sebuah bintang jatuh di halaman belakang, tepat di antara jemuran dan pagar yang catnya sudah mengelupas.',
          },
          {
            type: 'paragraph',
            text: 'Anak itu tidak berteriak. Ia hanya berlari, mengambil toples selai yang kosong, dan menangkap cahaya itu sebelum menyentuh rumput.',
          },
          {
            type: 'paragraph',
            text: 'Di dalam toples, bintang itu tidak lebih besar dari kunang-kunang. Namun seluruh kamarnya menjadi terang, dan untuk pertama kalinya ia bisa melihat rak-rak buku ayahnya tanpa menyalakan lampu.',
          },
          {
            type: 'quote',
            text: 'Beberapa cahaya bersinar paling terang justru ketika tidak ada yang mencoba menyimpannya.',
          },
        ],
      },
    ],
  },
]

export const storyGenres: Story['genre'][] = [
  'Fiction',
  'Short Stories',
  'Romance',
  'Drama',
  'Mystery',
  'Fantasy',
  'Personal Narratives',
  'Unfinished Stories',
]

export function sortStories(stories: Story[]): Story[] {
  return [...stories].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getDemoStory(slug: string | undefined): Story | undefined {
  return demoStories.find((story) => story.slug === slug)
}
