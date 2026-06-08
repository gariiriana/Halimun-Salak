import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { ADMIN_WA } from "@/data/initialKavlings";

const villaTypes = [
  {
    id: "a",
    name: "Tipe A",
    fullName: "Tipe A - Compact Villa",
    desc: "Desain villa minimalis modern dengan efisiensi ruang tinggi, sangat cocok untuk peristirahatan akhir pekan keluarga kecil Anda.",
    images: ["/DESAIN-VILLA-HALIMUN-SALAK-1.1.webp", "/DESAIN-VILLA-HALIMUN-SALAK-1.2.webp"],
    badges: ["Full View Pegunungan", "Konsep Eropa Modern", "Desain Efisien", "Cocok Villa Pribadi"],
  },
  {
    id: "b",
    name: "Tipe B",
    fullName: "Tipe B - Family Villa",
    desc: "Villa ideal untuk keluarga dengan ruang tamu luas, halaman belakang asri, dan balkon yang menghadap langsung ke arah pemandangan pegunungan.",
    images: ["/DESAIN-VILLA-HALIMUN-SALAK-2.1.webp", "/DESAIN-VILLA-HALIMUN-SALAK-2.2.webp"],
    badges: ["Ruang Tamu Luas", "Konsep Eropa Modern", "Halaman Asri", "Cocok Villa Pribadi"],
  },
  {
    id: "c",
    name: "Tipe C",
    fullName: "Tipe C - Panoramic Villa",
    desc: "Desain dengan dinding kaca maksimal untuk menyajikan view pegunungan secara menyeluruh tanpa batas dari dalam kamar dan ruang santai.",
    images: ["/DESAIN-VILLA-HALIMUN-SALAK-3.1.webp", "/DESAIN-VILLA-HALIMUN-SALAK-3.2.webp"],
    badges: ["Dinding Kaca Maksimal", "Panoramic View", "Eropa Klasik Modern", "Potensi Capital Gain"],
  },
  {
    id: "d",
    name: "Tipe D",
    fullName: "Tipe D - Long Villa",
    desc: "Desain memanjang yang mengoptimalkan lebar kavling untuk tata ruang yang leluasa, pencahayaan alami yang melimpah, dan ventilasi udara yang sejuk.",
    images: ["/DESAIN-VILLA-HALIMUN-SALAK-4.1.webp", "/DESAIN-VILLA-HALIMUN-SALAK-4.2.webp"],
    badges: ["Tata Ruang Leluasa", "Ventilasi Maksimal", "Desain Memanjang", "Konsep Eco-Luxury"],
  },
  {
    id: "e",
    name: "Tipe E",
    fullName: "Tipe E - Signature Villa",
    desc: "Villa eksklusif dengan aksen fasad kayu alami dikombinasikan dengan sentuhan batu alam mewah, mengekspresikan karakter kokoh dan elegan.",
    images: ["/DESAIN-VILLA-HALIMUN-SALAK-5.1.webp", "/DESAIN-VILLA-HALIMUN-SALAK-5.2.webp"],
    badges: ["Fasad Kayu & Batu", "Desain Elegan", "Kawasan Premium", "Investasi Tinggi"],
  },
  {
    id: "f",
    name: "Tipe F",
    fullName: "Tipe F - Luxury Villa",
    desc: "Karya arsitektur termegah di kawasannya. Menawarkan spesifikasi premium, tata ruang ganda, dan teras atap luas untuk menikmati pemandangan bintang di malam hari.",
    images: ["/DESAIN-VILLA-HALIMUN-SALAK-6.1.webp", "/DESAIN-VILLA-HALIMUN-SALAK-6.2.webp"],
    badges: ["Tata Ruang Ganda", "Roof Terrace Luas", "Karya Megah", "Spesifikasi Premium"],
  },
];

export default function DesainVillaSection() {
  const [activeTab, setActiveTab] = useState(villaTypes[0].id);
  const activeType = villaTypes.find((t) => t.id === activeTab) || villaTypes[0];

  return (
    <section id="desain" className="py-20 md:py-28 bg-[#f8f9fa] border-b border-zinc-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-20">
          <span className="text-[#0057B8] text-xs tracking-[0.25em] uppercase font-bold">
            Desain Villa
          </span>
          <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl font-extrabold text-black mt-3 uppercase italic tracking-wide">
            Inspirasi Desain Villa Eropa
          </h2>
          <p className="text-zinc-500 mt-4 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Konsep villa eksklusif bernuansa Eropa Klasik Modern yang menyatu dengan keindahan alam pegunungan Bogor Selatan.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="grid grid-cols-3 sm:flex sm:flex-wrap sm:justify-center gap-2 max-w-2xl mx-auto mb-10 md:mb-14">
          {villaTypes.map((type) => (
            <button
              key={type.id}
              onClick={() => setActiveTab(type.id)}
              className={`px-3 py-3 text-xs font-bold uppercase tracking-wider transition-all duration-300 rounded-md border text-center cursor-pointer ${
                activeTab === type.id
                  ? "bg-[#0057B8] text-white border-[#0057B8] shadow-md shadow-[#0057B8]/20"
                  : "bg-white text-zinc-500 border-zinc-200 hover:text-zinc-800 hover:bg-zinc-50 hover:border-zinc-300"
              }`}
            >
              {type.name}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="grid lg:grid-cols-12 gap-8 md:gap-12 items-center">
          {/* Text and Details */}
          <div className="lg:col-span-5 space-y-6 order-2 lg:order-1">
            <span className="bg-[#0057B8]/10 text-[#0057B8] text-[10px] font-extrabold tracking-widest px-3 py-1 rounded-sm uppercase">
              Villa Eco Luxury Living
            </span>
            <h3 className="font-[var(--font-heading)] text-2xl sm:text-3xl font-extrabold text-black tracking-wide uppercase italic">
              {activeType.fullName}
            </h3>
            <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
              {activeType.desc}
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              {activeType.badges.map((badge) => (
                <span
                  key={badge}
                  className="px-3 py-1.5 bg-white border border-zinc-200 text-zinc-500 text-[10px] font-bold uppercase tracking-wider rounded-sm shadow-sm"
                >
                  {badge}
                </span>
              ))}
            </div>

            <div className="pt-4">
              <a
                href={`https://wa.me/${ADMIN_WA}?text=Hallo%20saya%20ingin%20lihat%20desain%20villa%20The%20Halimun%20Salak%20${activeType.name}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#0057B8] hover:bg-[#0082FB] text-white px-7 py-4 text-xs font-bold uppercase tracking-widest transition-all shadow-md cursor-pointer hover:shadow-lg rounded-sm"
              >
                <FaWhatsapp size={15} />
                Lihat Semua Tipe & Konsultasi
              </a>
            </div>
          </div>

          {/* Image Display */}
          <div className="lg:col-span-7 grid grid-cols-2 gap-3 sm:gap-4 order-1 lg:order-2">
            {activeType.images.map((img, idx) => (
              <div
                key={idx}
                className="group relative aspect-[4/3] bg-zinc-200 border border-zinc-300 rounded-sm overflow-hidden shadow-md hover:border-[#0057B8]/60 transition-all duration-300"
              >
                <img
                  src={img}
                  alt={`${activeType.fullName} - View ${idx + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-2 left-2 bg-black/70 text-white text-[9px] font-bold tracking-widest px-2 py-0.5 uppercase">
                  View {idx + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
