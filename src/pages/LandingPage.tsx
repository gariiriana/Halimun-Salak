import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ValueSection from "@/components/ValueSection";
import SiteplanMap from "@/components/SiteplanMap";
import PricelistSection from "@/components/PricelistSection";
import FlowSection from "@/components/FlowSection";
import GallerySection from "@/components/GallerySection";
import FAQSection from "@/components/FAQSection";
import LocationSection from "@/components/LocationSection";
import Footer from "@/components/Footer";
import { checkKavlingsExist, seedKavling } from "@/lib/firestore";
import { initialKavlings } from "@/data/initialKavlings";

export default function LandingPage() {
  const [seeding, setSeeding] = useState(false);

  useEffect(() => {
    const initDb = async () => {
      try {
        const exists = await checkKavlingsExist();
        if (!exists) {
          setSeeding(true);
          console.log("Database empty. Seeding 93 kavling plots...");
          for (const k of initialKavlings) {
            await seedKavling(k);
          }
          console.log("Database successfully seeded!");
        }
      } catch (error) {
        console.error("Error checking or seeding database:", error);
      } finally {
        setSeeding(false);
      }
    };

    initDb();
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-[#FAF6F0] font-sans antialiased text-[#0B2314]">
      {/* Seeding Loader */}
      {seeding && (
        <div className="fixed inset-0 bg-[#0B2314]/80 backdrop-blur-sm z-[9999] flex items-center justify-center text-white">
          <div className="bg-[#12351F] border border-[#C8A84E]/30 rounded-3xl p-8 max-w-sm text-center shadow-2xl flex flex-col items-center gap-4">
            <svg
              className="animate-spin h-10 w-10 text-[#C8A84E]"
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
            <h3 className="font-[var(--font-heading)] text-lg font-bold text-white">
              Menyiapkan Sistem
            </h3>
            <p className="text-cream-100/70 text-sm">
              Sedang menginisialisasi database siteplan kavling real-time. Mohon tunggu sebentar...
            </p>
          </div>
        </div>
      )}

      {/* Landing Page Content */}
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <ValueSection />
        <SiteplanMap />
        <PricelistSection />
        <FlowSection />
        <GallerySection />
        <FAQSection />
        <LocationSection />
      </main>
      <Footer />
    </div>
  );
}
