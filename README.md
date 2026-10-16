# aromaranusantara.com

Situs statis **Aromara Trader Nusantara** — eksportir rempah Indonesia (cengkeh, pala, kapulaga putih jawa).

Dimigrasikan dari Blogger, 1 September 2026.

## Struktur

```
index.html                  halaman utama (satu halaman, navigasi anchor)
2026/08/*.html              4 artikel — URL dipertahankan persis seperti di Blogger
2026/09/*.html              3 artikel panduan pembeli
products/*.html             3 halaman produk untuk cengkeh, pala, kapulaga putih
p/cloves.html               pengalihan URL cengkeh lama ke halaman produk baru
assets/css/product-pages.css   gaya halaman produk, mengikuti merek yang ada
assets/js/product-navigation.js navigasi responsif halaman produk
assets/img/*.webp           gambar, dioptimasi dari 12,9 MB menjadi 1,0 MB
assets/img/og-cover.jpg     gambar pratinjau tautan (JPEG, bukan WebP — scraper WhatsApp)
favicon.png                favicon persegi 96×96 untuk browser dan Google Search
favicon.ico                ikon browser cadangan dalam ukuran 16, 32, dan 48 piksel
apple-touch-icon.png       ikon bookmark iOS 180×180
sitemap.xml robots.txt      SEO
CNAME                       domain kustom GitHub Pages
.nojekyll                   matikan pemrosesan Jekyll
```

## Penting

**URL artikel JANGAN diubah.** URL `/2026/08/...html` sudah dikenal Google;
status indeks masing-masing URL perlu diperiksa di Search Console.
GitHub Pages tidak menyediakan konfigurasi HTTP 301 per URL, jadi pertahankan
alamat yang sudah dipublikasikan agar tautan lama tetap dapat digunakan.

## Cara memperbarui

Edit berkas, simpan commit, lalu `git push` ke cabang kerja.

Perubahan pada cabang kerja belum mengubah situs publik. Gabungkan perubahan ke
cabang penerbitan GitHub Pages setelah ditinjau; waktu penerbitan mengikuti status
deployment GitHub.

Pratinjau lokal:

    python -m http.server 8901 --directory .

## Mengubah SEO halaman

Situs ini memakai HTML statis, sehingga tidak memerlukan plugin SEO. Edit langsung:

1. `<title>` dan `<meta name="description">` pada bagian `<head>`.
2. Judul utama `<h1>` serta penjelasan produk yang terlihat oleh pembaca.
3. `og:title`, `og:description`, `twitter:title`, dan `twitter:description` agar
   pratinjau tautan sesuai dengan isi halaman.
4. Tautan antarhalaman; pastikan halaman baru dapat dibuka dari navigasi atau isi.
5. `sitemap.xml` saat menambah halaman. Perbarui `lastmod` hanya jika isi halaman
   mengalami perubahan berarti, bukan otomatis setiap penerbitan.

Gunakan satu fokus produk per halaman, dengan variasi kata yang wajar:

| Halaman | Topik utama | Variasi kebutuhan buyer |
| --- | --- | --- |
| `/` | Indonesian spices | Indonesian spice supplier / exporter |
| `/products/indonesian-cloves.html` | Indonesian cloves | Indonesia clove, cloves supplier Indonesia, wholesale cloves |
| `/products/indonesian-nutmeg.html` | Indonesian nutmeg | Indonesia nutmeg, nutmeg supplier Indonesia, wholesale nutmeg |
| `/products/white-java-cardamom.html` | Java cardamom | white Java cardamom, white cardamom Indonesia, Java cardamom wholesale |

Ini pemetaan topik produk, bukan hasil riset volume pencarian. Tidak ada target
kepadatan kata kunci. Tag `meta keywords` tidak digunakan Google Search.

Fokus dua kata tidak berarti judul halaman harus terdiri dari dua kata saja.
Judul lengkap tetap menjelaskan penawaran pemasok, sementara isi halaman menjawab
kebutuhan pembeli: spesifikasi, pemesanan grosir, sampel, pengemasan, dan penawaran.
Bagian wholesale pada setiap produk memberi daftar pemeriksaan yang berbeda
sesuai produknya. Jangan membuat halaman duplikat untuk setiap variasi kata kunci.

Ukur perkembangan dari kueri produk, halaman tujuan, dan negara di laporan
Performance Search Console. Status terindeks bukan bukti peringkat untuk suatu
kueri. Nilai waktu evaluasi sebagai jeda untuk mengumpulkan data, bukan tenggat
yang menjamin posisi tertentu. Data kueri yang tidak ditampilkan Google juga
tidak boleh dianggap otomatis nol.

URL katalog `/p/roduct-catalog.html` sengaja dipertahankan, termasuk ejaannya,
agar tautan lama tetap berfungsi. Angka spesifikasi pada halaman produk mengikuti
katalog; jika penawaran berubah, perbarui beranda, katalog, dan halaman produk
yang terkait secara bersamaan. Halaman baru tidak menambahkan harga atau ulasan.

URL cengkeh lama `/p/cloves.html` memakai `meta refresh` 0 detik, canonical, dan
tautan biasa ke `/products/indonesian-cloves.html`. Ini pengalihan HTML instan,
bukan respons HTTP 301. Pertahankan berkas tersebut dan jangan masukkan URL
pengalihan ke sitemap; hanya halaman tujuan yang dicantumkan.

## Favicon

Seluruh halaman memakai `/favicon.png` (96×96), `/favicon.ico` (16/32/48), dan
`/apple-touch-icon.png` (180×180). Aset ini merupakan versi persegi dari lambang
Aromara, tanpa tulisan kecil agar tetap terbaca sebagai ikon. Logo lengkap pada
`/assets/img/logo.png` tetap dipakai untuk identitas organisasi dan halaman 404.

Pertahankan URL favicon ini. Jika mengganti gambarnya, gunakan gambar persegi
dan pastikan berkasnya bisa diakses Googlebot-Image. Setelah perubahan diterbitkan,
ajukan crawl ulang **halaman utama** di Search Console. Ikon pada hasil Google
bisa baru diperbarui setelah beberapa hari atau minggu; pemasangan yang benar
tidak menjamin Google akan menampilkannya.

Setelah perubahan diterbitkan, periksa URL baru di Google Search Console dan
kirim sitemap `https://www.aromaranusantara.com/sitemap.xml`. Perubahan kode
tidak menjamin pengindeksan, posisi, atau kenaikan traffic.

Rujukan:
- https://developers.google.com/search/docs/fundamentals/seo-starter-guide
- https://developers.google.com/search/docs/appearance/title-link
- https://developers.google.com/search/docs/appearance/snippet
- https://developers.google.com/search/docs/appearance/favicon-in-search
- https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap
