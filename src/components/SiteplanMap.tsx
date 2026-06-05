"use client";

import { useState, useMemo } from "react";
import { useKavlings } from "@/hooks/useKavlings";
import type { Kavling } from "@/types";
import DetailModal from "./DetailModal";

/* ──────── SVG Layout Data ──────── */
interface PlotRect {
  id: string;
  x: number;
  y: number;
  w: number;
  h: number;
}

function generateBlockPlots(
  block: string,
  count: number,
  startX: number,
  startY: number,
  cols: number,
  cellW: number,
  cellH: number,
  gap: number
): PlotRect[] {
  const plots: PlotRect[] = [];
  for (let i = 0; i < count; i++) {
    const col = i % cols;
    const row = Math.floor(i / cols);
    plots.push({
      id: `${block}${i + 1}`,
      x: startX + col * (cellW + gap),
      y: startY + row * (cellH + gap),
      w: cellW,
      h: cellH,
    });
  }
  return plots;
}

const svgW = 1100;
const svgH = 680;
const cw = 44;
const ch = 38;
const g = 4;

const allPlots: PlotRect[] = [
  ...generateBlockPlots("A", 20, 30, 60, 5, cw, ch, g),
  ...generateBlockPlots("B", 22, 290, 60, 6, cw, ch, g),
  ...generateBlockPlots("C", 20, 30, 380, 5, cw, ch, g),
  ...generateBlockPlots("D", 17, 580, 60, 5, cw, ch, g),
  ...generateBlockPlots("E", 14, 580, 380, 5, cw, ch, g),
];

/* ──────── Status / Type Color Maps ──────── */
const statusColor: Record<string, string> = {
  available: "#219653",
  booked: "#F2994A",
  sold: "#EB5757",
};

const statusLabel: Record<string, string> = {
  available: "Tersedia",
  booked: "Booking",
  sold: "Terjual",
};

export default function SiteplanMap() {
  const { kavlings, loading } = useKavlings();
  const [selected, setSelected] = useState<Kavling | null>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [filterBlock, setFilterBlock] = useState<string>("all");

  const kavlingMap = useMemo(() => {
    const m: Record<string, Kavling> = {};
    kavlings.forEach((k) => (m[k.number] = k));
    return m;
  }, [kavlings]);

  const stats = useMemo(() => {
    const s = { available: 0, booked: 0, sold: 0, total: kavlings.length };
    kavlings.forEach((k) => s[k.status]++);
    return s;
  }, [kavlings]);

  /* Block label positions */
  const blockLabels = [
    { label: "BLOK A", x: 140, y: 45 },
    { label: "BLOK B", x: 430, y: 45 },
    { label: "BLOK C", x: 140, y: 365 },
    { label: "BLOK D", x: 700, y: 45 },
    { label: "BLOK E", x: 700, y: 365 },
  ];

  /* Road labels */
  const roads = [
    { label: "Row Jalan 6 Meter", x: 280, y: 340, w: 540 },
    { label: "Jalan Kabupaten", x: 200, y: svgH - 15, w: 700 },
  ];

  const filteredPlots =
    filterBlock === "all"
      ? allPlots
      : allPlots.filter((p) => p.id.startsWith(filterBlock));

  return (
    <section id="siteplan" className="py-24 section-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-gold-500 text-sm tracking-[0.2em] uppercase font-semibold">
            Interactive Siteplan
          </span>
          <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-3">
            Peta Kavling The Halimun Salak
          </h2>
          <p className="text-cream-100/60 mt-4 max-w-xl mx-auto">
            Klik pada kavling untuk melihat detail. Warna menunjukkan
            ketersediaan secara real-time.
          </p>
        </div>

        {/* Stats Bar */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {[
            { key: "available", label: "Tersedia", color: "bg-status-available" },
            { key: "booked", label: "Booking", color: "bg-status-booked" },
            { key: "sold", label: "Terjual", color: "bg-status-sold" },
          ].map((s) => (
            <div
              key={s.key}
              className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-5 py-2"
            >
              <span className={`w-3 h-3 rounded-full ${s.color}`} />
              <span className="text-cream-100/80 text-sm">
                {s.label}:{" "}
                <strong className="text-white">
                  {stats[s.key as keyof typeof stats]}
                </strong>
              </span>
            </div>
          ))}
          <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-5 py-2">
            <span className="text-cream-100/80 text-sm">
              Total: <strong className="text-white">{stats.total}</strong>
            </span>
          </div>
        </div>

        {/* Block Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {["all", "A", "B", "C", "D", "E"].map((b) => (
            <button
              key={b}
              onClick={() => setFilterBlock(b)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                filterBlock === b
                  ? "bg-gold-500 text-forest-950"
                  : "bg-white/5 text-cream-100/70 hover:bg-white/10"
              }`}
            >
              {b === "all" ? "Semua Blok" : `Blok ${b}`}
            </button>
          ))}
        </div>

        {/* SVG Map */}
        <div className="bg-forest-900/50 border border-white/10 rounded-2xl p-4 sm:p-6 overflow-x-auto">
          {loading ? (
            <div className="flex items-center justify-center h-96 text-cream-100/40">
              <div className="flex items-center gap-3">
                <svg
                  className="animate-spin h-6 w-6 text-gold-500"
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
                Memuat data kavling...
              </div>
            </div>
          ) : (
            <svg
              viewBox={`0 0 ${svgW} ${svgH}`}
              className="w-full h-auto min-w-[700px] max-h-[600px]"
            >
              {/* Background */}
              <rect
                x="0"
                y="0"
                width={svgW}
                height={svgH}
                rx="12"
                fill="#0F2E1A"
                opacity="0.3"
              />

              {/* Roads */}
              {roads.map((r) => (
                <g key={r.label}>
                  <rect
                    x={r.x}
                    y={r.y - 10}
                    width={r.w}
                    height={20}
                    fill="#3A3A3A"
                    rx="3"
                    opacity="0.5"
                  />
                  <text
                    x={r.x + r.w / 2}
                    y={r.y + 4}
                    textAnchor="middle"
                    fill="#999"
                    fontSize="10"
                    fontFamily="sans-serif"
                  >
                    {r.label}
                  </text>
                </g>
              ))}

              {/* Block Labels */}
              {blockLabels.map((bl) => (
                <text
                  key={bl.label}
                  x={bl.x}
                  y={bl.y}
                  textAnchor="middle"
                  fill="#C8A84E"
                  fontSize="14"
                  fontWeight="bold"
                  fontFamily="sans-serif"
                >
                  {bl.label}
                </text>
              ))}

              {/* Feature Labels */}
              <text x={svgW - 20} y={30} textAnchor="end" fill="#666" fontSize="10">
                🏔️ View Gn. Salak
              </text>
              <text x={svgW - 20} y={svgH - 30} textAnchor="end" fill="#666" fontSize="10">
                🏔️ View Gn. Pangrango
              </text>
              <text x={20} y={svgH - 30} fill="#666" fontSize="10">
                🚪 Gerbang Masuk
              </text>
              <text x={svgW / 2} y={svgH - 30} textAnchor="middle" fill="#666" fontSize="10">
                🚪 Gerbang Keluar
              </text>

              {/* Stream */}
              <path
                d={`M 560 20 Q 570 100 555 200 Q 540 300 560 350`}
                fill="none"
                stroke="#4FC3F7"
                strokeWidth="3"
                strokeDasharray="8 4"
                opacity="0.4"
              />
              <text x="545" y="195" fill="#4FC3F7" fontSize="9" opacity="0.6">
                Anak Sungai
              </text>

              {/* Kavling Plots */}
              {filteredPlots.map((p) => {
                const kav = kavlingMap[p.id];
                const status = kav?.status || "available";
                const fill = statusColor[status];
                const isHovered = hoveredId === p.id;

                return (
                  <g
                    key={p.id}
                    className="kavling-plot"
                    onClick={() => kav && setSelected(kav)}
                    onMouseEnter={() => setHoveredId(p.id)}
                    onMouseLeave={() => setHoveredId(null)}
                  >
                    <rect
                      x={p.x}
                      y={p.y}
                      width={p.w}
                      height={p.h}
                      rx="4"
                      fill={fill}
                      stroke={isHovered ? "#FFF" : "#0B2314"}
                      strokeWidth={isHovered ? 2.5 : 1.5}
                      opacity={isHovered ? 1 : 0.85}
                      className="transition-all duration-200"
                      transform={
                        isHovered
                          ? `translate(${p.x + p.w / 2}, ${p.y + p.h / 2}) scale(1.05) translate(${-(p.x + p.w / 2)}, ${-(p.y + p.h / 2)})`
                          : undefined
                      }
                    />
                    <text
                      x={p.x + p.w / 2}
                      y={p.y + p.h / 2 - 4}
                      textAnchor="middle"
                      fill="#FFF"
                      fontSize="10"
                      fontWeight="bold"
                      fontFamily="sans-serif"
                      pointerEvents="none"
                    >
                      {p.id}
                    </text>
                    <text
                      x={p.x + p.w / 2}
                      y={p.y + p.h / 2 + 9}
                      textAnchor="middle"
                      fill="rgba(255,255,255,0.7)"
                      fontSize="7"
                      fontFamily="sans-serif"
                      pointerEvents="none"
                    >
                      {statusLabel[status]}
                    </text>

                    {/* Tooltip on hover */}
                    {isHovered && kav && (
                      <g>
                        <rect
                          x={p.x + p.w + 8}
                          y={p.y - 10}
                          width="140"
                          height="56"
                          rx="8"
                          fill="#1B4D2E"
                          stroke="#C8A84E"
                          strokeWidth="1"
                          opacity="0.95"
                        />
                        <text
                          x={p.x + p.w + 16}
                          y={p.y + 8}
                          fill="#FFF"
                          fontSize="11"
                          fontWeight="bold"
                        >
                          {kav.number} — {kav.type.toUpperCase()}
                        </text>
                        <text
                          x={p.x + p.w + 16}
                          y={p.y + 22}
                          fill="#D4BA6A"
                          fontSize="9"
                        >
                          {kav.size}m² • {kav.dimensions}
                        </text>
                        <text
                          x={p.x + p.w + 16}
                          y={p.y + 36}
                          fill="#E0CC86"
                          fontSize="10"
                          fontWeight="bold"
                        >
                          Rp {(kav.price / 1000000).toFixed(0)} Juta
                        </text>
                      </g>
                    )}
                  </g>
                );
              })}
            </svg>
          )}
        </div>

        {/* Legend */}
        <div className="flex flex-wrap justify-center gap-6 mt-6">
          <div className="flex items-center gap-2">
            <span className="w-4 h-4 rounded bg-kavling-diamond" />
            <span className="text-cream-100/60 text-sm">Diamond</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-4 h-4 rounded bg-kavling-gold" />
            <span className="text-cream-100/60 text-sm">Gold</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-4 h-4 rounded bg-kavling-silver" />
            <span className="text-cream-100/60 text-sm">Silver</span>
          </div>
        </div>
      </div>

      {/* Detail Modal */}
      {selected && (
        <DetailModal kavling={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}
