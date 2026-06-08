import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import {
  FaHome,
  FaRulerCombined,
  FaBed,
  FaBath,
  FaBuilding,
  FaCar,
  FaUsers,
  FaUtensils,
  FaCoffee,
  FaClock,
  FaLeaf,
  FaChild,
  FaWind,
  FaLockOpen,
  FaCamera,
  FaMapMarkerAlt,
  FaArrowLeft,
  FaWhatsapp,
  FaArrowRight,
  FaSearchPlus,
} from "react-icons/fa";
import { ADMIN_WA } from "@/data/initialKavlings";

interface SpecItem {
  label: string;
  value: string;
  icon: string;
}

interface DetailItem {
  id: string;
  category: "villa" | "fasilitas";
  categoryLabel: string;
  title: string;
  tagline: string;
  desc: string;
  longDesc: string;
  mainImage: string;
  additionalImages: string[];
  specs: SpecItem[];
  highlights: string[];
  floorPlanImage?: string;
}

const galleryData: Record<string, DetailItem> = {
  "desain-villa-eropa-modern": {
    id: "desain-villa-eropa-modern",
    category: "villa",
    categoryLabel: "VILLA ECO-LUXURY LIVING",
    title: "Desain Villa Eropa Modern",
    tagline: "Perpaduan Keanggunan Klasik Eropa dengan Kenyamanan Fungsional Modern",
    desc: "Konsep hunian peristirahatan bergaya country-classic Eropa Utara yang dikembangkan secara presisi untuk memaksimalkan kenyamanan peristirahatan akhir pekan keluarga Anda.",
    longDesc: "Desain Villa Eropa Modern menghadirkan pesona arsitektur khas pedesaan Perancis dengan sentuhan minimalis modern yang sangat diminati saat ini. Dengan atap tinggi bergaya pelana (pitched roof), jendela busur yang elegan, dan penataan ruangan terbuka tanpa banyak sekat (open space), villa ini menjamin sirkulasi udara pegunungan mengalir sejuk dan pencahayaan matahari pagi masuk dengan berlimpah ke setiap sudut rumah. Pilihan tepat bagi Anda yang mendambakan kenyamanan eksklusif dan nilai investasi yang terus bertumbuh.",
    mainImage: "/media__1780626920799.png",
    additionalImages: [
      "/media__1780626920799.png",
      "/DESAIN-VILLA-HALIMUN-SALAK-1.1.webp",
      "/DESAIN-VILLA-HALIMUN-SALAK-1.2.webp",
      "/DESAIN-VILLA-HALIMUN-SALAK-2.1.webp",
      "/DESAIN-VILLA-HALIMUN-SALAK-2.2.webp"
    ],
    specs: [
      { label: "Luas Bangunan", value: "85 m²", icon: "FaHome" },
      { label: "Luas Tanah", value: "120 m²", icon: "FaRulerCombined" },
      { label: "Kamar Tidur", value: "3 Kamar Utama", icon: "FaBed" },
      { label: "Kamar Mandi", value: "2 Bathrooms", icon: "FaBath" },
      { label: "Jumlah Lantai", value: "2 Lantai", icon: "FaBuilding" },
      { label: "Carport", value: "2 Mobil", icon: "FaCar" }
    ],
    highlights: [
      "Desain Ruang Keluarga 'Double Height Ceiling' (langit-langit tinggi) yang megah dan berkelas.",
      "Aksen bata ekspos natural pada bagian fasad luar yang menambah kehangatan arsitektur klasik.",
      "Dinding kaca panoramic besar di area depan untuk memaksimalkan pemandangan hijau.",
      "Balkon pribadi di lantai atas yang luas, sangat cocok untuk area ngeteh sore menghadap pegunungan."
    ],
    floorPlanImage: "/tipe-a.png"
  },
  "fasad-villa-kontemporer": {
    id: "fasad-villa-kontemporer",
    category: "villa",
    categoryLabel: "VILLA SIGNATURE LIVING",
    title: "Fasad Villa Kontemporer",
    tagline: "Estetika Arsitektur Modern Menyatu Harmonis dengan Lanskap Alam Pegunungan",
    desc: "Hunian eksklusif bertema eco-luxury yang mengedepankan kombinasi dinding kaca lebar dengan material kayu premium, mengekspresikan karakter kokoh, elegan, dan dinamis.",
    longDesc: "Fasad Villa Kontemporer dirancang khusus bagi mereka yang mendambakan gaya hidup premium yang berkelas dan menyatu dengan alam. Penggunaan dinding kaca panoramic ganda setinggi 6 meter menyajikan lukisan alam berupa pemandangan Gunung Salak dan Gunung Gede Pangrango tanpa batas dari dalam kamar Anda. Dilengkapi teras atap (rooftop deck) yang didesain tangguh untuk menikmati taburan bintang malam dan udara segar bogor selatan.",
    mainImage: "/media__1780626931965.png",
    additionalImages: [
      "/media__1780626931965.png",
      "/DESAIN-VILLA-HALIMUN-SALAK-3.1.webp",
      "/DESAIN-VILLA-HALIMUN-SALAK-3.2.webp",
      "/DESAIN-VILLA-HALIMUN-SALAK-4.1.webp",
      "/DESAIN-VILLA-HALIMUN-SALAK-4.2.webp",
      "/DESAIN-VILLA-HALIMUN-SALAK-5.1.webp"
    ],
    specs: [
      { label: "Luas Bangunan", value: "110 m²", icon: "FaHome" },
      { label: "Luas Tanah", value: "150 m²", icon: "FaRulerCombined" },
      { label: "Kamar Tidur", value: "3 Bed & Study", icon: "FaBed" },
      { label: "Kamar Mandi", value: "3 Bathrooms", icon: "FaBath" },
      { label: "Jumlah Lantai", value: "2 Lantai + Rooftop", icon: "FaBuilding" },
      { label: "Carport", value: "2 Mobil + Taman", icon: "FaCar" }
    ],
    highlights: [
      "Rooftop viewing deck eksklusif untuk area barbeque keluarga dan melihat langit berbintang.",
      "Struktur kaca ganda (double glazed glass) penahan udara dingin namun memaksimalkan view 360 derajat.",
      "Integrasi tanaman rambat dan lanskap hijau terintegrasi pada teras samping villa.",
      "Tata ruang lega yang mendukung gaya hidup modern yang minimalis namun berkelas."
    ],
    floorPlanImage: "/tipe-c.png"
  },
  "the-little-redbarn-resto": {
    id: "the-little-redbarn-resto",
    category: "fasilitas",
    categoryLabel: "IKON KULINER KAWASAN PREMIUM",
    title: "The Little Redbarn Resto",
    tagline: "Destinasi Kuliner Ikonik dengan Nuansa Lumbung Pegunungan Eropa Utara",
    desc: "Restoran, cafe, dan social space bernuansa estetik dengan arsitektur klasik lumbung (barn) berwarna merah menyala di tengah kawasan kavling Halimun Salak.",
    longDesc: "The Little Redbarn Resto bukan sekadar tempat bersantap, melainkan pusat gaya hidup dan ikon kebersamaan di kawasan Halimun Salak. Mengusung arsitektur lumbung pedesaan Eropa Utara yang sangat ikonik dengan interior berkonsep industrial hangat, resto ini menyajikan hidangan fusion barat dan nusantara yang menggugah selera. Dikelilingi area taman luar ruangan yang luas dan rumah kaca kecil (private glasshouse) untuk suasana santap yang lebih intim.",
    mainImage: "/media__1780626887208.png",
    additionalImages: [
      "/media__1780626887208.png",
      "/media__1780626897537.png",
      "/media__1780626908414.png",
      "/Nuansa-Alam-The-Halimun-Salak-14-scaled.webp"
    ],
    specs: [
      { label: "Kapasitas Resto", value: "150+ Kursi", icon: "FaUsers" },
      { label: "Area Makan", value: "Indoor & Outdoor", icon: "FaUtensils" },
      { label: "Menu Andalan", value: "Western & Fusion", icon: "FaCoffee" },
      { label: "Jam Operasional", value: "08:00 - 22:00", icon: "FaClock" },
      { label: "Lanskap", value: "Kebun Lavender", icon: "FaLeaf" },
      { label: "Fasilitas Anak", value: "Playground Area", icon: "FaChild" }
    ],
    highlights: [
      "Replika arsitektur red barn autentik dengan detail interior kayu pinus alami dan besi ekspos.",
      "Teras makan luar ruangan (outdoor dining terrace) yang menyuguhkan pemandangan langsung Gunung Salak.",
      "Menyediakan area panggung live music akustik di akhir pekan untuk menemani makan malam romantis Anda.",
      "Tersedia pilihan private glasshouse untuk pertemuan korporasi, kumpul keluarga, atau pesta privat."
    ]
  },
  "kincir-angin-windmill": {
    id: "kincir-angin-windmill",
    category: "fasilitas",
    categoryLabel: "LANDMARK IKONIK BELANDA KLASIK",
    title: "Kincir Angin (Windmill)",
    tagline: "Ikon Belanda Klasik yang Membawa Suasana Pedesaan Keukenhof ke Jawa Barat",
    desc: "Landmark replika kincir angin Belanda klasik setinggi 12 meter yang dikelilingi oleh hamparan taman bunga indah dan jembatan kayu estetik.",
    longDesc: "Kincir Angin (Windmill) merupakan salah satu daya tarik utama dan pusat estetika dari kawasan kavling The Halimun Salak. Mengambil inspirasi dari kota kincir angin legendaris Zaanse Schans di Belanda, landmark ini dibangun dengan presisi tinggi menggunakan baling-baling kayu besar yang dapat berputar tertiup angin sejuk pegunungan. Di sekeliling kincir angin terdapat kebun bunga warna-warni yang ditata bertingkat dengan jalan setapak batu alam yang sangat romantis untuk berswafoto bersama orang terkasih.",
    mainImage: "/media__1780627061945.png",
    additionalImages: [
      "/media__1780627061945.png",
      "/media__1780627014038.png",
      "/media__1780627028134.png",
      "/media__1780627036632.png",
      "/media__1780627049181.png",
      "/Nuansa-Alam-The-Halimun-Salak-15-scaled.webp"
    ],
    specs: [
      { label: "Tinggi Struktur", value: "12 Meter", icon: "FaBuilding" },
      { label: "Tipe Landmark", value: "Dutch Windmill", icon: "FaWind" },
      { label: "Akses Masuk", value: "Free Pemilik Kavling", icon: "FaLockOpen" },
      { label: "Spot Foto Utama", value: "Jembatan Belanda", icon: "FaCamera" },
      { label: "Taman Sekitar", value: "Taman Lavender", icon: "FaLeaf" },
      { label: "Lokasi", value: "Samping Redbarn Resto", icon: "FaMapMarkerAlt" }
    ],
    highlights: [
      "Viewing deck (dek pandang) melingkar di lantai dua untuk melihat pemandangan seluruh kawasan 360 derajat.",
      "Taman bunga bertingkat dengan ratusan tanaman hias indah yang dirawat secara rutin oleh tim kebersihan.",
      "Sistem pencahayaan malam yang dramatis menggunakan lampu spotlight hangat (warm white) di sepanjang area kincir.",
      "Akses jembatan kayu gantung estetik di atas kolam ikan jernih yang menambah keindahan lanskap air."
    ]
  }
};

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  FaHome,
  FaRulerCombined,
  FaBed,
  FaBath,
  FaBuilding,
  FaCar,
  FaUsers,
  FaUtensils,
  FaCoffee,
  FaClock,
  FaLeaf,
  FaChild,
  FaWind,
  FaLockOpen,
  FaCamera,
  FaMapMarkerAlt
};

export default function GalleryDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState<string>("");
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const item = id ? galleryData[id] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
    if (item) {
      document.title = `${item.title} - The Halimun Salak`;
      setSelectedImage(item.mainImage);
    } else {
      document.title = "Not Found - The Halimun Salak";
    }
  }, [id, item]);

  if (!item) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white px-4">
        <h1 className="text-3xl font-extrabold mb-4 font-[var(--font-heading)] uppercase tracking-wide">
          Halaman Tidak Ditemukan
        </h1>
        <p className="text-zinc-400 mb-8 max-w-md text-center text-sm">
          Maaf, detail properti atau fasilitas yang Anda cari tidak tersedia atau telah dipindahkan.
        </p>
        <Link
          to="/"
          id="btn-back-home"
          className="inline-flex items-center gap-2 bg-[#0082FB] hover:bg-[#0057B8] text-white px-6 py-3 text-xs font-bold uppercase tracking-wider transition-all rounded-sm shadow-md"
        >
          <FaArrowLeft size={12} />
          Kembali ke Beranda
        </Link>
      </div>
    );
  }

  // Find other items for recommendations
  const recommendations = Object.values(galleryData).filter((x) => x.id !== item.id);

  return (
    <div className="min-h-screen bg-black text-white font-sans antialiased selection:bg-[#0082FB]/30 selection:text-white">
      {/* Premium Header/Navigation */}
      <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <Link
            to="/"
            id="nav-brand-link"
            className="flex items-center gap-2 text-white font-black tracking-widest text-sm uppercase hover:text-[#0082FB] transition-colors"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-[#0082FB]">
              THE HALIMUN SALAK
            </span>
          </Link>

          <Link
            to="/"
            id="header-back-btn"
            className="inline-flex items-center gap-2 text-xs font-extrabold tracking-widest uppercase text-zinc-400 hover:text-white transition-all group"
          >
            <FaArrowLeft
              size={12}
              className="group-hover:-translate-x-1 transition-transform"
            />
            Kembali ke Beranda
          </Link>
        </div>
      </header>

      <main className="py-8 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumbs */}
          <div className="mb-6 md:mb-10 text-xs tracking-wider text-zinc-500 uppercase flex items-center gap-2">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-zinc-400">{item.category === "villa" ? "Desain Villa" : "Fasilitas"}</span>
            <span>/</span>
            <span className="text-[#0082FB] font-bold">{item.title}</span>
          </div>

          {/* Title & Tagline (Mobile First view) */}
          <div className="mb-8 md:mb-12">
            <span className="text-[#0082FB] text-xs font-black tracking-[0.2em] uppercase">
              {item.categoryLabel}
            </span>
            <h1 className="font-[var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-2 uppercase italic tracking-wide">
              {item.title}
            </h1>
            <p className="text-zinc-400 text-sm sm:text-base md:text-lg mt-3 max-w-4xl font-medium leading-relaxed italic">
              &ldquo;{item.tagline}&rdquo;
            </p>
          </div>

          {/* Main Visuals & Details Split Grid */}
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Column: Visual Gallery Showcase (col 7) */}
            <div className="lg:col-span-7 space-y-4">
              <div className="relative aspect-[4/3] w-full bg-[#121212] border border-zinc-800 rounded-sm overflow-hidden shadow-2xl">
                <img
                  src={selectedImage}
                  alt={item.title}
                  className="w-full h-full object-cover animate-fade-in duration-300"
                />
                <div className="absolute top-4 left-4 bg-black/75 backdrop-blur-sm text-[#0082FB] text-[10px] font-black tracking-widest px-3 py-1.5 uppercase border border-zinc-800">
                  UTAMA
                </div>
              </div>

              {/* Thumbnails */}
              <div className="grid grid-cols-5 gap-2 md:gap-3">
                {item.additionalImages.map((imgSrc, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(imgSrc)}
                    id={`thumb-btn-${idx}`}
                    className={`relative aspect-[4/3] rounded-sm overflow-hidden border transition-all duration-300 ${
                      selectedImage === imgSrc
                        ? "border-[#0082FB] scale-95 shadow-lg shadow-[#0082FB]/10"
                        : "border-zinc-800 hover:border-zinc-500 hover:scale-102"
                    }`}
                  >
                    <img
                      src={imgSrc}
                      alt={`${item.title} thumbnail ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Right Column: Rich Specifications & Content (col 5) */}
            <div className="lg:col-span-5 space-y-8">
              
              {/* Short & Long Description */}
              <div className="space-y-4">
                <h2 className="text-xs font-black tracking-widest uppercase text-zinc-500 border-b border-zinc-900 pb-2">
                  Deskripsi Proyek
                </h2>
                <p className="text-zinc-300 text-sm leading-relaxed">
                  {item.desc}
                </p>
                <p className="text-zinc-400 text-xs leading-relaxed">
                  {item.longDesc}
                </p>
              </div>

              {/* Technical Specifications Grid */}
              <div className="space-y-4">
                <h2 className="text-xs font-black tracking-widest uppercase text-zinc-500 border-b border-zinc-900 pb-2">
                  Spesifikasi Teknis
                </h2>
                <div className="grid grid-cols-2 gap-3">
                  {item.specs.map((spec, index) => {
                    const IconComponent = iconMap[spec.icon] || FaHome;
                    return (
                      <div
                        key={index}
                        className="bg-[#0b0c0e] border border-zinc-900 hover:border-zinc-800 transition-colors p-3.5 flex items-center gap-3.5 rounded-sm"
                      >
                        <div className="p-2.5 bg-[#0082FB]/10 text-[#0082FB] rounded-sm">
                          <IconComponent size={16} />
                        </div>
                        <div>
                          <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">
                            {spec.label}
                          </p>
                          <p className="text-xs font-extrabold text-white mt-0.5">
                            {spec.value}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Highlights & Key Features */}
              <div className="space-y-4">
                <h2 className="text-xs font-black tracking-widest uppercase text-zinc-500 border-b border-zinc-900 pb-2">
                  Keunggulan Utama
                </h2>
                <ul className="space-y-3">
                  {item.highlights.map((hl, index) => (
                    <li key={index} className="flex gap-3 text-xs text-zinc-300 leading-relaxed">
                      <span className="text-[#0082FB] font-black mt-0.5 select-none">✓</span>
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Floor Plan Display (If available) */}
              {item.floorPlanImage && (
                <div className="space-y-4 pt-2">
                  <h2 className="text-xs font-black tracking-widest uppercase text-zinc-500 border-b border-zinc-900 pb-2">
                    Tata Ruang & Denah
                  </h2>
                  <div
                    onClick={() => setIsLightboxOpen(true)}
                    id="floorplan-trigger"
                    className="group relative bg-[#0b0c0e] border border-zinc-800 rounded-sm p-4 flex items-center justify-between cursor-pointer hover:border-[#0082FB]/50 hover:bg-[#121212] transition-all"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-white/5 border border-zinc-800 rounded-sm overflow-hidden flex items-center justify-center p-1 group-hover:bg-white/10 transition-colors">
                        <img
                          src={item.floorPlanImage}
                          alt="Denah layout mini"
                          className="max-w-full max-h-full object-contain invert opacity-75 group-hover:opacity-100 transition-opacity"
                        />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-white uppercase tracking-wider">
                          Lihat Denah Lantai 2D
                        </p>
                        <p className="text-[10px] text-zinc-500 mt-0.5">
                          Klik untuk memperbesar denah tata ruang
                        </p>
                      </div>
                    </div>
                    <div className="text-zinc-500 group-hover:text-[#0082FB] transition-colors pr-2">
                      <FaSearchPlus size={18} />
                    </div>
                  </div>
                </div>
              )}

              {/* Luxury Call-To-Action Button */}
              <div className="pt-4 border-t border-zinc-900">
                <a
                  href={`https://wa.me/${ADMIN_WA}?text=Hallo%20saya%20tertarik%20dengan%20proyek%20The%20Halimun%20Salak%20bagian%20${encodeURIComponent(
                    item.title
                  )}.%20Mohon%20kirimkan%20e-brochure%20lengkap%20dan%20informasi%20harganya.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="whatsapp-cta-link"
                  className="w-full inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#0057B8] to-[#0082FB] hover:from-[#0082FB] hover:to-[#0057B8] text-white py-4.5 px-6 text-xs font-black uppercase tracking-widest transition-all shadow-lg shadow-[#0082FB]/10 hover:shadow-[#0082FB]/20 rounded-sm cursor-pointer"
                >
                  <FaWhatsapp size={16} />
                  Hubungi Agen & Dapatkan Brosur Lengkap
                </a>
                <p className="text-center text-[10px] text-zinc-500 mt-2.5">
                  Konsultasi gratis, respon cepat 24/7 via WhatsApp resmi.
                </p>
              </div>

            </div>

          </div>

          {/* Related Recommendations Carousel/Grid */}
          <div className="mt-20 md:mt-32 pt-12 border-t border-zinc-900">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10 gap-4">
              <div>
                <span className="text-[#0082FB] text-xs font-bold tracking-[0.25em] uppercase">
                  Rekomendasi Eksklusif
                </span>
                <h2 className="font-[var(--font-heading)] text-2xl sm:text-3xl font-extrabold text-white mt-1.5 uppercase italic tracking-wide">
                  Jelajahi Unit & Fasilitas Lainnya
                </h2>
              </div>
              <Link
                to="/"
                id="view-all-recommendations-btn"
                className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#0082FB] hover:text-white uppercase transition-colors group"
              >
                Lihat Semua Fasilitas
                <FaArrowRight
                  size={10}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {recommendations.map((rec, idx) => (
                <Link
                  key={idx}
                  to={`/gallery/${rec.id}`}
                  id={`rec-card-link-${rec.id}`}
                  className="group bg-[#0b0c0e] border border-zinc-900 rounded-sm overflow-hidden hover:border-[#0082FB]/40 transition-all duration-300 flex flex-col shadow-lg"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <img
                      src={rec.mainImage}
                      alt={rec.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute top-3 left-3 bg-black/70 text-white text-[8px] font-bold tracking-widest px-2 py-0.5 uppercase">
                      {rec.category === "villa" ? "VILLA" : "AMENITIES"}
                    </div>
                  </div>
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-[var(--font-heading)] text-sm font-bold text-white uppercase tracking-wide group-hover:text-[#0082FB] transition-colors mb-1.5">
                        {rec.title}
                      </h3>
                      <p className="text-zinc-400 text-[10px] leading-relaxed line-clamp-2">
                        {rec.desc}
                      </p>
                    </div>
                    <span className="text-[10px] font-bold text-[#0082FB] uppercase tracking-wider mt-4 inline-flex items-center gap-1.5 group-hover:text-white transition-colors">
                      Lihat Detail <FaArrowRight size={8} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </main>

      {/* Lightbox / Modal for Zooming Floor Plan */}
      {isLightboxOpen && item.floorPlanImage && (
        <div
          onClick={() => setIsLightboxOpen(false)}
          id="lightbox-backdrop"
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-8 cursor-zoom-out animate-fade-in"
        >
          <div className="relative max-w-4xl max-h-[85vh] w-full h-full flex items-center justify-center">
            <img
              src={item.floorPlanImage}
              alt={`${item.title} Floor Plan Big`}
              className="max-w-full max-h-full object-contain p-4 bg-white/95 rounded-sm shadow-2xl animate-scale-in"
            />
            <button
              onClick={() => setIsLightboxOpen(false)}
              id="lightbox-close-btn"
              className="absolute -top-10 right-0 text-white hover:text-[#0082FB] text-xs font-black tracking-widest uppercase cursor-pointer py-2 px-4"
            >
              TUTUP ✕
            </button>
          </div>
        </div>
      )}

      {/* Premium Footer */}
      <footer className="bg-black border-t border-zinc-900 py-10 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs text-zinc-500 uppercase tracking-widest">
            &copy; {new Date().getFullYear()} The Halimun Salak. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
