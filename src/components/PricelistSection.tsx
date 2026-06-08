import { useState } from "react";
import { FiSearch, FiX } from "react-icons/fi";
import { ADMIN_WA } from "@/data/initialKavlings";

export default function PricelistSection() {
  const [activeTab, setActiveTab] = useState<"cash" | "cicilan">("cash");
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  return (
    <section id="pricelist" className="py-16 md:py-28 bg-[#f8f9fa] border-b border-zinc-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-10 md:mb-16">
          <span className="text-[#0057B8] text-xs tracking-[0.25em] uppercase font-bold">
            Pricelist Kavling
          </span>
          <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl font-extrabold text-black mt-3 uppercase italic tracking-wide">
            Pricelist The Halimun Salak
          </h2>
          <p className="text-zinc-500 mt-4 max-w-3xl mx-auto text-sm sm:text-base leading-relaxed">
            Informasi harga kavling villa premium dengan pilihan pembayaran cash maupun cicilan sesuai kebutuhan investasi Anda.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveTab("cash")}
            id="tab-btn-cash"
            className={`px-6 py-3.5 text-xs font-bold uppercase tracking-wider transition-all duration-300 rounded-sm border ${
              activeTab === "cash"
                ? "bg-[#0057B8] text-white border-[#0057B8] shadow-md shadow-[#0057B8]/20"
                : "bg-white text-zinc-500 border-zinc-200 hover:text-zinc-800 hover:bg-zinc-50"
            }`}
          >
            Skema Cash
          </button>
          <button
            onClick={() => setActiveTab("cicilan")}
            id="tab-btn-cicilan"
            className={`px-6 py-3.5 text-xs font-bold uppercase tracking-wider transition-all duration-300 rounded-sm border ${
              activeTab === "cicilan"
                ? "bg-[#0057B8] text-white border-[#0057B8] shadow-md shadow-[#0057B8]/20"
                : "bg-white text-zinc-500 border-zinc-200 hover:text-zinc-800 hover:bg-zinc-50"
            }`}
          >
            Skema Cicilan
          </button>
        </div>

        {/* Main Flyer Showcase */}
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-4">
            <h3 className="text-xs font-black uppercase tracking-widest text-[#0057B8]">
              {activeTab === "cash" ? "Brosur Skema Cash" : "Brosur Skema Cicilan"}
            </h3>
            <p className="text-[10px] text-zinc-400 mt-1 uppercase tracking-wider">
              Klik gambar brosur di bawah untuk memperbesar detail tabel harga resmi
            </p>
          </div>

          <div
            onClick={() => setIsLightboxOpen(true)}
            id="flyer-zoom-trigger"
            className="group relative cursor-zoom-in aspect-[1/1] w-full bg-white border border-zinc-200 rounded-sm overflow-hidden shadow-lg hover:shadow-2xl hover:border-[#0057B8]/50 transition-all duration-350"
          >
            <img
              src={activeTab === "cash" ? "/pricelist-cash.webp" : "/pricelist-cicilan.webp"}
              alt={`Official Pricelist ${activeTab}`}
              className="w-full h-full object-contain p-2 md:p-4 group-hover:scale-102 transition-transform duration-500"
            />
            
            {/* Zoom Overlay */}
            <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="bg-black/80 text-white text-[10px] font-black tracking-widest uppercase py-3 px-6 rounded-sm flex items-center gap-2 border border-zinc-800 shadow-xl">
                <FiSearch size={14} className="text-[#0082FB]" />
                Perbesar Tabel Harga
              </div>
            </div>
          </div>

          {/* Download & Custom CTA */}
          <div className="mt-8 text-center space-y-3">
            <a
              href={`https://wa.me/${ADMIN_WA}?text=Hallo%20saya%20tertarik%20dengan%20kavling%20The%20Halimun%20Salak.%20Mohon%20kirimkan%20PDF%20Pricelist%20Resmi%20untuk%20${
                activeTab === "cash" ? "Skema%20Cash" : "Skema%20Cicilan"
              }.`}
              target="_blank"
              rel="noopener noreferrer"
              id="pricelist-download-cta"
              className="inline-flex items-center gap-3 bg-[#0057B8] hover:bg-[#0082FB] text-white px-8 py-4.5 text-xs font-black uppercase tracking-widest transition-all shadow-md hover:shadow-lg rounded-sm cursor-pointer"
            >
              Minta Pricelist PDF via WhatsApp
            </a>
            <p className="text-zinc-500 text-[10px] uppercase tracking-wider">
              Bisa survey lokasi • Konsultasi gratis • Respon cepat
            </p>
          </div>
        </div>

      </div>

      {/* Lightbox Modal for Zooming Flyer */}
      {isLightboxOpen && (
        <div
          onClick={() => setIsLightboxOpen(false)}
          id="flyer-lightbox-backdrop"
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-8 cursor-zoom-out animate-fade-in"
        >
          <div className="relative max-w-4xl max-h-[85vh] w-full h-full flex items-center justify-center">
            <img
              src={activeTab === "cash" ? "/pricelist-cash.webp" : "/pricelist-cicilan.webp"}
              alt={`Zoomed Pricelist ${activeTab}`}
              className="max-w-full max-h-full object-contain p-2 bg-white rounded-sm shadow-2xl animate-scale-in"
            />
            <button
              onClick={() => setIsLightboxOpen(false)}
              id="flyer-lightbox-close"
              className="absolute -top-12 right-0 text-white hover:text-[#0082FB] text-xs font-bold tracking-widest uppercase cursor-pointer py-2 px-4 flex items-center gap-1.5"
            >
              TUTUP <FiX size={16} />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
