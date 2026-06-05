import type { Kavling } from "@/types";

/* ──────────────────────────────────────────────────────
   Nomor WA Admin & Instagram
   ────────────────────────────────────────────────────── */
export const ADMIN_WA = "6289508074080";
export const INSTAGRAM_URL = "https://www.instagram.com/halimunsalak.id";

/* ──────────────────────────────────────────────────────
   Helper untuk harga berdasarkan tipe kavling
   price     = harga promo cash (per kavling, asumsi 100m²)
   priceNormal = harga normal
   ────────────────────────────────────────────────────── */
function priceByType(type: "diamond" | "gold" | "silver") {
  switch (type) {
    case "diamond":
      return { price: 235000000, priceNormal: 270000000 };
    case "gold":
      return { price: 215000000, priceNormal: 250000000 };
    case "silver":
      return { price: 195000000, priceNormal: 230000000 };
  }
}

function k(
  number: string,
  block: string,
  type: "diamond" | "gold" | "silver",
  size = 100,
  dimensions = "8m x 12.5m"
): Omit<Kavling, "id"> {
  const { price, priceNormal } = priceByType(type);
  return { number, block, type, size, dimensions, price, priceNormal, status: "available" };
}

/* ──────────────────────────────────────────────────────
   93 Kavling  —  Blok A (20), Blok B (22), 
                  Blok C (20), Blok D (17), Blok E (14) = 93
   Tipe disesuaikan dengan siteplan:
     Diamond (Biru) = 40,  Gold (Kuning) = 38,  Silver (Abu) = 15
   ────────────────────────────────────────────────────── */
export const initialKavlings: Omit<Kavling, "id">[] = [
  /* ── BLOK A ── */
  k("A1", "A", "gold"),
  k("A2", "A", "diamond"),
  k("A3", "A", "diamond"),
  k("A4", "A", "diamond"),
  k("A5", "A", "gold"),
  k("A6", "A", "diamond"),
  k("A7", "A", "gold"),
  k("A8", "A", "gold"),
  k("A9", "A", "silver"),
  k("A10", "A", "gold"),
  k("A11", "A", "gold"),
  k("A12", "A", "diamond"),
  k("A13", "A", "diamond"),
  k("A14", "A", "diamond"),
  k("A15", "A", "gold"),
  k("A16", "A", "gold"),
  k("A17", "A", "silver"),
  k("A18", "A", "silver"),
  k("A19", "A", "gold"),
  k("A20", "A", "gold"),

  /* ── BLOK B ── */
  k("B1", "B", "diamond"),
  k("B2", "B", "gold"),
  k("B3", "B", "diamond"),
  k("B4", "B", "silver"),
  k("B5", "B", "gold"),
  k("B6", "B", "diamond"),
  k("B7", "B", "diamond"),
  k("B8", "B", "gold"),
  k("B9", "B", "gold"),
  k("B10", "B", "diamond"),
  k("B11", "B", "silver"),
  k("B12", "B", "gold"),
  k("B13", "B", "diamond"),
  k("B14", "B", "silver"),
  k("B15", "B", "gold"),
  k("B16", "B", "diamond"),
  k("B17", "B", "silver"),
  k("B18", "B", "gold"),
  k("B19", "B", "diamond"),
  k("B20", "B", "gold"),
  k("B21", "B", "diamond"),
  k("B22", "B", "gold"),

  /* ── BLOK C ── */
  k("C1", "C", "gold"),
  k("C2", "C", "diamond"),
  k("C3", "C", "gold"),
  k("C4", "C", "diamond"),
  k("C5", "C", "gold"),
  k("C6", "C", "diamond"),
  k("C7", "C", "diamond"),
  k("C8", "C", "gold"),
  k("C9", "C", "silver"),
  k("C10", "C", "diamond"),
  k("C11", "C", "gold"),
  k("C12", "C", "diamond"),
  k("C13", "C", "gold"),
  k("C14", "C", "diamond"),
  k("C15", "C", "gold"),
  k("C16", "C", "silver"),
  k("C17", "C", "diamond"),
  k("C18", "C", "gold"),
  k("C19", "C", "diamond"),
  k("C20", "C", "gold"),

  /* ── BLOK D ── */
  k("D1", "D", "diamond"),
  k("D2", "D", "gold"),
  k("D3", "D", "silver"),
  k("D4", "D", "diamond"),
  k("D5", "D", "gold"),
  k("D6", "D", "diamond"),
  k("D7", "D", "diamond"),
  k("D8", "D", "gold"),
  k("D9", "D", "silver"),
  k("D10", "D", "gold"),
  k("D11", "D", "diamond"),
  k("D12", "D", "gold"),
  k("D13", "D", "diamond"),
  k("D14", "D", "gold"),
  k("D15", "D", "diamond"),
  k("D16", "D", "gold"),
  k("D17", "D", "diamond"),

  /* ── BLOK E ── */
  k("E1", "E", "gold"),
  k("E2", "E", "diamond"),
  k("E3", "E", "silver"),
  k("E4", "E", "gold"),
  k("E5", "E", "diamond"),
  k("E6", "E", "gold"),
  k("E7", "E", "diamond"),
  k("E8", "E", "silver"),
  k("E9", "E", "gold"),
  k("E10", "E", "diamond"),
  k("E11", "E", "gold"),
  k("E12", "E", "diamond"),
  k("E13", "E", "gold"),
  k("E14", "E", "diamond"),
];
