import { FaHome, FaTree, FaCrown, FaSeedling, FaGraduationCap } from "react-icons/fa";

const projects = [
  {
    title: "The Hanjawong Villas",
    desc: "Kavling eksklusif di Jalur Puncak 2 mengusung konsep Eropa Klasik dengan legalitas SHM.",
    img: "/portfolio-hanjawong.png",
    icon: FaHome,
    tag: "PUNCAK 2 BOGOR",
  },
  {
    title: "Luxury View",
    desc: "Kavling bernuansa resort dengan lokasi tenang, nyaman, dan sejuk khas pegunungan.",
    img: "/portfolio-luxury.png",
    icon: FaTree,
    tag: "RESORT KAVLING",
  },
  {
    title: "The Halimun Salak",
    desc: "Kavling eksklusif di Jalur Puncak mengusung konsep Ala Eropa dengan legalitas SHM.",
    img: "/portfolio-halimun.jpg",
    icon: FaCrown,
    tag: "EUROPEAN LIVING",
  },
  {
    title: "Kavling Sawah",
    desc: "Kavling produktif dengan konsep agro investasi sawah dan potensi penghasilan jangka panjang.",
    img: "/portfolio-sawah.png",
    icon: FaSeedling,
    tag: "AGRO INVESTASI",
  },
  {
    title: "Agroeduwisata",
    desc: "Kavling edukatif untuk pertanian produktif sekaligus destinasi wisata keluarga yang asri.",
    img: "/portfolio-agro.jpg",
    icon: FaGraduationCap,
    tag: "EDUTOURISM",
  },
];

export default function PortfolioProjects() {
  return (
    <section id="portfolio" className="pt-8 pb-20 md:pt-12 md:pb-28 bg-[#050505] border-b border-zinc-950 relative overflow-hidden">
      {/* Decorative Orbs */}
      <div className="absolute top-1/3 right-1/4 w-[350px] h-[350px] bg-[#aa873c]/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/4 w-[300px] h-[300px] bg-[#0057B8]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <span className="text-[#0082FB] text-xs tracking-[0.25em] uppercase font-bold">
            Project Unggulan Kami
          </span>
          <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-3 uppercase italic tracking-wide">
            Our Portfolio Projects
          </h2>
          <p className="text-zinc-400 mt-4 max-w-3xl mx-auto text-sm sm:text-base leading-relaxed">
            Daftar proyek kavling premium bernilai investasi tinggi yang telah dikembangkan dengan legalitas aman dan konsep tata ruang eksklusif.
          </p>
        </div>

        {/* 3 + 2 Grid Layout */}
        {/* Row 1: 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-6 lg:mb-8">
          {projects.slice(0, 3).map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className="group relative bg-[#121212] border border-zinc-850 rounded-sm overflow-hidden hover:border-[#aa873c]/40 transition-all duration-500 shadow-xl flex flex-col justify-between"
              >
                <div>
                  {/* Image wrapper */}
                  <div className="relative aspect-[1024/575] w-full overflow-hidden bg-zinc-950 border-b border-zinc-900">
                    <img
                      src={p.img}
                      alt={p.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    {/* Badge Tag overlay */}
                    <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md border border-zinc-800 px-3 py-1 text-[10px] tracking-widest text-[#c8a84e] uppercase font-bold">
                      {p.tag}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-[#aa873c]/10 text-[#c8a84e] rounded-sm shrink-0 border border-[#aa873c]/20">
                        <Icon size={14} />
                      </div>
                      <h3 className="font-[var(--font-heading)] text-base font-bold text-white uppercase tracking-wide">
                        {p.title}
                      </h3>
                    </div>
                    <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                </div>
                
                {/* Visual Accent footer bar */}
                <div className="h-1 bg-gradient-to-r from-transparent via-[#aa873c]/30 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </div>
            );
          })}
        </div>

        {/* Row 2: 2 Centered Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
          {projects.slice(3, 5).map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className="group relative bg-[#121212] border border-zinc-850 rounded-sm overflow-hidden hover:border-[#aa873c]/40 transition-all duration-500 shadow-xl flex flex-col justify-between"
              >
                <div>
                  {/* Image wrapper */}
                  <div className="relative aspect-[1024/575] w-full overflow-hidden bg-zinc-950 border-b border-zinc-900">
                    <img
                      src={p.img}
                      alt={p.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    {/* Badge Tag overlay */}
                    <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md border border-zinc-800 px-3 py-1 text-[10px] tracking-widest text-[#c8a84e] uppercase font-bold">
                      {p.tag}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-[#aa873c]/10 text-[#c8a84e] rounded-sm shrink-0 border border-[#aa873c]/20">
                        <Icon size={14} />
                      </div>
                      <h3 className="font-[var(--font-heading)] text-base font-bold text-white uppercase tracking-wide">
                        {p.title}
                      </h3>
                    </div>
                    <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                </div>

                {/* Visual Accent footer bar */}
                <div className="h-1 bg-gradient-to-r from-transparent via-[#aa873c]/30 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
