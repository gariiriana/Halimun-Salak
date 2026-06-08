import {
  FiShield,
  FiStar,
  FiTrendingUp,
  FiAward,
  FiGrid,
  FiMap,
} from "react-icons/fi";

const values = [
  {
    icon: <FiShield size={20} />,
    title: "SAFETY & SECURITY",
    desc: "Developer terpercaya sejak 2019 — PT Alam Barokah Hasanah (Nuansa Alam). Sukses membangun 10 proyek kavling tematik. Legalitas Clear & Clean SHM.",
  },
  {
    icon: <FiStar size={20} />,
    title: "BEAUTIFUL PANORAMA",
    desc: "Hunian villa bernuansa alam premium, mengedepankan konsep eco-luxury living menyatu dengan alam dan bangunan bergaya Eropa Classic tanpa meninggalkan kenyamanan modern.",
  },
  {
    icon: <FiTrendingUp size={20} />,
    title: "HIGHLY PROFITABLE",
    desc: "Kawasan berkembang dekat Exit Tol Caringin/Cigombong & Stasiun Kereta. Investasi tanah yang terus naik nilainya di kawasan puncak Bogor Selatan.",
  },
  {
    icon: <FiAward size={20} />,
    title: "EXCELLENCE & COMFORT",
    desc: "View Gunung Salak & Pangrango, City Light View MNC Lido. Tanah Merah Subur datar, Zona Kuning bisa dibangun permanen. Suasana asri, udara bersih, bebas polusi.",
  },
  {
    icon: <FiGrid size={20} />,
    title: "PREMIUM AMENITIES",
    desc: "One Gate System, Jalan 6 Meter Aspal, Listrik Underground, Musholla, Redbarn Cafe & Resto, Windmill, Kolam Ikan, Garden/Taman.",
  },
  {
    icon: <FiMap size={20} />,
    title: "STRATEGIC LOCATION",
    desc: "50m ke SDN Ciburayut 02, 100m ke Kantor Desa, 200m ke Puskesmas, 500m ke Alun-Alun. 2 Menit ke Salacca Cafe, 12 Menit ke Stasiun Cigombong, 30 Menit dari Tol Caringin.",
  },
];

export default function SiteplanMap() {
  return (
    <section id="konsep" className="pt-20 pb-8 md:pt-28 md:pb-12 bg-[#050505] border-t border-zinc-900 border-b border-zinc-900 relative overflow-hidden">
      {/* Background tech glow */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#0057B8]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="text-[#0082FB] text-xs tracking-[0.25em] uppercase font-bold">
            Siteplan & Keunggulan
          </span>
          <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-3 uppercase italic tracking-wide">
            Kawasan & Peta Siteplan The Halimun Salak
          </h2>
          <p className="text-zinc-400 mt-4 max-w-2xl mx-auto text-sm leading-relaxed">
            Layout rencana siteplan kawasan kavling The Halimun Salak bersanding dengan berbagai keunggulan utama proyek.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left: Static Siteplan Map Image */}
          <div id="siteplan" className="lg:col-span-8 space-y-6 scroll-mt-24">
            <div className="border-l-2 border-[#0082FB] pl-4 mb-4">
              <span className="text-[#0082FB] text-xs tracking-[0.25em] uppercase font-bold">
                Map View
              </span>
              <h3 className="font-[var(--font-heading)] text-lg md:text-xl font-bold text-white uppercase italic">
                Gambar Rencana Siteplan
              </h3>
            </div>

            {/* Siteplan Image */}
            <div className="bg-[#121212] border border-zinc-800/80 rounded-sm p-2 overflow-hidden shadow-2xl relative">
              <img
                src="/the-halimun-salak-siteplan.png"
                alt="Siteplan Peta Kavling The Halimun Salak"
                className="w-full h-auto object-contain rounded-xs"
              />
            </div>
          </div>

          {/* Right: Keunggulan (Why Choose Us) Cards */}
          <div className="lg:col-span-4 space-y-6">
            <div className="border-l-2 border-[#0082FB] pl-4 mb-4">
              <span className="text-[#0082FB] text-xs tracking-[0.25em] uppercase font-bold">
                Why Choose Us
              </span>
              <h3 className="font-[var(--font-heading)] text-lg md:text-xl font-bold text-white uppercase italic">
                Keunggulan Utama
              </h3>
            </div>

            {/* Mobile Swipe Hint */}
            <div className="flex items-center justify-center gap-1.5 text-[10px] text-zinc-500 uppercase tracking-widest lg:hidden mb-4 animate-pulse">
              <span>Geser ke samping</span>
              <span>➔</span>
            </div>

            <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 scrollbar-none lg:flex-col lg:space-y-4 lg:max-h-[660px] lg:overflow-y-auto lg:pr-2 lg:custom-scrollbar lg:pb-0 lg:overflow-x-visible lg:snap-none">
              {values.map((v) => (
                <div
                  key={v.title}
                  className="w-[85%] max-w-[320px] shrink-0 snap-center lg:w-auto group bg-[#121212] p-5 border border-zinc-800/80 hover:border-[#0082FB]/40 transition-all duration-300 rounded-sm"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 shrink-0 bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:bg-[#0057B8] group-hover:text-white transition-all text-[#0082FB]">
                      {v.icon}
                    </div>
                    <div>
                      <h4 className="font-[var(--font-heading)] text-xs font-bold text-white tracking-wider uppercase mb-1">
                        {v.title}
                      </h4>
                      <p className="text-zinc-400 leading-relaxed text-[11px] md:text-xs">
                        {v.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
