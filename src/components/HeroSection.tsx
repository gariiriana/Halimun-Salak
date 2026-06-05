"use client";

import { FiMapPin, FiSun, FiArrowDown } from "react-icons/fi";
import { FaMountain } from "react-icons/fa";

export default function HeroSection() {
  return (
    <section
      id="beranda"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-forest-950 via-forest-900 to-forest-800" />

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-gold-500/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-60 -left-60 w-[800px] h-[800px] bg-forest-600/10 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-gold-400/40 rounded-full animate-pulse" />
        <div className="absolute top-1/2 left-1/3 w-1.5 h-1.5 bg-gold-300/30 rounded-full animate-pulse delay-700" />
        <div className="absolute bottom-1/3 right-1/3 w-1 h-1 bg-cream-100/20 rounded-full animate-pulse delay-1000" />
      </div>

      {/* Gold Line Accent */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold-500/50 to-transparent" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center py-32">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/5 border border-gold-500/20 rounded-full px-5 py-2 mb-8 animate-fade-in">
          <FiSun className="text-gold-400" size={14} />
          <span className="text-gold-300 text-xs tracking-[0.15em] uppercase font-medium">
            Project Ke-11 oleh Nuansa Alam
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="font-[var(--font-heading)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6 animate-fade-in">
          Kavling Villa Eksklusif
          <br />
          <span className="text-gradient-gold">ala Eropa Modern</span>
        </h1>

        {/* Subheading */}
        <p className="text-cream-100/70 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in">
          Hunian villa premium di kaki Gunung Salak, ketinggian{" "}
          <strong className="text-gold-400">560 MDPL</strong> dengan panorama
          langsung Gunung Salak & Gunung Pangrango. Konsep{" "}
          <em>eco-luxury European modern living</em>.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in">
          <a
            href="#siteplan"
            className="group flex items-center gap-2 bg-gold-500 hover:bg-gold-400 text-forest-950 px-8 py-4 rounded-full font-bold text-lg transition-all hover:shadow-xl hover:shadow-gold-500/20 hover:-translate-y-0.5"
          >
            Lihat Kavling Tersedia
            <FiArrowDown className="group-hover:translate-y-1 transition-transform" />
          </a>
          <a
            href="#tentang"
            className="flex items-center gap-2 border border-cream-100/20 hover:border-gold-500/40 text-cream-100 px-8 py-4 rounded-full font-semibold transition-all hover:bg-white/5"
          >
            Pelajari Lebih Lanjut
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto animate-fade-in">
          {[
            { icon: <FaMountain />, value: "560", unit: "MDPL", label: "Ketinggian" },
            { icon: <FiMapPin />, value: "93", unit: "Unit", label: "Total Kavling" },
            { icon: <FiSun />, value: "1.1", unit: "Ha", label: "Luas Area" },
            { icon: <FiMapPin />, value: "SHM", unit: "", label: "Legalitas" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-white/5 border border-white/10 rounded-2xl p-4 hover:border-gold-500/30 transition-colors"
            >
              <div className="text-gold-400 mb-2 flex justify-center">{stat.icon}</div>
              <p className="text-white font-bold text-2xl font-[var(--font-heading)]">
                {stat.value}
                <span className="text-sm text-gold-400 ml-1">{stat.unit}</span>
              </p>
              <p className="text-cream-100/50 text-xs mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-cream-100/30 rounded-full flex items-start justify-center p-1.5">
          <div className="w-1.5 h-3 bg-gold-400 rounded-full" />
        </div>
      </div>
    </section>
  );
}
