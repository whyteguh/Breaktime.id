# breaktime.id

Website breaktime.id, dibangun dengan [Astro](https://astro.build). Fully
static — blog, produk, event, dan gift semuanya file markdown biasa. Struktur
proyek ini mengikuti pola yang sama dengan `wahyuteguh.com` (Astro + content
collections), sementara desain/kontennya 1:1 mengikuti `initialdesign.html`.

## Perintah

```sh
npm run dev      # dev server di localhost:4321
npm run build    # build statis ke dist/
npm run preview  # preview hasil build
```

## Menambah tulisan blog

Taruh file `.md` di `src/content/blog/`:

```md
---
title: "Judul tulisan"
description: "Ringkasan satu kalimat, tampil di kartu."
category: "Psikologi"       # atau Neurosains / Kebijaksanaan Kuno / dst
image: "https://..."        # gambar cover
date: 2026-07-03
draft: false                 # true = disembunyikan
---

Isi tulisan dalam markdown...
```

Nama file menjadi slug URL (`nama-file.md` → `/blog/nama-file/`).

## Menambah produk

Taruh file `.md` di `src/content/products/`:

```md
---
title: "Nama produk"
tagline: "Tagline singkat, italic"
description: "Deskripsi 1-2 kalimat, tampil di kartu."
icon: "compass"              # nama ikon lucide.dev
features:
  - { icon: "leaf", text: "Fitur 1" }
  - { icon: "users", text: "Fitur 2" }
ctaLabel: "Daftar Sekarang"
ctaHref: "https://wa.me/..."
order: 4                     # urutan tampil, angka kecil di depan
draft: false
---

Konten tambahan (opsional) untuk halaman detail produk...
```

## Menambah event

Taruh file `.md` di `src/content/events/`:

```md
---
title: "Nama event"
tagline: "Tagline singkat, italic"
badge: "Batch 9"
image: "https://..."
dateLabel: "12–13 Sep 2026"   # teks tanggal yang ditampilkan
startDate: 2026-09-12         # dipakai untuk urutan & status upcoming/selesai
venue: "Nama tempat, kota"
duration: "2 Hari, 1 Malam"
ctaLabel: "Pesan Tempatmu"
ctaHref: "https://wa.me/..."
draft: false
---

Detail tambahan tentang event (opsional)...
```

Homepage otomatis menampilkan event dengan `startDate` terdekat yang belum
lewat. Semua event (termasuk yang sudah selesai) tampil di `/events/`.

## Menambah testimoni

Taruh file `.md` di `src/content/testimonials/`:

```md
---
name: "Nama"
batch: "Retreat Batch 9"
initial: "N"                 # huruf di avatar bulat
avatarFrom: "green-400"      # warna gradient avatar (nama warna Tailwind)
avatarTo: "green-600"
date: 2026-07-03
draft: false
---

Kutipan testimoninya di sini.
```

Carousel di homepage otomatis membagi testimoni jadi grup 3 dan menyesuaikan
jumlah dot navigasinya.

## Menambah gift

Taruh file `.md` di `src/content/gift/`, ada dua tipe:

### Unduhan (ebook, panduan, template)

```md
---
title: "Nama gift"
description: "Pitch singkat."
type: landing
icon: "📓"
downloadUrl: "/downloads/nama-file.pdf"
downloadLabel: "Unduh gratis"
date: 2026-07-03
---

Penjelasan lebih lanjut, tampil di bawah tombol unduh.
```

Taruh file yang bisa diunduh di `public/downloads/`.

### Aplikasi web (alat interaktif)

```md
---
title: "Nama alat"
description: "Apa fungsinya."
type: webapp
icon: "🌬️"
appUrl: "/apps/nama-alat/index.html"
date: 2026-07-03
---

Tulisan pendamping (opsional), tampil di bawah aplikasi.
```

Taruh aplikasinya sendiri (HTML/JS/CSS mandiri) di `public/apps/nama-alat/`.
Aplikasi akan ditampilkan lewat iframe di halaman gift.

## Design tokens

Semua warna, font, dan animasi ada sebagai CSS variable di
`src/styles/global.css` (`:root` dan `[data-theme="dark"]`) — sama persis
dengan `initialdesign.html`. Ubah nilainya di sana untuk mengubah tampilan di
seluruh situs.

Toggle bahasa (ID/EN) dan tema (light/dark) ada di `src/lib/site.ts` (kamus
`T`) dan `src/layouts/Base.astro`. Toggle ini hanya berlaku untuk teks
chrome (nav, hero, footer, dsb) — konten dari markdown (blog/produk/event/
gift) selalu berbahasa Indonesia.
