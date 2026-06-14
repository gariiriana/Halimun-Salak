
import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { ADMIN_WA, INSTAGRAM_URL } from "@/data/initialKavlings";

const navLinks = [
  { label: "Legalitas", href: "#legalitas" },
  { label: "Konsep", href: "#konsep" },
  { label: "Fasilitas", href: "#fasilitas" },
  { label: "Desain", href: "#desain" },
  { label: "Portofolio", href: "#portfolio" },
  { label: "Siteplan", href: "#siteplan" },
  { label: "Pricelist", href: "#pricelist" },
  { label: "FAQ", href: "#faq" },
  { label: "Promo", href: "#promo" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#050505]/95 backdrop-blur-md border-b border-zinc-900 shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#beranda" className="flex items-center gap-3 group">
          <img
            src="/logo-halimun-salak-v4.png"
            alt="The Halimun Salak"
            className="h-12 md:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-4 py-2 text-xs uppercase tracking-widest text-zinc-300 hover:text-white transition-all hover:bg-white/5 rounded-sm font-medium"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-white transition-colors"
            aria-label="Instagram"
          >
            <FaInstagram size={18} />
          </a>
          <a
            href={`https://wa.me/${ADMIN_WA}?text=Hallo%20saya%20ingin%20konsultasi%20dan%20info%20detail%20The%20Halimun%20Salak`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border border-white/30 hover:border-white text-white px-5 py-2 rounded-none text-[11px] font-bold uppercase tracking-widest transition-all bg-transparent hover:bg-white hover:text-black cursor-pointer"
          >
            <FaWhatsapp size={13} />
            Konsultasi Online
          </a>
        </div>

        {/* Mobile Actions Container */}
        <div className="flex lg:hidden items-center gap-3">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-300 hover:text-white transition-colors p-1"
            aria-label="Instagram"
          >
            <FaInstagram size={18} />
          </a>
          <a
            href={`https://wa.me/${ADMIN_WA}?text=Hallo%20saya%20ingin%20konsultasi%20dan%20info%20detail%20The%20Halimun%20Salak`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 border border-white/20 hover:border-white text-white px-2.5 py-1.5 rounded-none text-[9px] font-bold uppercase tracking-wider transition-all bg-transparent hover:bg-white hover:text-black cursor-pointer"
            aria-label="Konsultasi WA"
          >
            <FaWhatsapp size={12} className="text-[#25D366]" />
            <span>KONSULTASI</span>
          </a>
          
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-white p-1.5"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#050505]/98 backdrop-blur-lg border-t border-zinc-900 animate-fade-in">
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className="px-4 py-3 text-zinc-300 hover:text-white text-xs uppercase tracking-wider hover:bg-white/5 rounded-sm transition-colors"
              >
                {l.label}
              </a>
            ))}
            <div className="flex items-center gap-3 mt-4 px-4">
              <a
                href={`https://wa.me/${ADMIN_WA}?text=Hallo%20saya%20ingin%20konsultasi%20dan%20info%20detail%20The%20Halimun%20Salak`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 border border-white/30 hover:border-white text-white px-4 py-3 rounded-none text-[11px] font-bold uppercase tracking-widest transition-all bg-transparent hover:bg-white hover:text-black cursor-pointer"
              >
                <FaWhatsapp size={15} />
                Konsultasi Online
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                title="Instagram"
                aria-label="Instagram"
                className="w-12 h-12 flex items-center justify-center bg-white/5 rounded-none text-zinc-300 border border-zinc-800 hover:border-white transition-all hover:bg-white hover:text-black"
              >
                <FaInstagram size={18} />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
