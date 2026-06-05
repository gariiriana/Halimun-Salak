"use client";

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
    icon: <FiShield size={28} />,
    title: "Safety",
    desc: "Developer terpercaya sejak 2019 — PT Alam Barokah Hasanah (Nuansa Alam). Sukses membangun 10 proyek kavling tematik. Legalitas Clear & Clean SHM.",
    color: "text-green-400",
  },
  {
    icon: <FiStar size={28} />,
    title: "Beauty",
    desc: "Hunian villa bernuansa alam premium, mengedepankan konsep eco-luxury living menyatu dengan alam dan bangunan bergaya Eropa Classic tanpa meninggalkan kenyamanan modern.",
    color: "text-gold-400",
  },
  {
    icon: <FiTrendingUp size={28} />,
    title: "Profitable",
    desc: "Kawasan berkembang dekat Exit Tol Caringin/Cigombong & Stasiun Kereta. Investasi tanah yang terus naik nilainya di kawasan puncak Bogor Selatan.",
    color: "text-blue-400",
  },
  {
    icon: <FiAward size={28} />,
    title: "Excellence",
    desc: "View Gunung Salak & Pangrango, City Light View MNC Lido. Tanah Merah Subur datar, Zona Kuning bisa dibangun permanen. Suasana asri, udara bersih, bebas polusi.",
    color: "text-purple-400",
  },
  {
    icon: <FiGrid size={28} />,
    title: "Amenities",
    desc: "One Gate System, Jalan 6 Meter Aspal, Listrik Underground, Musholla, Redbarn Cafe & Resto, Windmill, Kolam Ikan, Garden/Taman.",
    color: "text-orange-400",
  },
  {
    icon: <FiMap size={28} />,
    title: "Strategic",
    desc: "50m ke SDN Ciburayut 02, 100m ke Kantor Desa, 200m ke Puskesmas, 500m ke Alun-Alun. 2 Menit ke Salacca Cafe, 12 Menit ke Stasiun Cigombong, 30 Menit dari Tol Caringin.",
    color: "text-cyan-400",
  },
];

export default function ValueSection() {
  return (
    <section id="tentang" className="py-24 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-gold-500 text-sm tracking-[0.2em] uppercase font-semibold">
            Why Choose Us
          </span>
          <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl font-bold text-forest-900 mt-3">
            Keunggulan The Halimun Salak
          </h2>
          <p className="text-forest-700/70 mt-4 max-w-2xl mx-auto text-lg">
            Kawasan villa/hunian ala Eropa dengan view langsung ke Gunung Salak
            dan Gunung Pangrango, ketinggian 560 MDPL.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((v) => (
            <div
              key={v.title}
              className="group bg-white rounded-2xl p-8 border border-forest-800/5 hover:border-gold-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-forest-900/5 hover:-translate-y-1"
            >
              <div
                className={`w-14 h-14 rounded-xl bg-forest-950 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform ${v.color}`}
              >
                {v.icon}
              </div>
              <h3 className="font-[var(--font-heading)] text-xl font-bold text-forest-900 mb-3">
                {v.title}
              </h3>
              <p className="text-forest-700/70 leading-relaxed text-sm">
                {v.desc}
              </p>
            </div>
          ))}
        </div>

        {/* The Concept */}
        <div className="mt-20 bg-forest-950 rounded-3xl p-8 sm:p-12 lg:p-16 text-center gold-border">
          <span className="text-gold-400 text-sm tracking-[0.2em] uppercase font-semibold">
            The Concept
          </span>
          <h3 className="font-[var(--font-heading)] text-2xl sm:text-3xl lg:text-4xl font-bold text-white mt-4 mb-6">
            &ldquo;Kavling Villa Eksklusif ala Eropa&rdquo;
          </h3>
          <p className="text-cream-100/70 max-w-3xl mx-auto text-lg leading-relaxed">
            The Halimun Salak dirancang sebagai kawasan hunian villa bernuansa
            alam premium, yang mengedepankan konsep eco-luxury living menyatu
            dengan alam dan bangunan bergaya Eropa tanpa meninggalkan kenyamanan
            modern. Cocok untuk private villa, resort, maupun investasi jangka
            panjang.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            {["Private Villa", "Resort", "Investasi Jangka Panjang"].map(
              (tag) => (
                <span
                  key={tag}
                  className="px-5 py-2 border border-gold-500/30 text-gold-400 rounded-full text-sm"
                >
                  {tag}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
