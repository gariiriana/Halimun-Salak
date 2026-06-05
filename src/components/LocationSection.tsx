"use client";

import { FiMapPin, FiNavigation, FiClock } from "react-icons/fi";

export default function LocationSection() {
  return (
    <section id="lokasi" className="py-24 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grid layout */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Info Card */}
          <div className="lg:col-span-5">
            <span className="text-gold-500 text-sm tracking-[0.2em] uppercase font-semibold">
              Location & Access
            </span>
            <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl font-bold text-forest-900 mt-3 mb-6">
              Lokasi Strategis & Akses Mudah
            </h2>
            <p className="text-forest-700/70 mb-8 text-sm sm:text-base leading-relaxed">
              Terletak di kawasan asri Ciburayut, Cigombong, Bogor Selatan. Menawarkan aksesibilitas prima yang menghubungkan ketenangan alam pegunungan dengan kemudahan jangkauan transportasi kota.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-forest-950 text-gold-500 flex items-center justify-center shrink-0 border border-gold-500/20">
                  <FiMapPin size={22} />
                </div>
                <div>
                  <h3 className="font-bold text-forest-900 text-base">Alamat Lengkap</h3>
                  <p className="text-forest-700/70 text-sm mt-1">
                    Jl. Gg. Slawi, Kp. Padurenan RT.004/RW.005, Desa Ciburayut, Kec. Cigombong, Kab. Bogor, Jawa Barat.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-forest-950 text-gold-500 flex items-center justify-center shrink-0 border border-gold-500/20">
                  <FiNavigation size={22} />
                </div>
                <div>
                  <h3 className="font-bold text-forest-900 text-base">Akses Tol & Rute</h3>
                  <p className="text-forest-700/70 text-sm mt-1">
                    Hanya 30 menit dari Gerbang Tol Caringin / Tol Bocimi Seksi I. Rute perjalanan mulus dengan aspal dan pemandangan alam yang hijau.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-forest-950 text-gold-500 flex items-center justify-center shrink-0 border border-gold-500/20">
                  <FiClock size={22} />
                </div>
                <div>
                  <h3 className="font-bold text-forest-900 text-base">Waktu Tempuh Utama</h3>
                  <ul className="text-forest-700/70 text-sm mt-1 list-disc list-inside space-y-1">
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
              className="inline-flex items-center gap-2 bg-forest-800 hover:bg-forest-700 text-white font-bold px-6 py-3.5 rounded-full transition-all hover:shadow-lg shadow-forest-800/20"
            >
              <FiNavigation />
              Buka Google Maps
            </a>
          </div>

          {/* Map Embed Card */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-3 sm:p-4 shadow-xl border border-forest-800/5 gold-border overflow-hidden">
              <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-zinc-100">
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
