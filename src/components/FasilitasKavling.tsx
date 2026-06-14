import { FaUtensils, FaShieldAlt, FaWind, FaMosque } from "react-icons/fa";

const facilities = [
  {
    title: "The Little Redbarn Resto",
    desc: "Restoran & cafe berarsitektur lumbung Eropa klasik yang unik dan ikonik. Menjadi pusat kuliner hangat untuk berkumpul bersama keluarga di tengah sejuknya udara pegunungan Bogor Selatan.",
    img: "/facility-1.png",
    icon: FaUtensils,
    tag: "RESTO & CAFE",
  },
  {
    title: "One Gate System & Gapura Utama",
    desc: "Akses masuk satu gerbang yang dijaga ketat oleh tim keamanan 24 jam. Dilengkapi gapura megah bertema Eropa Klasik yang menjamin privasi, kenyamanan, dan rasa aman bagi setiap warga.",
    img: "/facility-2.png",
    icon: FaShieldAlt,
    tag: "KEAMANAN 24 JAM",
  },
  {
    title: "Kincir Angin Belanda (Windmill)",
    desc: "Landmark kincir angin Belanda klasik setinggi 12 meter yang dibangun presisi. Dikelilingi taman bunga lavender yang indah, menjadikannya ikon estetika utama dan spot foto favorit warga.",
    img: "/facility-3.png",
    icon: FaWind,
    tag: "LANDMARK IKONIK",
  },
  {
    title: "Musholla Al-Barkah & Area Toilet",
    desc: "Fasilitas ibadah dengan arsitektur Eropa modern yang bersih, sejuk, dan nyaman. Terintegrasi dengan kolam ikan hias air jernih di sekelilingnya untuk menambah ketenangan ibadah Anda.",
    img: "/facility-4.png",
    icon: FaMosque,
    tag: "AREA IBADAH",
  },
];

export default function FasilitasKavling() {
  return (
    <section id="fasilitas" className="pt-8 pb-20 md:pt-12 md:pb-28 bg-[#080808] border-b border-zinc-900 relative overflow-hidden">
      {/* Decorative Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-[#aa873c]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-[#0057B8]/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <span className="text-[#0082FB] text-xs tracking-[0.25em] uppercase font-bold">
            Fasilitas Kavling Premium
          </span>
          <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-3 uppercase italic tracking-wide">
            The Halimun Salak Facilities
          </h2>
          <p className="text-zinc-400 mt-4 max-w-3xl mx-auto text-sm sm:text-base leading-relaxed">
            Fasilitas premium bertema Eropa Modern yang dibangun secara nyata untuk memberikan kenyamanan tinggal sekaligus nilai investasi yang terus bertumbuh tinggi.
          </p>
        </div>

        {/* Balanced 2x2 Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {facilities.map((f, idx) => {
            const Icon = f.icon;
            return (
              <div
                key={idx}
                className="group relative bg-[#121212] border border-zinc-800 rounded-sm overflow-hidden hover:border-[#aa873c]/40 transition-all duration-500 shadow-xl flex flex-col justify-between"
              >
                <div>
                  {/* Image wrapper */}
                  <div className="relative aspect-[1024/575] w-full overflow-hidden bg-zinc-950 border-b border-zinc-900">
                    <img
                      src={f.img}
                      alt={f.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-[#aa873c]/10 text-[#c8a84e] rounded-sm shrink-0 border border-[#aa873c]/20">
                        <Icon size={14} />
                      </div>
                      <h3 className="font-[var(--font-heading)] text-base font-bold text-white uppercase tracking-wide">
                        {f.title}
                      </h3>
                    </div>
                    <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                      {f.desc}
                    </p>
                  </div>
                </div>
                
                {/* Visual Accent footer bar */}
                <div className="h-1 bg-gradient-to-r from-transparent via-[#aa873c]/20 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
