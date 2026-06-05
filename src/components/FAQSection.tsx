"use client";

import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

const faqs = [
  {
    q: "Apa itu The Halimun Salak?",
    a: "The Halimun Salak adalah proyek ke-11 dari Nuansa Alam (PT Alam Barakah Hasanah), yaitu kawasan kavling villa eksklusif bertema pedesaan modern Eropa. Berlokasi di ketinggian 560 MDPL di kaki Gunung Salak dengan panorama pegunungan yang asri, udara bersih, dan kabut alami.",
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
    <section id="faq" className="py-24 bg-cream-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-gold-500 text-sm tracking-[0.2em] uppercase font-semibold">
            Frequently Asked Questions
          </span>
          <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl font-bold text-forest-900 mt-3">
            Pertanyaan yang Sering Diajukan
          </h2>
          <p className="text-forest-700/70 mt-4 max-w-lg mx-auto text-sm sm:text-base">
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
                className="bg-white rounded-2xl border border-forest-800/5 hover:border-gold-500/20 transition-all duration-300 overflow-hidden"
              >
                <button
                  onClick={() => toggle(i)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 font-semibold text-forest-900 text-base sm:text-lg hover:text-gold-600 transition-colors"
                >
                  <span>{faq.q}</span>
                  <span className="text-gold-500 shrink-0">
                    {isOpen ? <FiMinus size={20} /> : <FiPlus size={20} />}
                  </span>
                </button>

                <div
                  className={`transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-96 border-t border-forest-800/5" : "max-h-0"
                  } overflow-hidden`}
                >
                  <p className="px-6 py-5 text-forest-700/80 text-sm sm:text-base leading-relaxed bg-cream-50/30">
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
