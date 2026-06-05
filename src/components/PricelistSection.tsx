"use client";

import { FiCheck } from "react-icons/fi";

const pricelist = [
  {
    type: "Silver",
    pricePerM: "Rp 1,95 Jt",
    priceOld: "Rp 2,3 Jt",
    cashPromo: "Rp 195.000.000",
    normal: "Rp 230.000.000",
    cicilan3: { total: "Rp 233.000.000", bf: "5.000.000", dp: "92.000.000", monthly: "45.000.000" },
    cicilan6: { total: "Rp 240.000.000", bf: "5.000.000", dp: "94.000.000", monthly: "23.500.000" },
    color: "from-gray-400 to-gray-500",
    border: "border-gray-300",
    badge: "bg-kavling-silver",
  },
  {
    type: "Gold",
    pricePerM: "Rp 2,15 Jt",
    priceOld: "Rp 2,5 Jt",
    cashPromo: "Rp 215.000.000",
    normal: "Rp 250.000.000",
    
    cicilan3: { total: "Rp 250.000.000", bf: "5.000.000", dp: "100.000.000", monthly: "48.300.000" },
    cicilan6: { total: "Rp 260.000.000", bf: "5.000.000", dp: "102.000.000", monthly: "25.500.000" },
    color: "from-yellow-500 to-amber-600",
    border: "border-kavling-gold",
    badge: "bg-kavling-gold",
    popular: true,
  },
  {
    type: "Diamond",
    pricePerM: "Rp 2,35 Jt",
    priceOld: "Rp 2,7 Jt",
    cashPromo: "Rp 235.000.000",
    normal: "Rp 270.000.000",
    cicilan3: { total: "Rp 275.000.000", bf: "5.000.000", dp: "108.000.000", monthly: "54.000.000" },
    cicilan6: { total: "Rp 290.000.000", bf: "5.000.000", dp: "110.000.000", monthly: "27.500.000" },
    color: "from-blue-400 to-blue-600",
    border: "border-kavling-diamond",
    badge: "bg-kavling-diamond",
  },
];

const inclusions = [
  "Biaya BPHTB, AJB, Notaris, Balik Nama SHM",
  "Bonus Rumput & Bibit Pohon Hias",
  "Free Perawatan Lahan Selama 2 Tahun",
  "Jaringan Listrik Underground",
];

export default function PricelistSection() {
  return (
    <section id="pricelist" className="py-12 md:py-24 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 md:mb-16">
          <span className="text-gold-500 text-sm tracking-[0.2em] uppercase font-semibold">
            Pricelist
          </span>
          <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl font-bold text-forest-900 mt-3">
            Harga Kavling
          </h2>
          <p className="text-forest-700/70 mt-4 max-w-xl mx-auto text-sm sm:text-base">
            Harga promo cash spesial. Booking fee hanya Rp 5.000.000 (berlaku 7
            hari).
          </p>
        </div>

        {/* Mobile Swipe Notice */}
        <div className="block md:hidden text-center text-xs text-forest-700/55 mb-4 animate-pulse">
          ← Geser ke kanan/kiri untuk melihat tipe lain →
        </div>

        {/* Price Cards */}
        <div className="flex overflow-x-auto md:grid md:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-16 pb-4 md:pb-0 snap-x snap-mandatory scroll-smooth">
          {pricelist.map((p) => (
            <div
              key={p.type}
              className={`relative bg-white rounded-3xl overflow-hidden border-2 ${p.border} hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 min-w-[285px] sm:min-w-[320px] md:min-w-0 snap-align-start flex-1 ${
                p.popular ? "ring-2 ring-gold-500 ring-offset-4" : ""
              }`}
            >
              {p.popular && (
                <div className="absolute -top-0 left-1/2 -translate-x-1/2 bg-gold-500 text-forest-950 text-xs font-bold px-4 py-1 rounded-b-lg">
                  TERLARIS
                </div>
              )}

              {/* Card Header */}
              <div
                className={`bg-gradient-to-br ${p.color} px-6 py-8 text-center text-white`}
              >
                <span className="text-white/80 text-sm font-semibold tracking-wider uppercase">
                  {p.type}
                </span>
                <div className="mt-3">
                  <span className="text-white/50 text-sm line-through">
                    {p.priceOld}
                  </span>
                </div>
                <p className="text-4xl font-bold font-[var(--font-heading)] mt-1">
                  {p.pricePerM}
                </p>
                <p className="text-white/80 text-sm mt-1">per meter²</p>
              </div>

              {/* Card Body */}
              <div className="px-6 py-6">
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Harga Cash Promo</span>
                    <span className="font-bold text-forest-900">
                      {p.cashPromo}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Harga Normal</span>
                    <span className="text-gray-400 line-through">
                      {p.normal}
                    </span>
                  </div>
                  <hr className="border-gray-100" />
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Cicilan 3 Bulan</span>
                    <span className="font-semibold text-forest-900">
                      {p.cicilan3.monthly}/bln
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Cicilan 6 Bulan</span>
                    <span className="font-semibold text-forest-900">
                      {p.cicilan6.monthly}/bln
                    </span>
                  </div>
                </div>

                <div className="mt-6 bg-forest-950 rounded-xl p-4 text-center">
                  <p className="text-gold-400 text-xs uppercase tracking-wider font-semibold">
                    Booking Fee
                  </p>
                  <p className="text-white text-xl font-bold mt-1">
                    Rp 5.000.000
                  </p>
                  <p className="text-cream-100/50 text-xs mt-1">
                    Berlaku 7 hari kerja
                  </p>
                </div>

                <a
                  href="#siteplan"
                  className="block mt-6 text-center bg-gold-500 hover:bg-gold-400 text-forest-950 py-3 rounded-xl font-bold transition-all"
                >
                  Pilih Kavling {p.type}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Inclusions */}
        <div className="bg-white rounded-2xl p-8 border border-forest-800/5">
          <h3 className="font-[var(--font-heading)] text-xl font-bold text-forest-900 mb-4 text-center">
            Sudah Termasuk Dalam Harga:
          </h3>
          <div className="grid sm:grid-cols-2 gap-3 max-w-2xl mx-auto">
            {inclusions.map((item) => (
              <div key={item} className="flex items-start gap-2">
                <FiCheck
                  className="text-green-500 mt-0.5 shrink-0"
                  size={16}
                />
                <span className="text-forest-700/80 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
