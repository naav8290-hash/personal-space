import type { JournalEntry } from './types'

// Entri editorial contoh. Ganti dengan tulisan Anda sendiri.
export const journalEntries: JournalEntry[] = [
  {
    slug: 'tentang-menjaga-catatan-yang-tenang',
    title: 'Tentang Menjaga Catatan yang Tenang',
    category: 'Reflections',
    date: '2026-11-18',
    displayDate: '18 November 2026',
    readingTime: '5 min read',
    excerpt:
      'Mengapa menjaga halaman yang tidak wajib dibaca siapa pun? Catatan tentang arsip pribadi dan martabat kecil dari menuliskan sesuatu.',
    cover: '/images/journal/night-writing.webp',
    coverAlt: 'Buku jurnal terbuka dengan pulpen di atas meja kayu gelap pada malam hari, diterangi satu lampu hangat.',
    quote: {
      text: 'A record does not have to be loud to be true.',
      attribution: '— from a margin note',
    },
    tags: ['Archive', 'Writing', 'Quiet'],
    body: [
      {
        type: 'paragraph',
        text: 'Untuk waktu yang lama saya mengira situs pribadi harus berupa pertunjukan: deretan pencapaian, judul yang percaya diri, daftar hal yang bisa saya lakukan. Saya pernah mencoba menulis halaman seperti itu. Rasanya seperti memakai mantel orang lain.',
      },
      {
        type: 'paragraph',
        text: 'Yang saya inginkan sebenarnya sederhana — sebuah ruangan. Tempat untuk meletakkan benda-benda: foto yang diambil dalam perjalanan pulang, satu kalimat dari buku yang belum selesai, cuaca hari Selasa yang ternyata berarti sesuatu. Tempat yang tidak perlu meyakinkan siapa pun.',
      },
      { type: 'quote', text: 'A record does not have to be loud to be true.' },
      {
        type: 'paragraph',
        text: 'Catatan yang tenang tetap sebuah catatan. Rak dengan satu buku tetap sebuah rak. Situs ini adalah upaya menanggapi hal itu dengan serius: membiarkan hal-hal kecil menjadi cukup, dan membiarkan arsip ini tumbuh dengan kecepatan hidup yang biasa.',
      },
      { type: 'heading', text: 'A Practice, Not a Product' },
      {
        type: 'paragraph',
        text: 'Saya menulis entri-entri ini dengan tangan sebelum tiba di sini. Sebagian dimulai sebagai satu baris di buku catatan; sebagian lain bermula dari foto yang tidak bisa saya jelaskan. Penyuntingannya kebanyakan pengurangan: saya membuang bagian yang berusaha terlalu keras, dan menyimpan apa pun yang masih terdengar seperti saya pada pukul sebelas malam.',
      },
      {
        type: 'paragraph',
        text: 'Tidak ada jadwal, tidak ada buletin, tidak ada ajakan di bagian akhir. Jika Anda menemukan jalan ke sini, terima kasih sudah membaca dengan pelan. Ambil yang berguna, tinggalkan sisanya.',
      },
    ],
  },
  {
    slug: 'surat-yang-tak-pernah-saya-kirim',
    title: 'Surat yang Tak Pernah Saya Kirim',
    category: 'Letters to Myself',
    date: '2026-10-27',
    displayDate: '27 Oktober 2026',
    readingTime: '4 min read',
    excerpt: 'Ada laci di setiap hidup untuk kata-kata yang tak pernah berangkat. Ini surat untuk laci saya.',
    cover: '/images/journal/letters.webp',
    coverAlt: 'Bundel surat tulisan tangan tua diikat pita merah muda berdebu di atas meja kayu gelap.',
    quote: {
      text: 'Some letters are not for sending. They are for becoming the person who could have written them.',
    },
    tags: ['Letters', 'Memory', 'Honesty'],
    body: [
      {
        type: 'paragraph',
        text: 'Saya menyimpan folder berisi surat-surat yang tak terkirim. Sebagian ditujukan kepada orang-orang yang sudah bertahun-tahun tidak saya ajak bicara; sebagian kepada versi diri saya yang hampir tidak saya kenali. Tidak satu pun akan dikirim.',
      },
      {
        type: 'paragraph',
        text: 'Awalnya saya menyebutnya kepengecutan. Lalu saya paham: menulis surat tidak selalu soal pengiriman. Kadang soal meletakkan sebuah perasaan di tempat yang bisa dilihat, bukan dibawa ke mana-mana.',
      },
      { type: 'heading', text: 'What an Unsent Letter Knows' },
      {
        type: 'paragraph',
        text: 'Surat yang tak terkirim tidak punya penonton, dan karena itu tidak punya pertunjukan di dalamnya. Anda tidak bisa menyenangkan pembaca yang tak akan pernah datang. Anda hanya bisa akurat — atau tidak.',
      },
      {
        type: 'quote',
        text: 'Some letters are not for sending. They are for becoming the person who could have written them.',
      },
      {
        type: 'paragraph',
        text: 'Surat-surat yang saya simpan tidak dramatis. Isinya hal-hal sederhana: maafkan aku; aku takut; aku memperhatikan; terima kasih untuk sore itu. Saat membacanya kembali, saya terkejut betapa banyak hidup saya tersusun dari kalimat yang tidak pernah saya ucapkan dengan lantang.',
      },
      {
        type: 'paragraph',
        text: 'Saya sedang belajar mengirim beberapa di antaranya. Tidak semua — sebagian memang pantas tinggal di laci, seperti foto pantas tinggal di kotak. Tapi beberapa: yang kejujurannya sudah menua menjadi sesuatu yang baik.',
      },
    ],
  },
  {
    slug: 'jalan-pulang-yang-lebih-jauh',
    title: 'Jalan Pulang yang Lebih Jauh',
    category: 'Essays',
    date: '2026-09-30',
    displayDate: '30 September 2026',
    readingTime: '6 min read',
    excerpt:
      'Tentang jalan memutar, rute yang tak direncanakan, dan mengapa jalur terpendek belum tentu jalur yang mengubah Anda.',
    cover: '/images/journal/foggy-road.webp',
    coverAlt: 'Jalan kosong menghilang ke dalam kabut pagi pucat di antara siluet pepohonan, dengan cakrawala hangat yang samar.',
    quote: {
      text: 'Not every detour is a mistake. Some are how the day finally arrives.',
    },
    tags: ['Attention', 'Patience', 'Everyday'],
    body: [
      {
        type: 'paragraph',
        text: 'Ada satu rute yang saya ambil ketika belum siap pulang. Ia menambah dua belas menit dan hampir tidak ada apa-apa di sepanjangnya: deretan toko yang tutup, sebuah jembatan, sebatang pohon yang selalu pertama menggugurkan daunnya.',
      },
      {
        type: 'paragraph',
        text: 'Sementara waktu saya merasa bersalah. Tidak efisien, pikir saya. Masih ada pekerjaan. Tapi efisiensi adalah ukuran yang aneh untuk sebuah malam.',
      },
      { type: 'heading', text: 'The Useful Inefficiency' },
      {
        type: 'paragraph',
        text: 'Sebagian besar yang saya cintai justru ditemukan di luar jalur terpendek. Buku, karena kereta tertunda. Lagu, karena saya mengambil jalan jauh dan mendengarnya lewat jendela yang terbuka. Cara berpikir, karena saya duduk bersama sebuah masalah lebih lama dari yang seharusnya.',
      },
      {
        type: 'quote',
        text: 'Not every detour is a mistake. Some are how the day finally arrives.',
      },
      {
        type: 'paragraph',
        text: 'Saya tidak menyarankan siapa pun sengaja terlambat. Saya hanya ingin bilang: perhatian butuh waktu yang tidak terstruktur. Kalau setiap menit diperhitungkan, tidak ada tempat bagi sebuah pikiran untuk mendarat.',
      },
      {
        type: 'paragraph',
        text: 'Jadi kadang saya mengambil jalan jauh. Lampu jalan menyala. Pohon itu kehilangan daun. Saat akhirnya tiba di pintu, hari sudah menjadi sesuatu yang bisa saya pegang.',
      },
    ],
  },
  {
    slug: 'apa-yang-diajarkan-hujan',
    title: 'Apa yang Diajarkan Hujan',
    category: 'Daily Notes',
    date: '2026-08-24',
    displayDate: '24 Agustus 2026',
    readingTime: '3 min read',
    excerpt: 'Catatan pendek tentang cuaca, interupsi, dan nikmatnya tidak punya pilihan selain tinggal di dalam.',
    cover: '/images/journal/rain-lamp.webp',
    coverAlt: 'Ruangan redup pada malam hari dengan jurnal terbuka dan lampu hangat yang terpantul di jendela berlapis hujan.',
    quote: {
      text: 'Some days are not for finishing things. Some days are for listening.',
    },
    tags: ['Rest', 'Weather', 'Slowness'],
    body: [
      {
        type: 'paragraph',
        text: 'Hujan datang tanpa peringatan dan membatalkan sore itu. Saya punya daftar. Daftar itu tidak bertahan.',
      },
      {
        type: 'paragraph',
        text: 'Saya membuat teh yang tidak saya butuhkan lalu duduk di dekat jendela. Jalan menjadi sunyi dengan cara khas jalan-jalan ketika semua orang sepakat, pada saat yang sama, untuk berhenti.',
      },
      { type: 'quote', text: 'Some days are not for finishing things. Some days are for listening.' },
      {
        type: 'paragraph',
        text: 'Ada kelegaan tersendiri ketika diinterupsi oleh sesuatu yang lebih besar dari rencana kita. Hujan tidak bernegosiasi. Ia hanya berkata: bukan sekarang. Dan untuk beberapa jam, “bukan sekarang” adalah jawaban paling jujur yang saya punya.',
      },
      { type: 'heading', text: 'A Small Permission' },
      {
        type: 'paragraph',
        text: 'Saya tidak memanfaatkan waktu itu dengan baik. Itu justru intinya. Saya menonton air mengalir di kaca, membiarkan sebuah pikiran datang dan pergi tanpa menuliskannya. Menjelang malam daftar itu masih ada, tapi sudah kehilangan wibawanya.',
      },
      {
        type: 'paragraph',
        text: 'Saya mencoba menyimpan sedikit cuaca itu di hari-hari biasa. Bukan hujannya — melainkan izin yang diberikannya.',
      },
    ],
  },
  {
    slug: 'tentang-belajar-memulai',
    title: 'Tentang Belajar Memulai',
    category: 'Random Thoughts',
    date: '2026-07-12',
    displayDate: '12 Juli 2026',
    readingTime: '5 min read',
    excerpt: 'Versi pertama tidak pernah menjadi intinya. Catatan tentang memulai dengan buruk, dan tetap memulai.',
    cover: '/images/journal/beginning.webp',
    coverAlt: 'Halaman-halaman awal buku catatan dengan tulisan baru, pulpen, dan cahaya pagi di atas meja.',
    quote: {
      text: 'The beginning is not a test of talent. It is a test of whether you return tomorrow.',
    },
    tags: ['Craft', 'Learning', 'Beginnings'],
    body: [
      {
        type: 'paragraph',
        text: 'Halaman kosong tidak benar-benar kosong. Ia penuh dengan versi karya yang Anda takutkan tidak sanggup Anda buat.',
      },
      {
        type: 'paragraph',
        text: 'Ketika mulai belajar membangun sesuatu untuk web, setiap proyek baru dimulai dengan pola yang sama: ide yang indah, satu jam semangat, lalu pesan galat pertama — dan kecurigaan bahwa saya bodoh karena mencobanya.',
      },
      { type: 'heading', text: 'Bad First Drafts, on Purpose' },
      {
        type: 'paragraph',
        text: 'Pergeseran yang berguna ternyata kecil. Saya berhenti memperlakukan percobaan pertama sebagai vonis, dan mulai memperlakukannya sebagai draf. Draf boleh salah. Draf boleh memalukan. Tugasnya cuma satu: ada, supaya versi kedua bisa tidak setuju dengannya.',
      },
      {
        type: 'quote',
        text: 'The beginning is not a test of talent. It is a test of whether you return tomorrow.',
      },
      {
        type: 'paragraph',
        text: 'Ini berlaku untuk kode, dan juga untuk tulisan. Paragraf yang Anda hapus tidak sia-sia; ia adalah perancah. Fungsi yang Anda tulis ulang mengajarkan apa masalahnya sebenarnya.',
      },
      {
        type: 'paragraph',
        text: 'Saya masih tidak menyukai permulaan. Tapi saya sudah belajar membuatnya lebih kecil: satu baris, satu kalimat, satu file. Lalu, kalau beruntung, kembali besok dan membuatnya sedikit lebih tidak salah.',
      },
    ],
  },
]

export const sortedJournalEntries = [...journalEntries].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
)

export function getJournalEntry(slug: string | undefined): JournalEntry | undefined {
  return journalEntries.find((entry) => entry.slug === slug)
}

export function getAdjacentEntries(slug: string) {
  const index = sortedJournalEntries.findIndex((entry) => entry.slug === slug)
  return {
    newer: index > 0 ? sortedJournalEntries[index - 1] : undefined,
    older: index < sortedJournalEntries.length - 1 ? sortedJournalEntries[index + 1] : undefined,
  }
}
