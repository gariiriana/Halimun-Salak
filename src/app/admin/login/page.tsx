"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { signInAdmin } from "@/lib/auth";
import { useAuth } from "@/hooks/useAuth";
import { FiMail, FiLock, FiAlertCircle } from "react-icons/fi";

export default function AdminLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const router = useRouter();
  const { user, loading } = useAuth();

  useEffect(() => {
    if (!loading && user) {
      router.push("/admin");
    }
  }, [user, loading, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSubmitting(true);

    try {
      await signInAdmin(email, password);
      router.push("/admin");
    } catch (err: any) {
      console.error(err);
      setError("Email atau password admin salah. Silakan coba lagi.");
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-forest-950 flex items-center justify-center text-cream-100/60">
        <div className="flex items-center gap-3">
          <svg className="animate-spin h-6 w-6 text-gold-500" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
          Memuat status autentikasi...
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-forest-950 via-forest-900 to-forest-800 flex items-center justify-center p-4">
      {/* Decorative Blur Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-gold-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-forest-600/10 rounded-full blur-3xl" />

      <div className="relative w-full max-w-md bg-white/5 border border-white/10 rounded-3xl p-8 sm:p-10 shadow-2xl backdrop-blur-md">
        
        {/* Brand/Logo Area */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 rounded-full bg-forest-800 border-2 border-gold-500 flex items-center justify-center mx-auto mb-4">
            <span className="text-gold-500 font-bold text-xl">HS</span>
          </div>
          <h1 className="font-[var(--font-heading)] text-2xl font-bold text-white">
            Admin Portal
          </h1>
          <p className="text-cream-100/60 text-xs tracking-wider uppercase mt-1">
            The Halimun Salak
          </p>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mb-6 p-4 bg-red-950/40 border border-red-500/30 text-red-200 rounded-xl flex items-start gap-3 text-sm">
            <FiAlertCircle className="shrink-0 mt-0.5" size={18} />
            <span>{error}</span>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-cream-100/80 text-xs font-semibold uppercase tracking-wider mb-2">
              Email Address
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-cream-100/40 pointer-events-none">
                <FiMail size={18} />
              </span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="admin@halimunsalak.id"
                className="w-full pl-11 pr-4 py-3 bg-white/5 border border-white/10 hover:border-white/20 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 text-white rounded-xl text-sm transition-all outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-cream-100/80 text-xs font-semibold uppercase tracking-wider mb-2">
              Password
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-cream-100/40 pointer-events-none">
                <FiLock size={18} />
              </span>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Masukkan password admin"
                className="w-full pl-11 pr-4 py-3 bg-white/5 border border-white/10 hover:border-white/20 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 text-white rounded-xl text-sm transition-all outline-none"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="w-full bg-gold-500 hover:bg-gold-400 disabled:bg-gold-500/50 text-forest-950 font-bold py-3.5 rounded-xl transition-all shadow-lg hover:shadow-gold-500/10 flex justify-center items-center gap-2 text-sm sm:text-base mt-2"
          >
            {submitting ? (
              <>
                <svg className="animate-spin h-5 w-5 text-forest-950" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                Masuk...
              </>
            ) : (
              "Login Ke Dashboard"
            )}
          </button>
        </form>

        {/* Back Link */}
        <div className="text-center mt-6">
          <a
            href="/"
            className="text-xs text-cream-100/40 hover:text-gold-400 transition-colors"
          >
            &larr; Kembali ke Landing Page
          </a>
        </div>

      </div>
    </div>
  );
}
