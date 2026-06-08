"use client";

const steps = [
  {
    num: "01",
    title: "Survei Lokasi",
    desc: "Jadwalkan dengan Tim Marketing, tinjau langsung lokasi kavling pilihan Anda di kawasan The Halimun Salak.",
  },
  {
    num: "02",
    title: "Booking Fee",
    desc: "Booking fee Rp 5.000.000 per kavling. Booking berlaku 7 hari kerja dan mengurangi harga jual.",
  },
  {
    num: "03",
    title: "Down Payment",
    desc: "Setelah DP bisa langsung TTD Draft AJB & SPJB. DP ke Pelunasan maksimal 7-14 Hari kerja.",
  },
  {
    num: "04",
    title: "Lunas & SHM",
    desc: "Menunggu SHM atas nama konsumen. Estimasi 8-12 bulan setelah pelunasan.",
  },
];

const requirements = [
  "KTP",
  "NPWP",
  "Kartu Keluarga",
  "BPJS Kesehatan",
];

export default function FlowSection() {
  return (
    <section id="alur" className="py-16 md:py-28 bg-[#050505] border-t border-zinc-900 border-b border-zinc-900 relative overflow-hidden">
      {/* Background tech glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#0057B8]/5 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-20">
          <span className="text-[#0082FB] text-xs tracking-[0.25em] uppercase font-bold">
            Alur Pembelian
          </span>
          <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-3 uppercase italic tracking-wide">
            Cara Memiliki Kavling
          </h2>
          <p className="text-zinc-400 mt-4 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            Proses mudah dan transparan. 4 langkah menuju hunian impian Anda.
          </p>
        </div>

        {/* Mobile Swipe Hint */}
        <div className="flex items-center justify-center gap-1.5 text-[10px] text-zinc-500 uppercase tracking-widest sm:hidden mb-6 animate-pulse">
          <span>Geser ke samping</span>
          <span>➔</span>
        </div>

        {/* Steps */}
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 scrollbar-none sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-6 sm:mb-16 sm:pb-0 sm:overflow-x-visible">
          {steps.map((s, i) => (
            <div key={s.num} className="w-[85%] max-w-[280px] shrink-0 snap-center sm:w-auto relative group">
              {/* Connector line (desktop) */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[calc(100%+3px)] w-[calc(100%-40px)] h-[1px] bg-[#0057B8]/20" />
              )}
              <div className="bg-[#121212] border border-zinc-800 rounded-sm p-6 hover:border-[#0082FB]/50 transition-all duration-300 hover:-translate-y-1 h-full flex flex-col justify-start">
                <div
                  className="w-10 h-10 bg-zinc-950 border border-zinc-800 text-white font-extrabold text-xs font-[var(--font-heading)] mb-4 flex items-center justify-center rounded-sm group-hover:scale-105 group-hover:bg-[#0057B8] group-hover:border-[#0082FB] transition-all"
                >
                  {s.num}
                </div>
                <h3 className="text-white font-bold text-xs uppercase tracking-wider mb-2">{s.title}</h3>
                <p className="text-zinc-400 text-xs md:text-sm leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Requirements */}
        <div className="bg-[#121212] border border-zinc-800 rounded-sm p-6 md:p-10 text-center max-w-2xl mx-auto shadow-2xl">
          <h3 className="text-[#0082FB] text-xs uppercase tracking-wider font-extrabold mb-5">
            Persyaratan Dokumen
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {requirements.map((r) => (
              <span
                key={r}
                className="px-5 py-2.5 bg-zinc-950 border border-zinc-800/80 hover:border-[#0082FB]/40 rounded-sm text-zinc-300 text-xs uppercase tracking-widest font-semibold transition-colors cursor-default"
              >
                {r}
              </span>
            ))}
          </div>
          <p className="text-zinc-500 text-[10px] uppercase tracking-wider mt-6 leading-relaxed">
            Jika dalam 7 hari tidak ada konfirmasi pembayaran DP setelah Booking
            Fee, maka dianggap mengundurkan diri (batal).
          </p>
        </div>
      </div>
    </section>
  );
}
