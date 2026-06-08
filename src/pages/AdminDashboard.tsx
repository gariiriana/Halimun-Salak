import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { useKavlings } from "@/hooks/useKavlings";
import { useLeads } from "@/hooks/useLeads";
import { signOutAdmin } from "@/lib/auth";
import { updateKavlingStatus } from "@/lib/firestore";
import type { Kavling, Lead, KavlingStatus } from "@/types";
import { FiLogOut, FiUsers, FiMap, FiSearch, FiRefreshCw, FiPhone } from "react-icons/fi";

export default function AdminDashboard() {
  const { user, loading: authLoading } = useAuth();
  const { kavlings, loading: kavlingsLoading } = useKavlings();
  const { leads, loading: leadsLoading } = useLeads();
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState<"kavlings" | "leads">("kavlings");
  
  // Kavling Filters
  const [blockFilter, setBlockFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [updatingId, setUpdatingId] = useState<string | null>(null);

  useEffect(() => {
    if (!authLoading && !user) {
      navigate("/admin/login");
    }
  }, [user, authLoading, navigate]);

  const handleLogout = async () => {
    try {
      await signOutAdmin();
      navigate("/admin/login");
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  const handleStatusChange = async (kavlingId: string, newStatus: KavlingStatus) => {
    setUpdatingId(kavlingId);
    try {
      await updateKavlingStatus(kavlingId, newStatus);
    } catch (err) {
      console.error("Failed to update status:", err);
    } finally {
      setUpdatingId(null);
    }
  };

  // Filtered Kavlings
  const filteredKavlings = kavlings.filter((k: Kavling) => {
    const matchBlock = blockFilter === "all" || k.block === blockFilter;
    const matchStatus = statusFilter === "all" || k.status === statusFilter;
    const matchSearch = k.number.toLowerCase().includes(searchQuery.toLowerCase());
    return matchBlock && matchStatus && matchSearch;
  });

  if (authLoading || !user) {
    return (
      <div className="min-h-screen bg-[#050505] flex items-center justify-center text-zinc-400">
        <div className="flex items-center gap-3 text-xs uppercase tracking-widest font-bold">
          <svg className="animate-spin h-5 w-5 text-[#0082FB]" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
          Memvalidasi otorisasi...
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans">
      
      {/* Top Navbar */}
      <header className="bg-black text-white py-4 px-6 border-b border-zinc-900 shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="/logo-halimun-salak-v4.png"
              alt="The Halimun Salak"
              className="h-10 w-auto object-contain"
            />
            <div>
              <h1 className="font-[var(--font-heading)] font-extrabold text-base tracking-wider uppercase italic">
                The Halimun Salak
              </h1>
              <p className="text-[#0082FB] text-[9px] tracking-[0.25em] uppercase font-bold">
                Admin Panel Control
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <span className="hidden sm:inline text-xs text-zinc-500 font-mono">
              Logged in: {user.email}
            </span>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 bg-white/5 hover:bg-red-950/20 hover:text-red-300 hover:border-red-900/50 border border-zinc-800 px-4 py-2 rounded-sm text-[10px] font-bold uppercase tracking-wider transition-all cursor-pointer"
            >
              <FiLogOut />
              <span>Keluar</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 lg:p-8">
        
        {/* Tabs Bar */}
        <div className="flex gap-6 border-b border-zinc-900 mb-8">
          <button
            onClick={() => setActiveTab("kavlings")}
            className={`flex items-center gap-2 pb-3.5 text-xs font-bold uppercase tracking-widest border-b-2 transition-all cursor-pointer ${
              activeTab === "kavlings"
                ? "border-[#0057B8] text-white"
                : "border-transparent text-zinc-500 hover:text-zinc-300"
            }`}
          >
            <FiMap />
            <span>Manajemen Status Kavling</span>
          </button>
          <button
            onClick={() => setActiveTab("leads")}
            className={`flex items-center gap-2 pb-3.5 text-xs font-bold uppercase tracking-widest border-b-2 transition-all cursor-pointer ${
              activeTab === "leads"
                ? "border-[#0057B8] text-white"
                : "border-transparent text-zinc-500 hover:text-zinc-300"
            }`}
          >
            <FiUsers />
            <span>Calon Pembeli (Leads)</span>
          </button>
        </div>

        {/* Tab 1: Kavlings */}
        {activeTab === "kavlings" && (
          <div>
            {/* Filter Panel */}
            <div className="bg-[#121212] border border-zinc-800/80 rounded-sm p-5 mb-6 shadow-2xl flex flex-col md:flex-row gap-4 items-center justify-between">
              
              {/* Search */}
              <div className="relative w-full md:w-72">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-zinc-500 pointer-events-none">
                  <FiSearch size={16} />
                </span>
                <input
                  type="text"
                  placeholder="Cari Nomor Kavling (misal: A3)..."
                  value={searchQuery}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2.5 bg-[#050505] border border-zinc-800 rounded-sm text-xs text-white focus:outline-none focus:border-[#0082FB] transition-all"
                />
              </div>

              {/* Select Filters */}
              <div className="flex flex-wrap items-center gap-4 w-full md:w-auto">
                <div className="flex items-center gap-2 flex-1 md:flex-initial">
                  <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider">Blok:</label>
                  <select
                    value={blockFilter}
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setBlockFilter(e.target.value)}
                    title="Filter Blok"
                    aria-label="Filter Blok"
                    className="bg-[#050505] border border-zinc-800 rounded-sm px-3 py-2 text-xs text-white focus:outline-none focus:border-[#0082FB] w-full md:w-auto outline-none"
                  >
                    <option value="all">Semua Blok</option>
                    {["A", "B", "C", "D", "E"].map((b) => (
                      <option key={b} value={b}>Blok {b}</option>
                    ))}
                  </select>
                </div>

                <div className="flex items-center gap-2 flex-1 md:flex-initial">
                  <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider">Status:</label>
                  <select
                    value={statusFilter}
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setStatusFilter(e.target.value)}
                    title="Filter Status"
                    aria-label="Filter Status"
                    className="bg-[#050505] border border-zinc-800 rounded-sm px-3 py-2 text-xs text-white focus:outline-none focus:border-[#0082FB] w-full md:w-auto outline-none"
                  >
                    <option value="all">Semua Status</option>
                    <option value="available">Tersedia</option>
                    <option value="booked">Booking</option>
                    <option value="sold">Terjual</option>
                  </select>
                </div>
              </div>

            </div>

            {/* Kavlings Table/List */}
            <div className="bg-[#121212] border border-zinc-800/80 rounded-sm shadow-2xl overflow-hidden">
              {kavlingsLoading ? (
                <div className="py-20 flex flex-col items-center justify-center gap-3 text-zinc-500 text-xs uppercase tracking-widest font-bold">
                  <FiRefreshCw className="animate-spin text-[#0082FB]" size={20} />
                  <span>Memuat data kavling...</span>
                </div>
              ) : filteredKavlings.length === 0 ? (
                <div className="py-20 text-center text-zinc-500 text-xs uppercase tracking-widest font-bold">
                  Tidak ada kavling yang cocok dengan filter.
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-zinc-950 border-b border-zinc-900 text-[10px] font-bold uppercase text-zinc-500 tracking-wider">
                        <th className="py-4 px-6">Unit Kavling</th>
                        <th className="py-4 px-6">Tipe</th>
                        <th className="py-4 px-6">Ukuran / Dimensi</th>
                        <th className="py-4 px-6">Harga Promo Cash</th>
                        <th className="py-4 px-6">Update Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-900/60 text-xs text-zinc-300">
                      {filteredKavlings.map((k) => (
                        <tr key={k.number} className="hover:bg-zinc-900/40 transition-colors">
                          <td className="py-4 px-6 font-extrabold text-white">
                            Blok {k.block} — {k.number}
                          </td>
                          <td className="py-4 px-6">
                            <span className={`inline-block px-2.5 py-0.5 rounded-sm text-[9px] font-bold uppercase ${
                              k.type === "diamond"
                                ? "bg-blue-950/60 text-blue-300 border border-blue-900/40"
                                : k.type === "gold"
                                ? "bg-zinc-800/60 text-zinc-300 border border-zinc-700/40"
                                : "bg-zinc-950/60 text-zinc-400 border border-zinc-800/40"
                            }`}>
                              {k.type}
                            </span>
                          </td>
                          <td className="py-4 px-6 text-zinc-400">
                            {k.size} m² ({k.dimensions})
                          </td>
                          <td className="py-4 px-6 font-bold text-white">
                            Rp {(k.price / 1000000).toFixed(0)} JT
                          </td>
                          <td className="py-4 px-6">
                            <div className="flex items-center gap-2">
                              <select
                                value={k.status}
                                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => handleStatusChange(k.number, e.target.value as KavlingStatus)}
                                disabled={updatingId === k.number}
                                title="Ubah Status Kavling"
                                aria-label="Ubah Status Kavling"
                                className={`rounded-sm px-3 py-1.5 text-xs font-bold focus:outline-none border ${
                                  k.status === "available"
                                    ? "bg-emerald-950/60 text-emerald-300 border-emerald-900/50"
                                    : k.status === "booked"
                                    ? "bg-amber-950/60 text-amber-300 border-amber-900/50"
                                    : "bg-rose-950/60 text-rose-300 border-rose-900/50"
                                  } outline-none`}
                              >
                                <option value="available">Tersedia</option>
                                <option value="booked">Booking</option>
                                <option value="sold">Terjual</option>
                              </select>
                              {updatingId === k.number && (
                                <FiRefreshCw className="animate-spin text-[#0082FB]" size={14} />
                              )}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Tab 2: Leads */}
        {activeTab === "leads" && (
          <div>
            <div className="bg-[#121212] border border-zinc-800/80 rounded-sm shadow-2xl overflow-hidden">
              {leadsLoading ? (
                <div className="py-20 flex flex-col items-center justify-center gap-3 text-zinc-500 text-xs uppercase tracking-widest font-bold">
                  <FiRefreshCw className="animate-spin text-[#0082FB]" size={20} />
                  <span>Memuat data leads...</span>
                </div>
              ) : leads.length === 0 ? (
                <div className="py-20 text-center text-zinc-500 text-xs uppercase tracking-widest font-bold">
                  Belum ada calon pembeli yang mendaftar.
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-zinc-950 border-b border-zinc-900 text-[10px] font-bold uppercase text-zinc-500 tracking-wider">
                        <th className="py-4 px-6">Nama Calon Pembeli</th>
                        <th className="py-4 px-6">No. WhatsApp</th>
                        <th className="py-4 px-6">Kavling Pilihan</th>
                        <th className="py-4 px-6">Tanggal Masuk</th>
                        <th className="py-4 px-6">Tindakan</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-900/60 text-xs text-zinc-300">
                      {leads.map((l: Lead) => {
                        const dateVal = l.createdAt instanceof Date
                          ? l.createdAt
                          : (l.createdAt && typeof l.createdAt === "object" && "seconds" in l.createdAt)
                          ? new Date(l.createdAt.seconds * 1000)
                          : new Date();
                        const displayDate = dateVal.toLocaleString("id-ID", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                          hour: "2-digit",
                          minute: "2-digit",
                        });

                        return (
                          <tr key={l.id} className="hover:bg-zinc-900/40 transition-colors">
                            <td className="py-4 px-6 font-extrabold text-white">
                              {l.name}
                            </td>
                            <td className="py-4 px-6 font-mono text-zinc-400">
                              {l.phone}
                            </td>
                            <td className="py-4 px-6">
                              <span className="inline-block bg-[#050505] text-[#0082FB] border border-zinc-800 px-3 py-1 rounded-sm text-xs font-bold font-mono">
                                Kavling {l.kavlingId}
                              </span>
                            </td>
                            <td className="py-4 px-6 text-zinc-500 text-xs">
                              {displayDate}
                            </td>
                            <td className="py-4 px-6">
                              <a
                                href={`https://wa.me/${l.phone.replace(/[^0-9]/g, "")}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 bg-[#0057B8] hover:bg-[#0082FB] text-white font-bold text-[10px] uppercase tracking-wider px-4 py-2 rounded-sm transition-all"
                              >
                                <FiPhone size={12} />
                                <span>Hubungi</span>
                              </a>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        )}

      </main>
    </div>
  );
}
