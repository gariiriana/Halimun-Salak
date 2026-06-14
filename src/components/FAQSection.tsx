"use client";

import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

const faqs = [
  {
    q: "Apa itu The Halimun Salak?",
    a: "The Halimun Salak adalah proyek ke-11 dari Nuansa Alam, yaitu kawasan kavling villa eksklusif bertema pedesaan modern Eropa. Berlokasi di ketinggian 560 MDPL di kaki Gunung Salak dengan panorama pegunungan yang asri, udara bersih, dan kabut alami.",
  },
  {
    q: "Bagaimana dengan legalitas lahannya?",
    a: "Legalitas lahan sangat aman karena berstatus Clean & Clear dengan Sertifikat Hak Milik (SHM). Harga pembelian sudah mencakup biaya-biaya penting seperti AJB, BPHTB, biaya notaris, hingga proses balik nama sertifikat ke atas nama pembeli.",
  },
  {
    q: "Apakah diperbolehkan membangun bangunan permanen?",
    a: "Ya, lokasi proyek berada di Zona Kuning (zona pemukiman/kuning PP3), sehingga Anda bebas membangun bangunan permanen seperti villa, resort, maupun hunian pribadi.",
  },
  {
    q: "Apakah ada ketentuan khusus untuk model villa?",
    a: "Demi menjaga keindahan estetika dan nilai kawasan, model villa yang dibangun diimbau berkonsep Eropa Modern atau Klasik (gaya country, barn, atau villa modern) yang dikoordinasikan dengan Project Leader developer.",
  },
  {
    q: "Apa saja fasilitas yang disediakan di dalam kawasan?",
    a: "Kawasan dilengkapi dengan Row Jalan utama berlebar 6 meter dengan pengerasan/aspal, sistem saluran air tertutup, jaringan listrik bawah tanah (underground), musholla, toilet umum, gerbang masuk satu pintu (One Gate System), serta spot ikonik Little Redbarn Resto & Cafe, Windmill (kincir angin), kolam ikan, dan taman bunga.",
  },
  {
    q: "Bagaimana cara melakukan pemesanan (booking)?",
    a: "Anda dapat memilih kavling yang tersedia melalui Peta Siteplan Interaktif di website ini, mengisi form minat, dan melakukan pembayaran Booking Fee sebesar Rp 5.000.000,-. Booking Fee ini berlaku selama 7 hari dan langsung memotong harga jual kavling pilihan Anda.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section id="faq" className="py-16 md:py-28 bg-white border-b border-zinc-100 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-20">
          <span className="text-[#0057B8] text-xs tracking-[0.25em] uppercase font-bold">
            Frequently Asked Questions
          </span>
          <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl font-extrabold text-black mt-3 uppercase italic tracking-wide">
            Pertanyaan yang Sering Diajukan
          </h2>
          <p className="text-zinc-500 mt-4 max-w-lg mx-auto text-xs sm:text-sm leading-relaxed">
            Temukan semua informasi detail tentang aspek legalitas, lokasi, dan mekanisme pembelian kavling The Halimun Salak.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="bg-white border border-zinc-200/60 hover:border-[#0082FB]/40 rounded-sm transition-all duration-300 overflow-hidden"
              >
                <button
                  onClick={() => toggle(i)}
                  className="w-full text-left px-5 py-4 sm:px-6 sm:py-5 flex items-center justify-between gap-4 font-bold text-black text-xs sm:text-sm tracking-wider uppercase hover:text-[#0057B8] transition-colors"
                >
                  <span>{faq.q}</span>
                  <span className="text-[#0057B8] shrink-0">
                    {isOpen ? <FiMinus size={16} /> : <FiPlus size={16} />}
                  </span>
                </button>

                <div
                  className={`transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-96 border-t border-zinc-100" : "max-h-0"
                  } overflow-hidden`}
                >
                  <p className="px-5 py-4 sm:px-6 sm:py-5 text-zinc-500 text-xs sm:text-sm leading-relaxed bg-[#f8f9fa]/50">
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
