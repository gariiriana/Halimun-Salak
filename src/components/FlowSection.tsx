"use client";

const steps = [
  {
    num: "1",
    title: "Survei Lokasi",
    desc: "Jadwalkan dengan Tim Marketing, tinjau langsung lokasi kavling pilihan Anda di kawasan The Halimun Salak.",
    color: "bg-forest-800",
  },
  {
    num: "2",
    title: "Booking Fee",
    desc: "Booking fee Rp 5.000.000 per kavling. Booking berlaku 7 hari kerja dan mengurangi harga jual.",
    color: "bg-gold-500",
  },
  {
    num: "3",
    title: "Down Payment",
    desc: "Setelah DP bisa langsung TTD Draft AJB & SPJB. DP ke Pelunasan maksimal 7-14 Hari kerja.",
    color: "bg-kavling-diamond",
  },
  {
    num: "4",
    title: "Lunas & SHM",
    desc: "Menunggu SHM atas nama konsumen. Estimasi 8-12 bulan setelah pelunasan.",
    color: "bg-barn",
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
    <section id="alur" className="py-24 section-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-gold-500 text-sm tracking-[0.2em] uppercase font-semibold">
            Alur Pembelian
          </span>
          <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-3">
            Cara Memiliki Kavling
          </h2>
          <p className="text-cream-100/60 mt-4 max-w-xl mx-auto">
            Proses mudah dan transparan. 4 langkah menuju hunian impian Anda.
          </p>
        </div>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {steps.map((s, i) => (
            <div key={s.num} className="relative group">
              {/* Connector line (desktop) */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[calc(100%+2px)] w-[calc(100%-40px)] h-[2px] bg-gold-500/20" />
              )}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-gold-500/30 transition-all duration-300 hover:-translate-y-1 h-full">
                <div
                  className={`w-12 h-12 ${s.color} rounded-xl flex items-center justify-center text-white font-bold text-xl font-[var(--font-heading)] mb-4 group-hover:scale-110 transition-transform`}
                >
                  {s.num}
                </div>
                <h3 className="text-white font-bold text-lg mb-2">{s.title}</h3>
                <p className="text-cream-100/60 text-sm leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Requirements */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center max-w-2xl mx-auto">
          <h3 className="text-gold-400 font-bold text-lg mb-4">
            Persyaratan Dokumen
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {requirements.map((r) => (
              <span
                key={r}
                className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-cream-100/80 text-sm"
              >
                {r}
              </span>
            ))}
          </div>
          <p className="text-cream-100/40 text-xs mt-4">
            Jika dalam 7 hari tidak ada konfirmasi pembayaran DP setelah Booking
            Fee, maka dianggap mengundurkan diri (batal).
          </p>
        </div>
      </div>
    </section>
  );
}
