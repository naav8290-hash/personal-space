// Rak contoh. Ganti catatan ini dengan favorit Anda sendiri.
export type FavoriteGroup = {
  label: string
  index: string
  items: { title: string; meta: string }[]
}

export const favoriteGroups: FavoriteGroup[] = [
  {
    label: 'Favorite Movies',
    index: 'I',
    items: [
      { title: 'In the Mood for Love', meta: 'Wong Kar-wai · 2000' },
      { title: 'Cinema Paradiso', meta: 'Giuseppe Tornatore · 1988' },
      { title: 'Before Sunrise', meta: 'Richard Linklater · 1995' },
    ],
  },
  {
    label: 'Favorite Books',
    index: 'II',
    items: [
      { title: 'The Little Prince', meta: 'Antoine de Saint-Exupéry' },
      { title: 'Norwegian Wood', meta: 'Haruki Murakami' },
      { title: 'Letters to a Young Poet', meta: 'Rainer Maria Rilke' },
    ],
  },
  {
    label: 'Favorite Music',
    index: 'III',
    items: [
      { title: 'Please', meta: 'Jasper' },
      { title: 'Tutur Batin', meta: 'Yura Yunita' },
      { title: 'Eyes on You', meta: 'Joong Archen' },
    ],
  },
  {
    label: 'Favorite Characters',
    index: 'IV',
    items: [
      { title: 'Suzie', meta: 'Fictional character · placeholder' },
      { title: 'The Little Prince', meta: 'Antoine de Saint-Exupéry' },
      { title: 'Marnie', meta: 'Fictional character · placeholder' },
    ],
  },
  {
    label: 'Favorite Places',
    index: 'V',
    items: [
      { title: 'Kursi dekat jendela kereta panjang', meta: 'Di antara dua stasiun' },
      { title: 'Laut di luar musim', meta: 'Tidak ada orang lain' },
      { title: 'Perpustakaan setelah tutup', meta: 'Jam paling sunyi' },
    ],
  },
  {
    label: 'Favorite Languages',
    index: 'VI',
    items: [
      { title: 'Bahasa Indonesia', meta: 'Bahasa ibu' },
      { title: 'Bahasa Inggris', meta: 'Selalu dalam proses' },
      { title: 'Bahasa Thailand & Jepang', meta: 'Masih memilih kata pertama' },
    ],
  },
]

export const favoriteQuotes = [
  {
    text: 'Make a life that feels like a well-made page — quiet, deliberate, and worth returning to.',
    meta: 'a note to myself',
  },
  {
    text: 'Not everything needs an audience. Some things only need a witness.',
    meta: 'a note to myself',
  },
]
