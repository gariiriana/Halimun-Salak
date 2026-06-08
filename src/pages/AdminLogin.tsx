import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInAdmin } from "@/lib/auth";
import { useAuth } from "@/hooks/useAuth";
import { FiMail, FiLock, FiAlertCircle } from "react-icons/fi";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();
  const { user, loading } = useAuth();

  useEffect(() => {
    if (!loading && user) {
      navigate("/admin");
    }
  }, [user, loading, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSubmitting(true);

    try {
      await signInAdmin(email, password);
      navigate("/admin");
    } catch (err: any) {
      console.error(err);
      setError("Email atau password admin salah. Silakan coba lagi.");
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0B2314] flex items-center justify-center text-cream-100/60">
        <div className="flex items-center gap-3">
          <svg className="animate-spin h-6 w-6 text-[#C8A84E]" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
          Memuat status autentikasi...
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4 relative overflow-hidden">
      {/* Decorative Blur Orbs (BYD Theme) */}
      <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-[#0057B8]/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#33A2FF]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative w-full max-w-md bg-[#121212] border border-zinc-800 rounded-sm p-8 sm:p-10 shadow-2xl backdrop-blur-md">
        
        {/* Brand/Logo Area */}
        <div className="text-center mb-8">
          <img
            src="/logo-halimun-salak-v4.png"
            alt="The Halimun Salak"
            className="h-24 w-auto object-contain mx-auto mb-4"
          />
          <h1 className="font-[var(--font-heading)] text-xl font-extrabold text-white uppercase italic tracking-wider">
            Admin Portal
          </h1>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mb-6 p-4 bg-red-950/30 border border-red-500/20 text-red-200 rounded-sm flex items-start gap-3 text-xs uppercase tracking-wider font-semibold">
            <FiAlertCircle className="shrink-0 mt-0.5" size={16} />
            <span>{error}</span>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-zinc-400 text-[10px] tracking-wider uppercase font-bold mb-2">
              Email Address
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-zinc-500 pointer-events-none">
                <FiMail size={16} />
              </span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="admin@kavling-halimunsalak.com"
                className="w-full pl-11 pr-4 py-3.5 bg-[#050505] border border-zinc-800 hover:border-zinc-700 focus:border-[#0082FB] focus:ring-1 focus:ring-[#0082FB] text-white rounded-sm text-xs transition-all outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-zinc-400 text-[10px] tracking-wider uppercase font-bold mb-2">
              Password
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-zinc-500 pointer-events-none">
                <FiLock size={16} />
              </span>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Masukkan password admin"
                className="w-full pl-11 pr-4 py-3.5 bg-[#050505] border border-zinc-800 hover:border-zinc-700 focus:border-[#0082FB] focus:ring-1 focus:ring-[#0082FB] text-white rounded-sm text-xs transition-all outline-none"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="w-full bg-[#0057B8] hover:bg-[#0082FB] disabled:bg-zinc-800 disabled:text-zinc-500 text-white font-bold py-4 rounded-sm transition-all shadow-lg hover:shadow-[#0057B8]/20 flex justify-center items-center gap-2 text-xs uppercase tracking-widest mt-2 cursor-pointer"
          >
            {submitting ? (
              <>
                <svg className="animate-spin h-4 w-4 text-white" viewBox="0 0 24 24">
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
          <Link
            to="/"
            className="text-[10px] uppercase tracking-widest font-bold text-zinc-500 hover:text-[#0082FB] transition-colors"
          >
            &larr; Kembali ke Landing Page
          </Link>
        </div>

      </div>
    </div>
  );
}
