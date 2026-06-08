import { useState } from "react";
import { Link } from "react-router-dom";

const items = [
  {
    id: "desain-villa-eropa-modern",
    src: "/media__1780626920799.png",
    category: "villa",
    title: "Desain Villa Eropa Modern",
    desc: "Villa bergaya country classic dengan sentuhan modern.",
  },
  {
    id: "fasad-villa-kontemporer",
    src: "/media__1780626931965.png",
    category: "villa",
    title: "Fasad Villa Kontemporer",
    desc: "Perpaduan aksen kayu alami dan struktur kaca mewah.",
  },
  {
    id: "the-little-redbarn-resto",
    src: "/media__1780626887208.png",
    category: "fasilitas",
    title: "The Little Redbarn Resto",
    desc: "Resto ikonik bergaya lumbung Eropa di tengah kawasan.",
  },
  {
    id: "kincir-angin-windmill",
    src: "/media__1780627061945.png",
    category: "fasilitas",
    title: "Kincir Angin (Windmill)",
    desc: "Landmark kincir angin ikonik menghadirkan suasana khas Eropa.",
  },
];

const categories = [
  { id: "all", label: "SEMUA FOTO" },
  { id: "villa", label: "DESAIN VILLA" },
  { id: "fasilitas", label: "FASILITAS & AREA" },
];

export default function GallerySection() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredItems =
    activeTab === "all" ? items : items.filter((item) => item.category === activeTab);

  return (
    <section id="fasilitas" className="py-16 md:py-28 bg-black border-b border-zinc-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-20">
          <span className="text-[#0082FB] text-xs tracking-[0.25em] uppercase font-bold">
            Fasilitas & Portofolio
          </span>
          <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-3 uppercase italic tracking-wide">
            Fasilitas & Proyek Sukses Terbangun
          </h2>
          <p className="text-zinc-400 mt-4 max-w-2xl mx-auto text-sm leading-relaxed">
            Visualisasi kawasan bertema Eropa Modern dan bukti portofolio sukses dari Nuansa Alam (Tahap 1 - 10) sebagai jaminan kepuasan Anda.
          </p>
        </div>

        {/* Tab Filters (BYD style underlines) */}
        <div className="flex flex-wrap justify-center gap-1 md:gap-4 mb-10 md:mb-16 border-b border-zinc-900">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-5 py-3 text-xs font-bold tracking-widest transition-all border-b-2 ${
                activeTab === cat.id
                  ? "border-[#0057B8] text-white"
                  : "border-transparent text-zinc-500 hover:text-zinc-300"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 animate-scale-in">
          {filteredItems.map((item, idx) => (
            <Link
              key={idx}
              to={`/gallery/${item.id}`}
              id={`gallery-card-link-${item.id}`}
              className="group relative bg-[#121212] border border-zinc-800 rounded-sm overflow-hidden hover:border-[#0082FB]/50 transition-all duration-500 shadow-xl flex flex-col justify-between cursor-pointer"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3 md:p-6" />
              </div>
              
              <div className="p-3 md:p-6 relative z-10 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[#0082FB] text-[9px] md:text-[10px] tracking-wider uppercase font-bold">
                    {item.category === "villa"
                      ? "VILLA DESIGN"
                      : item.category === "fasilitas"
                      ? "AMENITIES"
                      : "DEVELOPER'S PORTFOLIO"}
                  </span>
                  <h3 className="font-[var(--font-heading)] text-sm md:text-base font-bold text-white mt-1 mb-1 md:mb-2 tracking-wide uppercase">
                    {item.title}
                  </h3>
                  <p className="text-zinc-400 text-[10px] md:text-xs leading-relaxed line-clamp-2">
                    {item.desc}
                  </p>
                </div>
                <div className="mt-4 text-[9px] md:text-[10px] font-black text-[#0082FB] tracking-widest uppercase flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  Lihat Detail <span className="text-xs">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
