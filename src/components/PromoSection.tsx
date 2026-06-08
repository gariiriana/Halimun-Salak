import { FaWhatsapp, FaGift, FaPercentage, FaAward, FaTree, FaInfoCircle } from "react-icons/fa";
import { ADMIN_WA } from "@/data/initialKavlings";

const promoItems = [
  {
    icon: <FaPercentage className="text-amber-400" size={20} />,
    title: "Diskon Kavling",
    desc: "Potongan harga langsung hingga Rp 10 Juta untuk pembelian unit kavling tertentu.",
  },
  {
    icon: <FaAward className="text-amber-400" size={20} />,
    title: "Reward Logam Mulia",
    desc: "Bonus langsung berupa Emas Antam Asli untuk transaksi minggu ini.*",
  },
  {
    icon: <FaTree className="text-amber-400" size={20} />,
    title: "Free Cemara / Pule",
    desc: "Gratis 1 bibit pohon Cemara atau pohon Pule mewah untuk menghias villa Anda.",
  },
  {
    icon: <FaGift className="text-amber-400" size={20} />,
    title: "Free Rumput Jepang",
    desc: "Sudah termasuk penanaman rumput Jepang rapi di seluruh kavling pilihan Anda.",
  },
];

export default function PromoSection() {
  return (
    <section id="promo" className="py-20 md:py-28 bg-[#f8f9fa] border-b border-zinc-200 relative overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute -top-12 -right-12 w-64 h-64 bg-[#0057B8]/5 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-amber-400/5 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="text-amber-500 text-xs tracking-[0.25em] uppercase font-bold">
            Promo Terbatas
          </span>
          <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl font-extrabold text-black mt-3 uppercase italic tracking-wide">
            Promo Khusus Investor Awal!
          </h2>
          <p className="text-zinc-500 mt-4 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Ambil keputusan investasi Anda hari ini dan nikmati keuntungan promo eksklusif untuk pendaftar survey di periode terbatas.
          </p>
        </div>

        {/* Promo Grid */}
        <div className="grid sm:grid-cols-2 gap-6 mb-12">
          {promoItems.map((promo) => (
            <div
              key={promo.title}
              className="bg-white border border-zinc-200 p-6 flex gap-4 hover:border-amber-400/60 hover:shadow-xl hover:shadow-zinc-200/40 transition-all duration-300 rounded-sm"
            >
              <div className="w-12 h-12 bg-zinc-950 border border-zinc-800 flex items-center justify-center rounded-sm shrink-0">
                {promo.icon}
              </div>
              <div>
                <h3 className="font-[var(--font-heading)] text-sm font-bold text-black uppercase tracking-wider">
                  {promo.title}
                </h3>
                <p className="text-zinc-500 text-xs sm:text-sm leading-relaxed mt-2">
                  {promo.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Notice & CTA */}
        <div className="bg-zinc-950 border border-zinc-850 rounded-sm p-6 sm:p-10 text-center shadow-2xl text-white">
          <div className="flex items-center justify-center gap-2 text-amber-400 mb-4 animate-pulse">
            <FaInfoCircle size={16} />
            <span className="text-xs font-bold uppercase tracking-widest">
              Penting! Promo Sangat Terbatas
            </span>
          </div>
          
          <p className="text-zinc-400 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed mb-8">
            Bonus dan harga promo di atas hanya berlaku untuk unit kavling tertentu di tahap perdana. Segera kunci kuota survey Anda sekarang!
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href={`https://wa.me/${ADMIN_WA}?text=Hallo%20saya%20tertarik%20dengan%20Promo%20Perdana%20dan%20ingin%20daftar%20survey%20The%20Halimun%20Salak`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-[#0057B8] hover:bg-[#0082FB] text-white px-7 py-4 text-xs font-bold uppercase tracking-widest transition-all cursor-pointer rounded-sm"
            >
              <FaWhatsapp size={15} />
              Daftar Survey Sekarang!
            </a>
            <a
              href="#pricelist"
              className="inline-flex items-center justify-center gap-3 border border-white/20 hover:border-white text-white px-7 py-4 text-xs font-bold uppercase tracking-widest transition-all cursor-pointer bg-transparent hover:bg-white hover:text-black rounded-sm"
            >
              Lihat Pricelist Detail
            </a>
          </div>
          
          <p className="text-zinc-600 text-[10px] uppercase tracking-wider mt-6">
            *Syarat & Ketentuan Berlaku. Gambar villa hanya sebagai inspirasi model.
          </p>
        </div>
      </div>
    </section>
  );
}
