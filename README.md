# The Halimun Salak — Real Estate Interactive Siteplan & Admin Lead System

An enterprise-grade, high-performance, and secure client-side Single Page Application (SPA) custom-designed for **The Halimun Salak** premium villa plot development (the 11th project by **Nuansa Alam** / **PT Alam Barakah Hasanah**). This platform features an interactive SVG siteplan map, double-action lead capturing, real-time Firestore database streams, and a secure admin control portal.

---

## System Badges and Architecture Metrics

![Vite](https://img.shields.io/badge/vite-5.4-646CFF?style=flat-square&logo=vite&logoColor=white)
![React](https://img.shields.io/badge/react-19.0-61DAFB?style=flat-square&logo=react&logoColor=black)
![React Router](https://img.shields.io/badge/react_router-7.1-CA4245?style=flat-square&logo=reactrouter&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-5.0-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Firebase](https://img.shields.io/badge/firebase-12.1-FFCA28?style=flat-square&logo=firebase&logoColor=black)
![Tailwind](https://img.shields.io/badge/tailwindcss-4.0-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![Nginx](https://img.shields.io/badge/nginx-alpine-269539?style=flat-square&logo=nginx&logoColor=white)
![Docker](https://img.shields.io/badge/docker-enabled-2496ED?style=flat-square&logo=docker&logoColor=white)

---

## Core Architectural Pillars

### 1. Serverless Direct-to-Firestore (Decoupled Client Design)
Aplikasi web ini menggunakan arsitektur serverless di mana komponen client-side berkomunikasi secara langsung (*direct queries*) dengan Google Cloud Firestore dan Firebase Authentication melalui Firebase Web SDK. Desain decoupling ini meniadakan latensi API gateway perantara, mengurangi beban server penengah, dan memastikan performa tinggi dengan skalabilitas elastis otomatis saat kampanye pemasaran berjalan.

### 2. Static Nginx Serving (Ultra-low Footprint)
Pada tahap produksi, kode sumber aplikasi dikompilasi menjadi berkas statik teroptimasi di bawah direktori `/dist` dan disajikan via kontainer **Nginx Alpine**. Dengan mengeliminasi runtime Node.js di sisi server produksi, ukuran image kontainer menyusut drastis menjadi hanya sekitar **~25MB** dengan overhead memori yang sangat kecil dan kecepatan pengiriman aset yang maksimal.

### 3. Real-time Reactive Synchronization
Seluruh perubahan status peta siteplan interaktif disinkronisasikan secara reaktif. Melalui inisialisasi listener `onSnapshot` Firestore, status pemesanan kavling (Available, Booked, Sold) yang diperbarui oleh Admin dari dashboard akan otomatis ter-update di sisi user secara real-time tanpa perlu me-refresh halaman atau menggunakan HTTP polling berkala.

---

## 🚀 Fitur Utama

- **Peta Siteplan Interaktif (SVG)**: Visualisasi layout 93 unit kavling (Blok A-E) dengan pewarnaan dinamis berbasis database (Hijau = Tersedia, Orange = Terbooking, Merah = Terjual) dan interaksi tooltip detail unit.
- **Lead Capture & WhatsApp Redirect**: Form pendaftaran instan untuk pengunjung. Data disimpan otomatis ke Firestore dan dilanjutkan dengan redirect chat WA Admin Sales dengan pesan ter-templat dinamis sesuai kavling yang dipilih.
- **Admin Dashboard Terproteksi (`/admin`)**: Manajemen status kavling dan rekapan Leads calon pembeli secara real-time dengan proteksi Firebase Authentication.
- **Multi-Stage Docker & Compose Support**: Containerization siap pakai untuk environment lokal development (dengan hot-reload) dan build production (Nginx static serving ringan).
- **Environment-based Configuration**: Kredensial Firebase terisolasi secara aman menggunakan variabel lingkungan (`.env`).

---

## 🛠️ Tech Stack

- **Bundler & Tooling**: Vite 5
- **Framework & Routing**: React 19 & React Router DOM 7
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS v4 & React Icons
- **Database & Auth**: Firebase (Firestore & Firebase Authentication)
- **DevOps**: Docker & Docker Compose & Nginx

---

## 📦 Persyaratan Sistem

Sebelum memulai, pastikan perangkat Anda telah menginstal:
- [Node.js](https://nodejs.org/) (versi 18.x atau 20.x ke atas)
- [NPM](https://www.npmjs.com/) atau Yarn / PNPM
- [Docker](https://www.docker.com/) & Docker Compose (Opsional, untuk containerization)

---

## 🚀 Memulai (Local Setup)

Ikuti langkah-langkah berikut untuk menjalankan project di komputer lokal Anda:

### 1. Clone Repositori
```bash
git clone https://github.com/gariiriana/Halimun-Salak.git
cd Halimun-Salak
```

### 2. Konfigurasi Environment Variables
Salin file `.env.example` menjadi berkas lingkungan lokal Anda:
```bash
cp .env.example .env.local
```

Kemudian, buka file `.env.local` dan isi dengan konfigurasi Firebase API Key Anda. Anda juga dapat membuat file environment khusus berdasarkan kebutuhan deployment:
* `.env` - Environment default
* `.env.local` - Override lokal untuk semua environment (diabaikan oleh Git)
* `.env.development` - Kredensial khusus development
* `.env.development.local` - Override lokal khusus development (diabaikan oleh Git)
* `.env.production` - Kredensial khusus produksi
* `.env.production.local` - Override lokal khusus produksi (diabaikan oleh Git)
* `.env.test.local` - Kredensial pengujian lokal (diabaikan oleh Git)

**Contoh isi variabel lingkungan:**
```env
NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSy...
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=halimun-salak.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=halimun-salak
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=halimun-salak.firebasestorage.app
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=689351235702
NEXT_PUBLIC_FIREBASE_APP_ID=1:689351235702:web:eaf75336f78692d8f5e757
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=G-160JYRJMHE
```

### 3. Instal Dependensi
```bash
npm install
```

### 4. Jalankan Server Development
```bash
npm run dev
```
Buka [http://localhost:3000](http://localhost:3000) di browser Anda untuk melihat hasilnya.

---

## 🐳 Menjalankan Menggunakan Docker

Kami telah menyediakan konfigurasi Docker Compose teroptimasi untuk kemudahan pengembangan maupun pengujian production.

### Menjalankan Mode Development (Hot-Reload)
Container akan memetakan kode lokal Anda ke dalam container, sehingga perubahan kode host langsung ter-update secara otomatis:
```bash
docker compose up app-dev --build
```
Aplikasi dapat diakses melalui browser pada alamat [http://localhost:3000](http://localhost:3000).

### Menjalankan Mode Production (Nginx Static Serving)
Container akan melakukan kompilasi statik dan menyajikannya via Nginx Alpine pada port `3000`:
```bash
docker compose up app-prod --build
```
Aplikasi dapat diakses melalui browser pada alamat [http://localhost:3000](http://localhost:3000).

---

## 📂 Struktur Project

```text
halimun-salak/
├── public/                # Aset gambar, ikon, dan logo
├── src/
│   ├── components/        # Komponen visual reusable (Navbar, Peta SVG, Modal)
│   ├── data/              # Seeding database & data kavling awal
│   ├── hooks/             # Custom React Hooks untuk Firebase Firestore & Auth
│   ├── lib/               # Inisialisasi Firebase & helper CRUD
│   ├── pages/             # Komponen halaman utama (LandingPage, AdminDashboard, AdminLogin, NotFound)
│   ├── types/             # Interface & tipe data TypeScript
│   ├── App.tsx            # Setup Routing Client (React Router DOM)
│   ├── index.css          # Desain token warna & tema visual Tailwind CSS v4
│   └── main.tsx           # Entry point mounting script React DOM
├── Dockerfile            # Multi-stage Docker build config
├── docker-compose.yml    # Orkestrasi Docker container dev & prod
├── index.html            # Entry HTML root page
├── nginx.conf            # Konfigurasi perutean Nginx SPA fallback
└── vite.config.ts        # Konfigurasi bundler Vite
```

---

## 📄 Hak Cipta & Hak Milik

Dikembangkan untuk **The Halimun Salak** oleh **PT Alam Barakah Hasanah (Nuansa Alam)**. All rights reserved.