"use client";

import { useState } from "react";
import { FiX, FiCheck, FiAlertCircle } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import type { Kavling } from "@/types";
import { addLead } from "@/lib/firestore";
import { ADMIN_WA } from "@/data/initialKavlings";

const statusColor: Record<string, string> = {
  available: "bg-status-available",
  booked: "bg-status-booked",
  sold: "bg-status-sold",
};

const statusText: Record<string, string> = {
  available: "Tersedia",
  booked: "Booking",
  sold: "Terjual",
};

const typeLabel: Record<string, string> = {
  diamond: "Diamond",
  gold: "Gold",
  silver: "Silver",
};

const typeColor: Record<string, string> = {
  diamond: "bg-kavling-diamond",
  gold: "bg-kavling-gold",
  silver: "bg-kavling-silver",
};

interface Props {
  kavling: Kavling;
  onClose: () => void;
}

export default function DetailModal({ kavling, onClose }: Props) {
  const [step, setStep] = useState<"detail" | "form">("detail");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const formatPrice = (n: number) =>
    new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    }).format(n);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!name.trim() || !phone.trim()) {
      setError("Mohon isi semua field");
      return;
    }

    // Validate phone
    const cleanPhone = phone.replace(/\D/g, "");
    if (cleanPhone.length < 10) {
      setError("Nomor WhatsApp tidak valid");
      return;
    }

    setSubmitting(true);
    try {
      await addLead({ name: name.trim(), phone: cleanPhone, kavlingId: kavling.number });

      // Redirect to WhatsApp
      const waText = encodeURIComponent(
        `Halo Admin Sales, saya ${name.trim()}, saya tertarik dengan Kavling Blok ${kavling.number} (${typeLabel[kavling.type]}, ${kavling.size}m²). Apakah bisa dibantu prosesnya?`
      );
      window.open(`https://wa.me/${ADMIN_WA}?text=${waText}`, "_blank");
      onClose();
    } catch {
      setError("Terjadi kesalahan. Silakan coba lagi.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl max-w-md w-full shadow-2xl overflow-hidden animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-forest-950 px-6 py-5 flex items-center justify-between">
          <div>
            <p className="text-gold-400 text-xs tracking-[0.15em] uppercase font-semibold">
              Detail Kavling
            </p>
            <h3 className="text-white text-2xl font-bold font-[var(--font-heading)]">
              {kavling.number}
            </h3>
          </div>
          <button
            onClick={onClose}
            title="Tutup"
            aria-label="Tutup"
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
          >
            <FiX size={20} />
          </button>
        </div>

        {step === "detail" ? (
          <div className="p-6">
            {/* Status & Type Badges */}
            <div className="flex items-center gap-3 mb-6">
              <span
                className={`${statusColor[kavling.status]} text-white px-3 py-1 rounded-full text-xs font-semibold`}
              >
                {statusText[kavling.status]}
              </span>
              <span
                className={`${typeColor[kavling.type]} text-white px-3 py-1 rounded-full text-xs font-semibold`}
              >
                {typeLabel[kavling.type]}
              </span>
            </div>

            {/* Details */}
            <div className="space-y-4">
              <div className="flex justify-between py-3 border-b border-gray-100">
                <span className="text-gray-500 text-sm">Blok</span>
                <span className="font-semibold text-forest-900">
                  Blok {kavling.block}
                </span>
              </div>
              <div className="flex justify-between py-3 border-b border-gray-100">
                <span className="text-gray-500 text-sm">Luas Tanah</span>
                <span className="font-semibold text-forest-900">
                  {kavling.size} m²
                </span>
              </div>
              <div className="flex justify-between py-3 border-b border-gray-100">
                <span className="text-gray-500 text-sm">Dimensi</span>
                <span className="font-semibold text-forest-900">
                  {kavling.dimensions}
                </span>
              </div>
              <div className="flex justify-between py-3 border-b border-gray-100">
                <span className="text-gray-500 text-sm">Harga Promo Cash</span>
                <span className="font-bold text-gold-600 text-lg">
                  {formatPrice(kavling.price)}
                </span>
              </div>
              <div className="flex justify-between py-3">
                <span className="text-gray-500 text-sm">Harga Normal</span>
                <span className="text-gray-400 line-through text-sm">
                  {formatPrice(kavling.priceNormal)}
                </span>
              </div>
            </div>

            {/* Inclusions */}
            <div className="mt-6 bg-cream-50 rounded-xl p-4">
              <p className="text-forest-900 font-semibold text-sm mb-2">
                Sudah Termasuk:
              </p>
              <ul className="space-y-1.5 text-sm text-forest-700/70">
                {[
                  "Biaya BPHTB, AJB, Notaris, Balik Nama SHM",
                  "Bonus Rumput & Bibit Pohon Hias",
                  "Free Perawatan Lahan 2 Tahun",
                  "Jaringan Listrik Underground",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <FiCheck className="text-green-500 mt-0.5 shrink-0" size={14} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            {kavling.status === "available" ? (
              <button
                onClick={() => setStep("form")}
                className="w-full mt-6 flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 text-white py-4 rounded-2xl font-bold text-lg transition-all hover:shadow-lg"
              >
                <FaWhatsapp size={22} />
                Hubungi via WhatsApp
              </button>
            ) : (
              <div className="mt-6 text-center py-4 bg-gray-50 rounded-2xl">
                <FiAlertCircle
                  className="mx-auto text-gray-400 mb-2"
                  size={24}
                />
                <p className="text-gray-500 text-sm">
                  Kavling ini sudah{" "}
                  {kavling.status === "booked" ? "di-booking" : "terjual"}.
                </p>
              </div>
            )}
          </div>
        ) : (
          /* Lead Capture Form */
          <form onSubmit={handleSubmit} className="p-6">
            <p className="text-forest-900 font-semibold mb-1">
              Isi Data Anda
            </p>
            <p className="text-gray-500 text-sm mb-6">
              Untuk kavling <strong>{kavling.number}</strong> ({typeLabel[kavling.type]})
            </p>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-forest-900 mb-1.5">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold-500/50 focus:border-gold-500 transition-all text-gray-800"
                  placeholder="Masukkan nama lengkap"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-forest-900 mb-1.5">
                  Nomor WhatsApp
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold-500/50 focus:border-gold-500 transition-all text-gray-800"
                  placeholder="08xx xxxx xxxx"
                />
              </div>
            </div>

            {error && (
              <p className="text-red-500 text-sm mt-3 flex items-center gap-1">
                <FiAlertCircle size={14} />
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={submitting}
              className="w-full mt-6 flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 disabled:bg-gray-300 text-white py-4 rounded-2xl font-bold text-lg transition-all"
            >
              {submitting ? (
                <svg
                  className="animate-spin h-5 w-5"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                  />
                </svg>
              ) : (
                <>
                  <FaWhatsapp size={22} />
                  Kirim & Buka WhatsApp
                </>
              )}
            </button>

            <button
              type="button"
              onClick={() => setStep("detail")}
              className="w-full mt-3 text-gray-500 hover:text-forest-900 py-2 text-sm transition-colors"
            >
              ← Kembali ke Detail
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
