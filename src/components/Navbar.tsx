"use client";

import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { ADMIN_WA, INSTAGRAM_URL } from "@/data/initialKavlings";

const navLinks = [
  { label: "Beranda", href: "#beranda" },
  { label: "Tentang", href: "#tentang" },
  { label: "Siteplan", href: "#siteplan" },
  { label: "Pricelist", href: "#pricelist" },
  { label: "Alur Pembelian", href: "#alur" },
  { label: "FAQ", href: "#faq" },
  { label: "Lokasi", href: "#lokasi" },
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
          ? "bg-forest-950/95 backdrop-blur-md shadow-lg py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#beranda" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full bg-forest-800 flex items-center justify-center border-2 border-gold-500 group-hover:scale-110 transition-transform">
            <span className="text-gold-500 font-bold text-sm font-[var(--font-heading)]">HS</span>
          </div>
          <div className="hidden sm:block">
            <p className="text-white font-bold text-lg font-[var(--font-heading)] leading-tight">
              The Halimun Salak
            </p>
            <p className="text-gold-400 text-[10px] tracking-[0.2em] uppercase">
              Developed by Nuansa Alam
            </p>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-3 py-2 text-sm text-cream-100/80 hover:text-gold-400 transition-colors rounded-lg hover:bg-white/5"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-cream-100/60 hover:text-gold-400 transition-colors"
            aria-label="Instagram"
          >
            <FaInstagram size={20} />
          </a>
          <a
            href={`https://wa.me/${ADMIN_WA}?text=Halo%20Admin,%20saya%20tertarik%20dengan%20Kavling%20The%20Halimun%20Salak`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold transition-all hover:shadow-lg hover:shadow-green-500/25"
          >
            <FaWhatsapp size={18} />
            Hubungi Kami
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-white p-2"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-forest-950/98 backdrop-blur-lg border-t border-white/10 animate-fade-in">
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className="px-4 py-3 text-cream-100/80 hover:text-gold-400 hover:bg-white/5 rounded-lg transition-colors"
              >
                {l.label}
              </a>
            ))}
            <div className="flex items-center gap-3 mt-4 px-4">
              <a
                href={`https://wa.me/${ADMIN_WA}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-green-600 text-white px-4 py-3 rounded-xl font-semibold"
              >
                <FaWhatsapp size={18} />
                WhatsApp
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                title="Instagram"
                aria-label="Instagram"
                className="w-12 h-12 flex items-center justify-center bg-white/10 rounded-xl text-cream-100"
              >
                <FaInstagram size={20} />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
