import { useState, useEffect } from "react";
import { FiMapPin, FiSun, FiArrowDown } from "react-icons/fi";
import { FaMountain } from "react-icons/fa";

const backgrounds = [
  "/hero-bg.jpg",
  "/dashboard-1.jpg",
  "/dashboard-2.jpg",
  "/dashboard-3.jpg",
  "/dashboard-4.png",
  "/dashboard-5.jpg",
];

export default function HeroSection() {
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [bgIndex, setBgIndex] = useState(0);
  
  const fullText1 = "Jual Tanah Kavling Villa";
  const fullText2 = "Eksklusif Eropa Modern";

  useEffect(() => {
    let activeInterval: NodeJS.Timeout;
    let activeTimeout: NodeJS.Timeout;
    
    const runAnimation = () => {
      setText1("");
      setText2("");
      
      let index1 = 0;
      let index2 = 0;
      let currentText1 = "";
      let currentText2 = "";
      
      activeInterval = setInterval(() => {
        if (index1 < fullText1.length) {
          currentText1 += fullText1[index1];
          setText1(currentText1);
          index1++;
        } else if (index2 < fullText2.length) {
          currentText2 += fullText2[index2];
          setText2(currentText2);
          index2++;
        } else {
          clearInterval(activeInterval);
          activeTimeout = setTimeout(runAnimation, 2000);
        }
      }, 60);
    };

    runAnimation();
    
    return () => {
      clearInterval(activeInterval);
      clearTimeout(activeTimeout);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % backgrounds.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="beranda"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Background Image Slideshow with Crossfade */}
      <div className="absolute inset-0 z-0">
        {backgrounds.map((bg, idx) => (
          <img
            key={bg}
            src={bg}
            alt="The Halimun Salak Villa Resort Background"
            className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 ease-in-out ${
              idx === bgIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        {/* Sleek BYD-style dark vignette overlay: dark at top and bottom, lighter in the center */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/30 to-[#050505]" />
      </div>

      {/* Decorative Aura / Glow (Electric Blue BYD Theme) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#0057B8]/8 rounded-full blur-[130px]" />
      </div>

      {/* Top thin electric accent line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#0057B8]/30 to-transparent z-10" />

      <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 text-center py-16 sm:py-28 md:py-36">

        {/* Main Heading (BYD style clean upright uppercase bold with Typing Animation and No Layout Shift) */}
        <div className="relative font-[var(--font-heading)] text-2xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 sm:mb-6 uppercase tracking-wider leading-[1.2] sm:leading-[1.15]">
          {/* Static invisible text that reserves the height */}
          <h1 className="invisible select-none pointer-events-none">
            Jual Tanah Kavling Villa
            <br className="hidden sm:inline" />{" "}
            <span className="text-white">Eksklusif Eropa Modern</span>
          </h1>
          {/* Typed text layered absolutely on top */}
          <div className="absolute inset-0 text-white">
            {text1}
            {text1 === fullText1 && <br className="hidden sm:inline" />}{" "}
            <span className="text-white">{text2}</span>
            <span className="inline-block w-[3px] h-[0.8em] bg-[#0082FB] ml-1 animate-pulse align-middle"></span>
          </div>
        </div>

        {/* Subheading */}
        <p className="text-zinc-300 text-xs sm:text-base max-w-2xl mx-auto mb-6 sm:mb-12 leading-relaxed tracking-wide font-medium drop-shadow-md px-2 sm:px-0">
          Hunian villa premium di kaki Gunung Salak, ketinggian{" "}
          <strong className="text-white">560 MDPL</strong> dengan panorama
          langsung Gunung Salak & Gunung Pangrango. Konsep{" "}
          <span className="text-[#0082FB] font-semibold">eco-luxury European modern living</span>.
        </p>

        {/* Video Player */}
        <div className="max-w-4xl mx-auto mt-4 sm:mt-8 relative z-20">
          <div className="relative aspect-video rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl bg-black group hover:border-[#0082FB]/40 transition-all duration-500">
            {/* Ambient glow on hover */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#0057B8]/20 to-[#0082FB]/20 rounded-2xl blur-md opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none" />
            <iframe
              className="relative w-full h-full z-10 rounded-2xl"
              src="https://www.youtube.com/embed/1s-fmwd1Cl8?autoplay=0&rel=0&modestbranding=1"
              title="Profile & Keunggulan The Halimun Salak"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="hidden md:block absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
        <div className="w-5 h-9 border border-white/20 rounded-full flex items-start justify-center p-1.5">
          <div className="w-1 h-2 bg-white rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
