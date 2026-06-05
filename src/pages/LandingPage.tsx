import { useEffect } from "react";
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
import { checkKavlingsExist, seedKavlingsBatch } from "@/lib/firestore";
import { initialKavlings } from "@/data/initialKavlings";

export default function LandingPage() {
  useEffect(() => {
    const initDb = async () => {
      try {
        const exists = await checkKavlingsExist();
        if (!exists) {
          console.log("Database empty. Seeding 93 kavling plots in batch...");
          await seedKavlingsBatch(initialKavlings);
          console.log("Database successfully seeded in batch!");
        }
      } catch (error) {
        console.error("Error checking or seeding database:", error);
      }
    };

    initDb();
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-[#FAF6F0] font-sans antialiased text-[#0B2314]">
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
