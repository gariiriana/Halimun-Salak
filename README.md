# The Halimun Salak — Real Estate Interactive Siteplan & Admin Lead System

An enterprise-grade, high-performance, and secure hybrid-serverless landing page and admin management system custom-designed for **The Halimun Salak** premium villa plot development (the 11th project by **Nuansa Alam** / **PT Alam Barakah Hasanah**). This platform features an interactive SVG siteplan map, double-action lead capturing, real-time Firestore database streams, and a secure admin control portal.

---

## System Badges and Architecture Metrics

![Next.js](https://img.shields.io/badge/next.js-14.2-000000?style=flat-square&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/react-19.0-61DAFB?style=flat-square&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/typescript-5.0-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Firebase](https://img.shields.io/badge/firebase-12.0-FFCA28?style=flat-square&logo=firebase&logoColor=black)
![Tailwind](https://img.shields.io/badge/tailwindcss-4.0-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![Docker](https://img.shields.io/badge/docker-enabled-2496ED?style=flat-square&logo=docker&logoColor=white)

---

## Core Architectural Pillars

### 1. Serverless Direct-to-Firestore (Decoupled Client Design)
Aplikasi web ini menggunakan arsitektur serverless di mana komponen client-side berkomunikasi secara langsung (*direct queries*) dengan Google Cloud Firestore dan Firebase Authentication. Desain decoupling ini meniadakan latensi API gateway perantara, mengurangi beban server penengah, dan memastikan performa tinggi dengan skalabilitas elastis otomatis saat kampanye pemasaran berjalan.

### 2. Standalone Containerized Optimization
Menggunakan optimasi `output: "standalone"` Next.js untuk memilah modul dan file runtime minimal yang dibutuhkan oleh Node.js. Dipadukan dengan 5-stage Dockerfile multi-stage build, container production hanya menyalin binary standalone dan static assets terpilih. Teknik ini memangkas ukuran image container hingga lebih dari 85% (~150MB) untuk efisiensi penyimpanan dan deploy super instan.

### 3. Real-time Reactive Synchronization
Seluruh perubahan status peta siteplan interaktif disinkronisasikan secara reaktif. Melalui inisialisasi listener `onSnapshot` Firestore, status pemesanan kavling (Available, Booked, Sold) yang diperbarui oleh Admin dari dashboard akan otomatis ter-update di sisi user secara real-time tanpa perlu me-refresh halaman atau menggunakan HTTP polling berkala.

---

## 🚀 Fitur Utama

- **Peta Siteplan Interaktif (SVG)**: Visualisasi layout 93 unit kavling (Blok A-E) dengan pewarnaan dinamis berbasis database (Hijau = Tersedia, Orange = Terbooking, Merah = Terjual) dan interaksi tooltip detail unit.
- **Lead Capture & WhatsApp Redirect**: Form pendaftaran instan untuk pengunjung. Data disimpan otomatis ke Firestore dan dilanjutkan dengan redirect chat WA Admin Sales dengan pesan ter-templat dinamis sesuai kavling yang dipilih.
- **Admin Dashboard Terproteksi (`/admin`)**: Manajemen status kavling dan rekapan Leads calon pembeli secara real-time dengan proteksi Firebase Authentication.
- **Multi-Stage Docker & Compose Support**: Containerization siap pakai untuk environment lokal development (dengan hot-reload) dan build production (standalone server Node.js ringan).
- **Environment-based Configuration**: Kredensial Firebase terisolasi secara aman menggunakan variabel lingkungan (`.env`).

---

## 🛠️ Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS & React Icons
- **Database & Auth**: Firebase (Firestore & Firebase Authentication)
- **DevOps**: Docker & Docker Compose

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

Salin file `.env.example` menjadi `.env.local` (atau `.env`):

```bash
cp .env.example .env.local
```

Kemudian, buka file `.env.local` dan isi dengan konfigurasi Firebase API Key Anda:

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

### Menjalankan Mode Production (Optimized Standalone)

Container akan melakukan build optimal Next.js menggunakan standalone mode untuk performa tertinggi dan ukuran container seminimal mungkin (~150MB):

```bash
docker compose up app-prod --build
```

Aplikasi dapat diakses melalui browser pada alamat [http://localhost:3001](http://localhost:3001).

---

## 📂 Struktur Project

```text
halimun-salak/
├── public/                # Aset gambar, ikon, dan logo
├── src/
│   ├── app/              # Halaman & route Next.js (landing page & admin dashboard)
│   ├── components/       # Komponen visual reusable (Navbar, Peta SVG, Modal)
│   ├── data/             # Seeding database & mock data kavling
│   ├── hooks/            # Custom React Hooks untuk Firebase Firestore & Auth
│   ├── lib/              # Inisialisasi Firebase & helper CRUD
│   └── types/            # Interface & tipe data TypeScript
├── Dockerfile            # Multi-stage Docker build config
├── docker-compose.yml    # Orkestrasi Docker container dev & prod
├── next.config.ts        # Konfigurasi Next.js (Standalone mode enabled)
└── tailwind.config.ts    # Desain token warna & tema visual
```

---

## 📄 Hak Cipta & Hak Milik

Dikembangkan untuk **The Halimun Salak** oleh **PT Alam Barakah Hasanah (Nuansa Alam)**. All rights reserved.