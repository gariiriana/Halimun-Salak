"use client";

import { FiMapPin, FiNavigation, FiClock } from "react-icons/fi";

export default function LocationSection() {
  return (
    <section id="lokasi" className="py-16 md:py-28 bg-[#f8f9fa] border-b border-zinc-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grid layout */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Info Card */}
          <div className="lg:col-span-5">
            <span className="text-[#0057B8] text-xs tracking-[0.25em] uppercase font-bold">
              Location & Access
            </span>
            <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl font-extrabold text-black mt-3 mb-6 uppercase italic tracking-wide">
              Lokasi Strategis & Akses Mudah
            </h2>
            <p className="text-zinc-500 mb-8 text-sm sm:text-base leading-relaxed font-medium">
              Terletak di kawasan asri Ciburayut, Cigombong, Bogor Selatan. Menawarkan aksesibilitas prima yang menghubungkan ketenangan alam pegunungan dengan kemudahan jangkauan transportasi kota.
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-sm bg-zinc-950 text-[#0082FB] flex items-center justify-center shrink-0 border border-zinc-800 hover:border-[#0082FB] transition-all">
                  <FiMapPin size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-black text-xs uppercase tracking-wider mt-1">Alamat Lengkap</h3>
                  <p className="text-zinc-500 text-xs sm:text-sm mt-1 leading-relaxed">
                    Jl. Gg. Slawi, Kp. Padurenan RT.004/RW.005, Desa Ciburayut, Kec. Cigombong, Kab. Bogor, Jawa Barat.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-sm bg-zinc-950 text-[#0082FB] flex items-center justify-center shrink-0 border border-zinc-800 hover:border-[#0082FB] transition-all">
                  <FiNavigation size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-black text-xs uppercase tracking-wider mt-1">Akses Tol & Rute</h3>
                  <p className="text-zinc-500 text-xs sm:text-sm mt-1 leading-relaxed">
                    Hanya 30 menit dari Gerbang Tol Caringin / Tol Bocimi Seksi I. Rute perjalanan mulus dengan aspal dan pemandangan alam yang hijau.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-sm bg-zinc-950 text-[#0082FB] flex items-center justify-center shrink-0 border border-zinc-800 hover:border-[#0082FB] transition-all">
                  <FiClock size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-black text-xs uppercase tracking-wider mt-1">Waktu Tempuh Utama</h3>
                  <ul className="text-zinc-500 text-xs sm:text-sm mt-1 list-disc list-inside space-y-1.5 leading-relaxed font-medium">
                    <li>12 Menit dari Stasiun Kereta Cigombong</li>
                    <li>2 Menit ke Salacca Cafe</li>
                    <li>25 Menit ke MNC Lido City (Theme Park Terbesar)</li>
                  </ul>
                </div>
              </div>
            </div>

            <a
              href="https://maps.google.com/?q=Ciburayut,+Cigombong,+Bogor"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#0057B8] hover:bg-[#0082FB] text-white px-6 py-3.5 rounded-sm text-xs font-bold uppercase tracking-widest transition-all hover:shadow-lg hover:shadow-[#0057B8]/20"
            >
              <FiNavigation />
              Buka Google Maps
            </a>
          </div>

          {/* Map Embed Card */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-sm p-2 shadow-2xl border border-zinc-200/60 overflow-hidden">
              <div className="relative aspect-[16/10] w-full rounded-sm overflow-hidden bg-zinc-100">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15848.884501244835!2d106.80497575775796!3d-6.742880010839886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c9ea8848dbff%3A0xe54d9f7f45a755d4!2sCiburayut%2C%20Cigombong%2C%20Bogor%20Regency%2C%20West%20Java!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid"
                  width="100%"
                  height="100%"
                  className="border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lokasi The Halimun Salak"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
