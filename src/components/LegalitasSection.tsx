import { useState } from "react";
import { FaWhatsapp, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { ADMIN_WA } from "@/data/initialKavlings";

const handoverPhotos = [
  { src: "/legalitas-1.webp", alt: "Serah Terima Sertifikat Konsumen 1" },
  { src: "/legalitas-2.webp", alt: "Serah Terima Sertifikat Konsumen 2" },
  { src: "/legalitas-3.webp", alt: "Serah Terima Sertifikat Konsumen 3" },
  { src: "/legalitas-4.webp", alt: "Serah Terima Sertifikat Konsumen 4" },
  { src: "/legalitas-5.webp", alt: "Serah Terima Sertifikat Konsumen 5" },
  { src: "/legalitas-6.webp", alt: "Serah Terima Sertifikat Konsumen 6" },
  { src: "/legalitas-7.webp", alt: "Serah Terima Sertifikat Konsumen 7" },
  { src: "/legalitas-8.webp", alt: "Serah Terima Sertifikat Konsumen 8" },
  { src: "/legalitas-9.webp", alt: "Serah Terima Sertifikat Konsumen 9" },
  { src: "/legalitas-10.webp", alt: "Serah Terima Sertifikat Konsumen 10" },
  { src: "/legalitas-11.webp", alt: "Serah Terima Sertifikat Konsumen 11" },
  { src: "/legalitas-12.webp", alt: "Serah Terima Sertifikat Konsumen 12" },
];

const documents = [
  { name: "Sertifikat Hak Milik (SHM) Induk", desc: "Sudah pecah dan siap diproses balik nama ke konsumen." },
  { name: "Izin Lokasi & Tata Ruang", desc: "Kawasan berada di Zona Kuning (PP3) peruntukan pemukiman." },
  { name: "Fatwa Pengarahan Lahan (FPL)", desc: "Resmi diterbitkan oleh dinas terkait untuk pembangunan villa." },
  { name: "Izin Peruntukan Penggunaan Tanah (IPPT)", desc: "Aman dan legal untuk pembangunan infrastruktur kawasan." },
];

export default function LegalitasSection() {
  const [showAll, setShowAll] = useState(false);

  const visiblePhotos = showAll ? handoverPhotos : handoverPhotos.slice(0, 8);

  return (
    <section id="legalitas" className="py-20 md:py-28 bg-white text-zinc-900 border-b border-zinc-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="text-[#0057B8] text-xs tracking-[0.25em] uppercase font-bold">
            Legalitas & Transparansi
          </span>
          <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl font-extrabold text-black mt-3 uppercase tracking-wide leading-tight">
            Bukti Nyata Investasi Aman & Terpercaya
          </h2>
          <p className="text-zinc-500 mt-4 max-w-3xl mx-auto text-sm md:text-base leading-relaxed">
            Dokumentasi serah terima sertifikat secara simbolis kepada para konsumen sebagai bukti bahwa proses transaksi dilakukan secara transparan, legal, dan aman.
          </p>
        </div>

        {/* Responsive Grid Layout (Different from competitor's slider) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 mb-10 transition-all duration-500">
          {visiblePhotos.map((photo, index) => (
            <div 
              key={index} 
              className="group bg-white border border-zinc-200/80 rounded-xl overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-350"
            >
              <div className="aspect-[3/4] w-full overflow-hidden bg-zinc-100">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mb-16">
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-2 px-6 py-3 border border-zinc-300 hover:border-zinc-800 text-zinc-700 hover:text-black text-xs font-bold uppercase tracking-wider transition-all rounded-sm cursor-pointer"
          >
            {showAll ? (
              <>
                Sembunyikan Foto <FaChevronUp />
              </>
            ) : (
              <>
                Tampilkan Semua Foto ({handoverPhotos.length}) <FaChevronDown />
              </>
            )}
          </button>
        </div>

        {/* Mobile Swipe Hint */}
        <div className="flex items-center justify-center gap-1.5 text-[10px] text-zinc-400 uppercase tracking-widest md:hidden mb-6 animate-pulse">
          <span>Geser ke samping</span>
          <span>➔</span>
        </div>

        {/* Legal documents list - Premium Light Style */}
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 scrollbar-none md:grid md:grid-cols-2 md:gap-6 max-w-5xl mx-auto">
          {documents.map((doc, index) => (
            <div 
              key={index} 
              className="w-[85%] max-w-[320px] shrink-0 snap-center md:w-auto bg-zinc-50/50 p-6 border border-zinc-200/60 rounded-sm hover:border-[#0082FB]/40 transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-[#0057B8]/10 flex items-center justify-center shrink-0 text-[#0057B8] font-black text-sm">
                  ✓
                </div>
                <div>
                  <h4 className="font-[var(--font-heading)] font-bold text-sm text-black uppercase tracking-wider mb-1">
                    {doc.name}
                  </h4>
                  <p className="text-zinc-500 text-xs leading-relaxed">
                    {doc.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-12">
          <a
            href={`https://wa.me/${ADMIN_WA}?text=Hallo%20saya%20ingin%20tanya%20detail%20legalitas%20dan%20dokumen%20The%20Halimun%20Salak`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#0057B8] hover:bg-[#0082FB] text-white px-7 py-4 text-xs font-bold uppercase tracking-widest transition-all shadow-md cursor-pointer hover:shadow-lg rounded-sm"
          >
            <FaWhatsapp size={15} />
            Hubungi Admin untuk Legalitas & Dokumen
          </a>
        </div>
      </div>
    </section>
  );
}