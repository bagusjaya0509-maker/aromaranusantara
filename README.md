# aromaranusantara.com

Situs statis **Aromara Trader Nusantara** — eksportir rempah Indonesia (cengkeh, pala, kapulaga putih jawa).

Dimigrasikan dari Blogger, 1 September 2026.

## Struktur

```
index.html                  halaman utama (satu halaman, navigasi anchor)
2026/08/*.html              4 artikel — URL dipertahankan persis seperti di Blogger
assets/img/*.webp           gambar, dioptimasi dari 12,9 MB menjadi 1,0 MB
assets/img/og-cover.jpg     gambar pratinjau tautan (JPEG, bukan WebP — scraper WhatsApp)
sitemap.xml robots.txt      SEO
CNAME                       domain kustom GitHub Pages
.nojekyll                   matikan pemrosesan Jekyll
```

## Penting

**URL artikel JANGAN diubah.** Keempatnya sudah terindeks Google dengan path `/2026/08/...html`.
GitHub Pages tidak bisa melakukan 301 redirect, jadi mengubah URL = kehilangan indeks.

## Cara memperbarui

Edit berkas, lalu `git push`. GitHub Pages menerbitkan otomatis dalam ~1 menit.

Pratinjau lokal:

    python -m http.server 8901 --directory .
