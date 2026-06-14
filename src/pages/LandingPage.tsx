import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import DesainVillaSection from "@/components/DesainVillaSection";
import FasilitasKavling from "@/components/FasilitasKavling";
import PortfolioProjects from "@/components/PortfolioProjects";
import SiteplanMap from "@/components/SiteplanMap";
import PricelistSection from "@/components/PricelistSection";
import FlowSection from "@/components/FlowSection";
import LegalitasSection from "@/components/LegalitasSection";
import FAQSection from "@/components/FAQSection";
import PromoSection from "@/components/PromoSection";
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
    <div className="flex flex-col min-h-screen bg-white font-sans antialiased text-zinc-900 overflow-x-hidden w-full">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <LegalitasSection />
        <SiteplanMap />
        <FasilitasKavling />
        <DesainVillaSection />
        <PortfolioProjects />
        <PricelistSection />
        <FlowSection />
        <FAQSection />
        <PromoSection />
        <LocationSection />
      </main>
      <Footer />
    </div>
  );
}
