import { useState } from "react";

const items = [
  {
    src: "/media__1780626920799.png",
    category: "villa",
    title: "Desain Villa Eropa Modern",
    desc: "Villa bergaya country classic dengan sentuhan modern.",
  },
  {
    src: "/media__1780626931965.png",
    category: "villa",
    title: "Fasad Villa Kontemporer",
    desc: "Perpaduan aksen kayu alami dan struktur kaca mewah.",
  },
  {
    src: "/media__1780626887208.png",
    category: "fasilitas",
    title: "The Little Redbarn Resto",
    desc: "Resto ikonik bergaya lumbung Eropa di tengah kawasan.",
  },
  {
    src: "/media__1780627061945.png",
    category: "fasilitas",
    title: "Kincir Angin (Windmill)",
    desc: "Landmark kincir angin ikonik menghadirkan suasana khas Eropa.",
  },
  {
    src: "/media__1780627142348.png",
    category: "portfolio",
    title: "Nulam Coffee & Resto",
    desc: "Bisnis kuliner mandiri sukses besutan developer.",
  },
  {
    src: "/media__1780627152142.png",
    category: "portfolio",
    title: "Nulam Qurani Pesantren",
    desc: "Fasilitas pendidikan religi yang terintegrasi di kawasan.",
  },
  {
    src: "/media__1780627182606.png",
    category: "portfolio",
    title: "Glamping & Campsite",
    desc: "Area perkemahan mewah dengan pemandangan pegunungan indah.",
  },
  {
    src: "/media__1780627014038.png",
    category: "fasilitas",
    title: "Taman Bunga Eropa",
    desc: "Taman hijau dan hamparan bunga berwarna-warni yang asri.",
  },
  {
    src: "/media__1780627028134.png",
    category: "fasilitas",
    title: "Gerbang One Gate System",
    desc: "Sistem keamanan satu pintu dengan pos penjagaan 24 jam.",
  },
];

const categories = [
  { id: "all", label: "Semua Foto" },
  { id: "villa", label: "Desain Villa" },
  { id: "fasilitas", label: "Fasilitas & Area" },
  { id: "portfolio", label: "Portofolio Bisnis" },
];

export default function GallerySection() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredItems =
    activeTab === "all" ? items : items.filter((item) => item.category === activeTab);

  return (
    <section id="galeri" className="py-12 md:py-24 section-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 md:mb-16">
          <span className="text-gold-500 text-sm tracking-[0.2em] uppercase font-semibold">
            Gallery & Portofolio
          </span>
          <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-3">
            Inspirasi Desain & Proyek Terbangun
          </h2>
          <p className="text-cream-100/60 mt-4 max-w-2xl mx-auto text-sm sm:text-base">
            Visualisasi kawasan bertema Eropa Modern dan bukti portofolio sukses dari Nuansa Alam (Tahap 1 - 10) sebagai jaminan kepuasan Anda.
          </p>
        </div>

        {/* Tab Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-6 md:mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-4 py-2 md:px-6 md:py-2.5 rounded-full text-xs md:text-sm font-semibold transition-all ${
                activeTab === cat.id
                  ? "bg-gold-500 text-forest-950 shadow-lg shadow-gold-500/20"
                  : "bg-white/5 text-cream-100/70 hover:bg-white/10 hover:text-white"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 animate-scale-in">
          {filteredItems.map((item, idx) => (
            <div
              key={idx}
              className="group relative bg-forest-900/40 border border-white/5 rounded-2xl overflow-hidden hover:border-gold-500/30 transition-all duration-500"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3 md:p-6" />
              </div>
              
              <div className="p-3 md:p-6 relative z-10">
                <span className="text-gold-400 text-[9px] md:text-xs tracking-wider uppercase font-semibold">
                  {item.category === "villa"
                    ? "Villa Design"
                    : item.category === "fasilitas"
                    ? "Amenities"
                    : "Developer's Portfolio"}
                </span>
                <h3 className="font-[var(--font-heading)] text-sm md:text-lg font-bold text-white mt-1 mb-1 md:mb-2">
                  {item.title}
                </h3>
                <p className="text-cream-100/60 text-[10px] md:text-sm line-clamp-2">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
