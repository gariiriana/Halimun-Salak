"use client";

import { FaInstagram, FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { ADMIN_WA, INSTAGRAM_URL } from "@/data/initialKavlings";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-forest-950 text-cream-100/70 border-t border-gold-500/20 pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-16">
          
          {/* Brand Col */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-forest-800 flex items-center justify-center border-2 border-gold-500">
                <span className="text-gold-500 font-bold text-sm">HS</span>
              </div>
              <div>
                <p className="text-white font-bold text-lg font-[var(--font-heading)] leading-tight">
                  The Halimun Salak
                </p>
                <p className="text-gold-400 text-[10px] tracking-[0.2em] uppercase">
                  Developed by Nuansa Alam
                </p>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              The Halimun Salak adalah kawasan kavling villa eksklusif bernuansa eco-luxury European modern living yang dikembangkan oleh PT Alam Barakah Hasanah (Nuansa Alam). Berkomitmen menghadirkan investasi tanah terbaik dengan kenyamanan hunian terpadu.
            </p>
            
            {/* Socials */}
            <div className="flex items-center gap-3">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-gold-500 hover:text-forest-950 flex items-center justify-center text-white transition-all"
                aria-label="Instagram"
              >
                <FaInstagram size={18} />
              </a>
              <a
                href={`https://wa.me/${ADMIN_WA}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-green-600 hover:text-white flex items-center justify-center text-white transition-all"
                aria-label="WhatsApp"
              >
                <FaWhatsapp size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links Col */}
          <div className="md:col-span-3 md:pl-8">
            <h3 className="text-white font-bold text-base font-[var(--font-heading)] mb-6">
              Navigasi
            </h3>
            <ul className="space-y-3.5 text-sm">
              {[
                { label: "Beranda", href: "#beranda" },
                { label: "Tentang Kami", href: "#tentang" },
                { label: "Siteplan Interaktif", href: "#siteplan" },
                { label: "Daftar Harga & Promo", href: "#pricelist" },
                { label: "Alur Pembelian", href: "#alur" },
                { label: "FAQ / Tanya Jawab", href: "#faq" },
                { label: "Lokasi Map", href: "#lokasi" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-gold-400 transition-colors flex items-center gap-1"
                  >
                    <span className="text-gold-500/50">&rsaquo;</span> {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Col */}
          <div className="md:col-span-4">
            <h3 className="text-white font-bold text-base font-[var(--font-heading)] mb-6">
              Kontak & Kantor Pemasaran
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3 items-start">
                <FaMapMarkerAlt className="text-gold-500 mt-1 shrink-0" size={16} />
                <span>
                  Desa Ciburayut, Kec. Cigombong, Kabupaten Bogor, Jawa Barat 16110
                </span>
              </li>
              <li className="flex gap-3 items-center">
                <FaWhatsapp className="text-gold-500 shrink-0" size={16} />
                <a
                  href={`https://wa.me/${ADMIN_WA}`}
                  className="hover:text-gold-400 transition-colors"
                >
                  +62 895-0807-4080 (Sales Consultant)
                </a>
              </li>
              <li className="flex gap-3 items-center">
                <FaEnvelope className="text-gold-500 shrink-0" size={16} />
                <a
                  href="mailto:info@halimunsalak.id"
                  className="hover:text-gold-400 transition-colors"
                >
                  info@halimunsalak.id
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>
            &copy; {currentYear} PT Alam Barakah Hasanah. All rights reserved.
          </p>
          <p className="text-cream-100/40">
            Designed & Developed under Nuansa Alam Proyek Ke-11
          </p>
        </div>

      </div>
    </footer>
  );
}
