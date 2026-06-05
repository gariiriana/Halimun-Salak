import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0B2314] flex flex-col items-center justify-center text-white px-4 text-center">
      <h1 className="text-6xl font-bold font-[var(--font-heading)] text-[#C8A84E] mb-4">
        404
      </h1>
      <h2 className="text-2xl font-semibold mb-2">Halaman Tidak Ditemukan</h2>
      <p className="text-cream-100/60 max-w-md mb-8">
        Maaf, halaman yang Anda cari tidak dapat ditemukan atau telah dipindahkan.
      </p>
      <Link
        to="/"
        className="bg-[#C8A84E] hover:bg-[#D4BA6A] text-[#0B2314] px-8 py-3 rounded-full font-bold transition-all"
      >
        Kembali ke Beranda
      </Link>
    </div>
  );
}
