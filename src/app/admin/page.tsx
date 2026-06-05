"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";
import { useKavlings } from "@/hooks/useKavlings";
import { useLeads } from "@/hooks/useLeads";
import { signOutAdmin } from "@/lib/auth";
import { updateKavlingStatus } from "@/lib/firestore";
import type { Kavling, Lead, KavlingStatus } from "@/types";
import { FiLogOut, FiUsers, FiMap, FiSearch, FiRefreshCw, FiPhone } from "react-icons/fi";

export default function AdminDashboardPage() {
  const { user, loading: authLoading } = useAuth();
  const { kavlings, loading: kavlingsLoading } = useKavlings();
  const { leads, loading: leadsLoading } = useLeads();
  const router = useRouter();

  const [activeTab, setActiveTab] = useState<"kavlings" | "leads">("kavlings");
  
  // Kavling Filters
  const [blockFilter, setBlockFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [updatingId, setUpdatingId] = useState<string | null>(null);

  useEffect(() => {
    if (!authLoading && !user) {
      router.push("/admin/login");
    }
  }, [user, authLoading, router]);

  const handleLogout = async () => {
    try {
      await signOutAdmin();
      router.push("/admin/login");
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
      <div className="min-h-screen bg-forest-950 flex items-center justify-center text-cream-100/60">
        <div className="flex items-center gap-3">
          <svg className="animate-spin h-6 w-6 text-gold-500" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
          Memvalidasi otorisasi...
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-50 text-forest-950 flex flex-col font-sans">
      
      {/* Top Navbar */}
      <header className="bg-forest-950 text-white py-4 px-6 border-b border-gold-500/20 shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-forest-800 border border-gold-500 flex items-center justify-center font-bold text-gold-500 text-xs">
              HS
            </div>
            <div>
              <h1 className="font-[var(--font-heading)] font-bold text-base sm:text-lg">
                The Halimun Salak
              </h1>
              <p className="text-gold-400 text-[9px] tracking-wider uppercase font-semibold">
                Admin Panel Control
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <span className="hidden sm:inline text-xs text-cream-100/60 font-mono">
              Logged in: {user.email}
            </span>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 bg-white/5 hover:bg-red-600/20 hover:text-red-300 border border-white/10 px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer"
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
        <div className="flex gap-4 border-b border-zinc-200 mb-8">
          <button
            onClick={() => setActiveTab("kavlings")}
            className={`flex items-center gap-2 pb-3.5 text-sm font-bold border-b-2 transition-all cursor-pointer ${
              activeTab === "kavlings"
                ? "border-gold-500 text-gold-600"
                : "border-transparent text-zinc-400 hover:text-zinc-600"
            }`}
          >
            <FiMap />
            <span>Manajemen Status Kavling</span>
          </button>
          <button
            onClick={() => setActiveTab("leads")}
            className={`flex items-center gap-2 pb-3.5 text-sm font-bold border-b-2 transition-all cursor-pointer ${
              activeTab === "leads"
                ? "border-gold-500 text-gold-600"
                : "border-transparent text-zinc-400 hover:text-zinc-600"
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
            <div className="bg-white border border-zinc-200/80 rounded-2xl p-5 mb-6 shadow-sm flex flex-col md:flex-row gap-4 items-center justify-between">
              
              {/* Search */}
              <div className="relative w-full md:w-72">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-zinc-400 pointer-events-none">
                  <FiSearch size={16} />
                </span>
                <input
                  type="text"
                  placeholder="Cari Nomor Kavling (misal: A3)..."
                  value={searchQuery}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2.5 bg-zinc-50 border border-zinc-200 rounded-xl text-sm focus:outline-none focus:border-gold-500 focus:bg-white transition-all"
                />
              </div>

              {/* Select Filters */}
              <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
                <div className="flex items-center gap-2 flex-1 md:flex-initial">
                  <label className="text-xs font-semibold text-zinc-400 uppercase">Blok:</label>
                  <select
                    value={blockFilter}
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setBlockFilter(e.target.value)}
                    title="Filter Blok"
                    aria-label="Filter Blok"
                    className="bg-zinc-50 border border-zinc-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-gold-500 w-full md:w-auto"
                  >
                    <option value="all">Semua Blok</option>
                    {["A", "B", "C", "D", "E"].map((b) => (
                      <option key={b} value={b}>Blok {b}</option>
                    ))}
                  </select>
                </div>

                <div className="flex items-center gap-2 flex-1 md:flex-initial">
                  <label className="text-xs font-semibold text-zinc-400 uppercase">Status:</label>
                  <select
                    value={statusFilter}
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setStatusFilter(e.target.value)}
                    title="Filter Status"
                    aria-label="Filter Status"
                    className="bg-zinc-50 border border-zinc-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-gold-500 w-full md:w-auto"
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
            <div className="bg-white border border-zinc-200/80 rounded-2xl shadow-sm overflow-hidden">
              {kavlingsLoading ? (
                <div className="py-20 flex flex-col items-center justify-center gap-3 text-zinc-400">
                  <FiRefreshCw className="animate-spin text-gold-500" size={24} />
                  <span>Memuat data kavling...</span>
                </div>
              ) : filteredKavlings.length === 0 ? (
                <div className="py-20 text-center text-zinc-400">
                  Tidak ada kavling yang cocok dengan filter.
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-zinc-50 border-b border-zinc-100 text-xs font-semibold uppercase text-zinc-500 tracking-wider">
                        <th className="py-4 px-6">Unit Kavling</th>
                        <th className="py-4 px-6">Tipe</th>
                        <th className="py-4 px-6">Ukuran / Dimensi</th>
                        <th className="py-4 px-6">Harga Promo Cash</th>
                        <th className="py-4 px-6">Update Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-100 text-sm">
                      {filteredKavlings.map((k) => (
                        <tr key={k.number} className="hover:bg-zinc-50/55 transition-colors">
                          <td className="py-4 px-6 font-bold text-forest-900">
                            Blok {k.block} — {k.number}
                          </td>
                          <td className="py-4 px-6">
                            <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-bold uppercase ${
                              k.type === "diamond"
                                ? "bg-blue-100 text-blue-800"
                                : k.type === "gold"
                                ? "bg-amber-100 text-amber-800"
                                : "bg-zinc-100 text-zinc-800"
                            }`}>
                              {k.type}
                            </span>
                          </td>
                          <td className="py-4 px-6 text-zinc-600">
                            {k.size} m² ({k.dimensions})
                          </td>
                          <td className="py-4 px-6 font-semibold">
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
                                className={`rounded-xl px-3 py-1.5 text-xs font-bold focus:outline-none border border-zinc-200 ${
                                  k.status === "available"
                                    ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                                    : k.status === "booked"
                                    ? "bg-amber-50 text-amber-700 border-amber-200"
                                    : "bg-rose-50 text-rose-700 border-rose-200"
                                }`}
                              >
                                <option value="available">Tersedia</option>
                                <option value="booked">Booking</option>
                                <option value="sold">Terjual</option>
                              </select>
                              {updatingId === k.number && (
                                <FiRefreshCw className="animate-spin text-gold-500" size={14} />
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
            <div className="bg-white border border-zinc-200/80 rounded-2xl shadow-sm overflow-hidden">
              {leadsLoading ? (
                <div className="py-20 flex flex-col items-center justify-center gap-3 text-zinc-400">
                  <FiRefreshCw className="animate-spin text-gold-500" size={24} />
                  <span>Memuat data leads...</span>
                </div>
              ) : leads.length === 0 ? (
                <div className="py-20 text-center text-zinc-400">
                  Belum ada calon pembeli yang mendaftar.
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-zinc-50 border-b border-zinc-100 text-xs font-semibold uppercase text-zinc-500 tracking-wider">
                        <th className="py-4 px-6">Nama Calon Pembeli</th>
                        <th className="py-4 px-6">No. WhatsApp</th>
                        <th className="py-4 px-6">Kavling Pilihan</th>
                        <th className="py-4 px-6">Tanggal Masuk</th>
                        <th className="py-4 px-6">Tindakan</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-100 text-sm">
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
                          <tr key={l.id} className="hover:bg-zinc-50/55 transition-colors">
                            <td className="py-4 px-6 font-bold text-forest-900">
                              {l.name}
                            </td>
                            <td className="py-4 px-6 font-mono text-zinc-600">
                              {l.phone}
                            </td>
                            <td className="py-4 px-6">
                              <span className="inline-block bg-forest-800 text-gold-400 px-3 py-1 rounded-full text-xs font-bold">
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
                                className="inline-flex items-center gap-1.5 bg-green-600 hover:bg-green-500 text-white font-semibold text-xs px-4 py-2 rounded-full transition-all"
                              >
                                <FiPhone size={13} />
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
