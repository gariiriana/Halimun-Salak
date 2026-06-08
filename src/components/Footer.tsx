"use client";

import { FaInstagram, FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { ADMIN_WA, INSTAGRAM_URL } from "@/data/initialKavlings";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-zinc-400 border-t border-zinc-900 pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-16">
          
          {/* Brand Col */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <img
                src="/logo-halimun-salak-v4.png"
                alt="The Halimun Salak"
                className="h-16 md:h-20 w-auto object-contain"
              />
            </div>
            <p className="text-xs sm:text-sm leading-relaxed mb-6 text-zinc-400">
              The Halimun Salak adalah kawasan kavling villa eksklusif bernuansa eco-luxury European modern living yang dikembangkan oleh PT Alam Barakah Hasanah (Nuansa Alam). Berkomitmen menghadirkan investasi tanah terbaik dengan kenyamanan hunian terpadu.
            </p>
            
            {/* Socials */}
            <div className="flex items-center gap-3">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-sm bg-white/5 border border-zinc-800/80 hover:bg-[#0057B8] hover:border-[#0057B8] hover:text-white flex items-center justify-center text-zinc-300 transition-all"
                aria-label="Instagram"
              >
                <FaInstagram size={16} />
              </a>
              <a
                href={`https://wa.me/${ADMIN_WA}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-sm bg-white/5 border border-zinc-800/80 hover:bg-[#0057B8] hover:border-[#0057B8] hover:text-white flex items-center justify-center text-zinc-300 transition-all"
                aria-label="WhatsApp"
              >
                <FaWhatsapp size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links Col */}
          <div className="md:col-span-3 md:pl-8">
            <h3 className="text-white font-bold text-xs uppercase tracking-widest mb-6">
              Navigasi
            </h3>
            <ul className="space-y-3.5 text-xs">
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
                    className="hover:text-white uppercase tracking-wider text-[10px] font-semibold text-zinc-400 transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-[#0082FB]">&rsaquo;</span> {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Col */}
          <div className="md:col-span-4">
            <h3 className="text-white font-bold text-xs uppercase tracking-widest mb-6">
              Kontak & Kantor Pemasaran
            </h3>
            <ul className="space-y-4 text-xs sm:text-sm">
              <li className="flex gap-3 items-start">
                <FaMapMarkerAlt className="text-[#0082FB] mt-0.5 shrink-0" size={15} />
                <span className="text-zinc-400 text-xs leading-relaxed">
                  Desa Ciburayut, Kec. Cigombong, Kabupaten Bogor, Jawa Barat 16110
                </span>
              </li>
              <li className="flex gap-3 items-center">
                <FaWhatsapp className="text-[#0082FB] shrink-0" size={15} />
                <a
                  href={`https://wa.me/${ADMIN_WA}`}
                  className="hover:text-white text-zinc-400 transition-colors text-xs"
                >
                  +62 895-0807-4080 (Sales Consultant)
                </a>
              </li>
              <li className="flex gap-3 items-center">
                <FaEnvelope className="text-[#0082FB] shrink-0" size={15} />
                <a
                  href="mailto:info@kavling-halimunsalak.com"
                  className="hover:text-white text-zinc-400 transition-colors text-xs"
                >
                  info@kavling-halimunsalak.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-zinc-900 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] uppercase tracking-wider font-semibold text-zinc-600">
          <p>
            &copy; {currentYear} PT Alam Barakah Hasanah. All rights reserved.
          </p>
          <p>
            Designed & Developed under Nuansa Alam Proyek Ke-11
          </p>
        </div>

      </div>
    </footer>
  );
}
