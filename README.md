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

| Halaman | Fokus |
| --- | --- |
| `/` | Indonesian spice exporter |
| `/products/indonesian-cloves.html` | Indonesian clove supplier / exporter |
| `/products/indonesian-nutmeg.html` | Indonesian nutmeg supplier / exporter |
| `/products/white-java-cardamom.html` | White Java cardamom supplier |

Ini pemetaan topik produk, bukan hasil riset volume pencarian. Tidak ada target
kepadatan kata kunci. Tag `meta keywords` tidak digunakan Google Search.

URL katalog `/p/roduct-catalog.html` sengaja dipertahankan, termasuk ejaannya,
agar tautan lama tetap berfungsi. Angka spesifikasi pada halaman produk mengikuti
katalog; jika penawaran berubah, perbarui beranda, katalog, dan halaman produk
yang terkait secara bersamaan. Halaman baru tidak menambahkan harga atau ulasan.

URL cengkeh lama `/p/cloves.html` memakai `meta refresh` 0 detik, canonical, dan
tautan biasa ke `/products/indonesian-cloves.html`. Ini pengalihan HTML instan,
bukan respons HTTP 301. Pertahankan berkas tersebut dan jangan masukkan URL
pengalihan ke sitemap; hanya halaman tujuan yang dicantumkan.

Setelah perubahan diterbitkan, periksa URL baru di Google Search Console dan
kirim sitemap `https://www.aromaranusantara.com/sitemap.xml`. Perubahan kode
tidak menjamin pengindeksan, posisi, atau kenaikan traffic.

Rujukan:
- https://developers.google.com/search/docs/fundamentals/seo-starter-guide
- https://developers.google.com/search/docs/appearance/title-link
- https://developers.google.com/search/docs/appearance/snippet
- https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap
