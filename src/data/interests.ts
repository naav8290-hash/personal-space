import type { Interest } from './types'

export const interests: Interest[] = [
  {
    index: '01',
    title: 'Cinema & Filmmaking',
    meta: 'Study & practice',
    description:
      'Cerita yang bergerak dalam cahaya. Saya menonton film untuk memahami cara sebuah adegan bekerja, lalu mencoba menulis adegan sendiri — pelan-pelan, tanpa terburu ingin menyutradarai.',
    image: '/images/interests/cinema.webp',
    imageAlt: 'Berkas proyektor menembus debu di bioskop tua yang gelap dengan kursi beludru merah anggur.',
    layout: 'wide',
    ratio: '16 / 10',
  },
  {
    index: '02',
    title: 'Literature & Writing',
    meta: 'Daily practice',
    description:
      'Margin penuh tulisan pensil, kalimat yang disimpan bertahun-tahun, dan cerita yang dimulai tanpa rencana. Menulis adalah cara saya menemukan apa yang sebenarnya saya pikirkan.',
    image: '/images/interests/literature.webp',
    imageAlt: 'Novel terbuka dengan tumpukan surat ketikan dan pulpen di bawah lampu baca kuningan yang hangat.',
    layout: 'narrow',
    ratio: '4 / 3',
  },
  {
    index: '03',
    title: 'Languages & Culture',
    meta: 'Thai · Japanese',
    description:
      'Bahasa adalah cara lain menata dunia. Saat ini saya sedang mengenal bahasa Thailand dan Jepang — masih di tahap kata-kata sederhana, tapi sudah cukup untuk membuat hal-hal terasa lebih luas.',
    image: '/images/interests/languages.webp',
    imageAlt: 'Peta dunia antik, kamus terbuka, dan kompas kuningan kecil di atas meja kayu gelap.',
    layout: 'narrow',
    ratio: '4 / 3',
  },
  {
    index: '04',
    title: 'Photography & Visual Arts',
    meta: 'Film & digital',
    description:
      'Bukan gambar yang sempurna, melainkan yang jujur. Kebanyakan film, sesekali digital. Saya belajar bahwa menunggu cahaya yang tepat adalah bagian dari pekerjaannya.',
    image: '/images/interests/photography.webp',
    imageAlt: 'Lembar kontak foto, kamera medium format, dan lup di atas linen gelap dalam cahaya samping yang lembut.',
    layout: 'half',
    ratio: '4 / 3',
  },
  {
    index: '05',
    title: 'Creative Exploration',
    meta: 'In progress',
    description:
      'Huruf, kisi, kertas, suara, dan ruang kosong. Saya suka mencoba medium yang belum saya kuasai — bukan untuk menjadi ahli, tapi untuk melihat cara berpikir yang berbeda.',
    image: '/images/interests/design.webp',
    imageAlt: 'Huruf timbal letterpress di baki kayu di samping cetakan kertas krem dalam cahaya bengkel yang hangat.',
    layout: 'half',
    ratio: '4 / 3',
  },
]
