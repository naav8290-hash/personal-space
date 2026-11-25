export const cinema = {
  title: 'Where Stories Come Alive',
  intro:
    'Film adalah tempat saya belajar bahwa cerita tidak hanya ditulis — ia dibangun dari cahaya, waktu, dan keputusan kecil. Saya belum menyebut diri saya filmmaker; saya hanya seseorang yang ingin belajar menyutradarai.',
  touchstones: [
    {
      title: 'In the Mood for Love',
      note: 'Tentang ruang yang tidak pernah cukup, dan perasaan yang disimpan dalam jarak.',
    },
    {
      title: 'Cinema Paradiso',
      note: 'Tentang cinta pada gambar bergerak, dan harga dari meninggalkannya.',
    },
    {
      title: 'Before Sunrise',
      note: 'Tentang percakapan yang berjalan lebih jauh daripada kendaraan apa pun.',
    },
  ],
  craft: [
    {
      index: '01',
      title: 'Story Development',
      text: 'Mulai dari satu adegan yang tidak mau pergi. Baru setelah itu mencari tahu siapa yang ada di dalamnya, dan apa yang mereka inginkan.',
    },
    {
      index: '02',
      title: 'Screenwriting',
      text: 'Menulis dialog yang terdengar diucapkan, bukan ditulis. Membaca ulang dengan suara keras, lalu memotong kalimat yang terlalu ingin terlihat pintar.',
    },
    {
      index: '03',
      title: 'Directing',
      text: 'Belajar bahwa mengarahkan bukan mengatur, melainkan memastikan semua orang memahami cerita yang sama — lalu memberi mereka ruang untuk mengejutkan saya.',
    },
    {
      index: '04',
      title: 'Behind the Scenes',
      text: 'Catatan dari produksi film sekolah: jadwal yang bergeser, kabel yang kusut, dan kegembiraan kecil ketika satu take akhirnya bekerja.',
    },
    {
      index: '05',
      title: 'Creative Process',
      text: 'Moodboard, storyboard sederhana, daftar lagu, dan banyak catatan yang tidak pernah masuk naskah. Prosesnya jarang rapi, tapi selalu meninggalkan sesuatu.',
    },
  ],
  // Catatan: pengalaman film sekolah adalah pengalaman kreatif pribadi, bukan profesional.
  note: 'Catatan proses — pengalaman film sekolah, bukan portofolio profesional. Detail produksi akan dilengkapi saat catatan aslinya terkumpul.',
  images: {
    primary: '/images/interests/cinema.webp',
    primaryAlt: 'Berkas proyektor menembus debu di bioskop tua yang gelap dengan kursi beludru merah anggur.',
    secondary: '/images/gallery/film-camera.webp',
    secondaryAlt: 'Kamera film 35mm tua di atas linen kusut di samping potongan film dan benda kuningan kecil.',
    tertiary: '/images/gallery/darkroom.webp',
    tertiaryAlt: 'Negatif film tergantung di tali di kamar gelap yang redup di bawah lampu pengaman kuning.',
  },
  roles: ['Story development', 'Screenwriting', 'Directing', 'Behind the scenes', 'Editing', 'Sound & music'],
} as const
