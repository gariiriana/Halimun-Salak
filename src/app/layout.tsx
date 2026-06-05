import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Halimun Salak — Kavling Villa Eksklusif ala Eropa Modern",
  description:
    "Miliki kavling villa premium di kaki Gunung Salak, ketinggian 560 MDPL dengan view langsung Gunung Salak & Pangrango. Konsep eco-luxury European modern living. Dikembangkan oleh Nuansa Alam.",
  keywords: [
    "kavling tanah bogor",
    "kavling villa eropa",
    "the halimun salak",
    "nuansa alam",
    "tanah dijual cigombong",
    "kavling gunung salak",
    "investasi tanah bogor",
  ],
  openGraph: {
    title: "The Halimun Salak — Kavling Villa Eksklusif ala Eropa Modern",
    description:
      "Kavling villa premium 560 MDPL di kaki Gunung Salak. View Gunung Salak & Pangrango. SHM, eco-luxury European modern.",
    type: "website",
    locale: "id_ID",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${inter.variable} ${outfit.variable}`}>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
