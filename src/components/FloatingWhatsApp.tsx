import { ADMIN_WA } from "@/data/initialKavlings";

export default function FloatingWhatsApp() {
  const message = "Hallo saya tertarik dengan kavling The Halimun Salak. Mohon info survey dan pricelist detail.";
  const waUrl = `https://wa.me/${ADMIN_WA}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={waUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 animate-float block w-20 sm:w-28 md:w-32 transition-transform duration-300 hover:scale-105 filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.3)] cursor-pointer"
      id="floating-whatsapp-widget"
    >
      <img
        src="/cs-whatsapp-v3.png"
        alt="WhatsApp Support"
        className="w-full h-auto object-contain"
      />
    </a>
  );
}
