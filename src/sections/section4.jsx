import { useRef, useState, useEffect } from "react";
import Carousel from "../components/Carousel";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { motion } from "framer-motion";

export default function Section4() {
  const scrollRef = useRef(null);
  const itemRef = useRef(null); // Ref untuk mengukur lebar item

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [itemWidth, setItemWidth] = useState(0); // State untuk menyimpan lebar item

  // Mengukur lebar item setelah komponen mount
  useEffect(() => {
    if (itemRef.current) {
      const width = itemRef.current.offsetWidth;
      setItemWidth(width);
    }
  }, []);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;

    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth);
  };

  const scrollLeft = () => {
    if (itemWidth > 0) {
      scrollRef.current.scrollBy({ 
        left: -(itemWidth + 40), // itemWidth + gap (40px)
        behavior: "smooth" 
      });
    }
  };

  const scrollRight = () => {
    if (itemWidth > 0) {
      scrollRef.current.scrollBy({ 
        left: itemWidth + 40, // itemWidth + gap (40px)
        behavior: "smooth" 
      });
    }
  };

  useEffect(() => {
    checkScroll();
    const el = scrollRef.current;
    if (!el) return;

    el.addEventListener("scroll", checkScroll);
    window.addEventListener("resize", checkScroll);

    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, []);

  return (
    <div className="min-h-screen px-20 relative bg-linear-to-b from-[#181025] via-[#2a1d41] to-[#7a54ff20] py-20">

      {/* TITLE */}
      <div className="text-left w-full mb-5 mt-15 px-4">
        <h2 className="text-white text-3xl font-bold">My Work</h2>
        <p className="text-white/70 text-lg mt-1">Recent Project</p>
      </div>

      {/* ==== LEFT ARROW ==== */}
      {canScrollLeft && (
        <motion.button
          onClick={scrollLeft}
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="
            absolute left-5 top-1/2 -translate-y-1/2 z-20 
            p-2 
            rounded-full
            bg-transparent 
            border-none
            shadow-[0_0_12px_#7a3cff80]
            hover:shadow-[0_0_20px_#7a3cffcc]
            transition-all duration-300
          "
        >
          <FiChevronLeft className="text-white text-4xl drop-shadow-[0_0_8px_#7a3cff]" />
        </motion.button>
      )}

      {/* ==== RIGHT ARROW ==== */}
      {canScrollRight && (
        <motion.button
          onClick={scrollRight}
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="
            absolute right-5 top-1/2 -translate-y-1/2 z-20 
            p-2 
            rounded-full
            bg-transparent 
            border-none
            shadow-[0_0_12px_#7a3cff80]
            hover:shadow-[0_0_20px_#7a3cffcc]
            transition-all duration-300
          "
        >
          <FiChevronRight className="text-white text-4xl drop-shadow-[0_0_8px_#7a3cff]" />
        </motion.button>
      )}

      {/* ===== CAROUSEL LIST ===== */}
      <div
        ref={scrollRef}
        className="w-full flex gap-10 overflow-x-auto px-4 pb-6 scrollbar-hide scroll-smooth"
        style={{ scrollbarWidth: "none" }}
      >

        {/* === LOGO === */}
        <div ref={itemRef} className="flex flex-col items-center shrink-0">
          <Carousel
            items={[
              { id:1, image:"src/assets/Mataf 25 Horizon.png" },
              { id:2, image:"src/assets/DFG 17 Logo CL_Horizon.png" },
              { id:3, image:"src/assets/Logo podcast 2.png" },
              { id:4, image:"src/assets/lOGO ANGSA VER.png" },
              { id:5, image:"src/assets/logo dfg 16.png" }
            ]}
            baseWidth={200}
            autoplay
            autoplayDelay={3000}
            pauseOnHover
            loop
          />
          <p className="text-white font-semibold mt-3">Logo</p>
          <button className="mt-1 text-sm px-4 py-1 rounded-lg bg-[#7a3cff] text-white hover:bg-[#602bd8]">
            View
          </button>
        </div>

        {/* === BANNER === */}
        
        <div className="flex flex-col items-center shrink-0">
          <Carousel
            items={[
              { id:1, image:"src/assets/Banner JJS CMYK rev.jpg" },
              { id:2, image:"src/assets/Banner digital simus.jpg" },
              { id:3, image:"src/assets/BG DIGITAL.jpg" },
              { id:4, image:"src/assets/Banner digital milad.jpg" },
              { id:5, image:"src/assets/Banner digitalSSSSS.jpg" },
            ]}
            baseWidth={200}
            autoplay
            loop
            pauseOnHover
          />
          <p className="text-white font-semibold mt-3">Banner</p>
          <button className="mt-1 text-sm px-4 py-1 rounded-lg bg-[#7a3cff] text-white hover:bg-[#602bd8]">
            View
          </button>
        </div>

        {/* FLYER */}

        <div className="flex flex-col items-center shrink-0">
          <Carousel
            items={[
              { id:1, image:"src/assets/pamflet desain.jpg" },
              { id:2, image:"src/assets/HBD Danang.jpg" },
              { id:3, image:"src/assets/Poster MnG.jpg" },
              { id:4, image:"src/assets/Pormawa story (1).jpg" },
              { id:5, image:"src/assets/pamflet 22.png" },
            ]}
            baseWidth={200}
            autoplay
            loop
            pauseOnHover
          />
          <p className="text-white font-semibold mt-3">Flyer</p>
          <button className="mt-1 text-sm px-4 py-1 rounded-lg bg-[#7a3cff] text-white hover:bg-[#602bd8]">
            View
          </button>
        </div>

        {/* STICKER */}
        <div className="flex flex-col items-center shrink-0">
          <Carousel
            items={[
              { id:1, image:"src/assets/STICKER KI.png" },
              { id:2, image:"src/assets/Sticker Gresik Sumpek.png" },
              { id:3, image:"src/assets/Sticker DFG XVI.png" },
              { id:3, image:"src/assets/Sticker Mataf 1.png" },
              { id:3, image:"src/assets/Sticker Mataf 2.png" },
            ]}
            baseWidth={200}
            autoplay
            loop
            pauseOnHover
          />
          <p className="text-white font-semibold mt-3">Sticker</p>
          <button className="mt-1 text-sm px-4 py-1 rounded-lg bg-[#7a3cff] text-white hover:bg-[#602bd8]">
            View
          </button>
        </div>
        <div className="flex flex-col items-center shrink-0">
          <Carousel
            items={[
              { id:1, image:"src/assets/FEED PTI 4 COVER.jpg" },
              { id:2, image:"src/assets/Feed KI.jpg" },
              { id:3, image:"src/assets/feed 3.jpg" },
              { id:4, image:"src/assets/mataf h3 (2).jpg" },
              { id:5, image:"src/assets/Feed PV1.jpg" },
            ]}
            baseWidth={200}
            autoplay
            loop
            pauseOnHover
          />
          <p className="text-white font-semibold mt-3">Instagram Feeds</p>
          <button className="mt-1 text-sm px-4 py-1 rounded-lg bg-[#7a3cff] text-white hover:bg-[#602bd8]">
            View
          </button>
        </div>
        <div className="flex flex-col items-center shrink-0">
          <Carousel
            items={[
              { id:1, image:"src/assets/banner1.png" },
              { id:2, image:"src/assets/banner2.png" },
              { id:3, image:"src/assets/banner3.png" },
            ]}
            baseWidth={200}
            autoplay
            loop
            pauseOnHover
          />
          <p className="text-white font-semibold mt-3">Banner</p>
          <button className="mt-1 text-sm px-4 py-1 rounded-lg bg-[#7a3cff] text-white hover:bg-[#602bd8]">
            View
          </button>
        </div>
        <div className="flex flex-col items-center shrink-0">
          <Carousel
            items={[
              { id:1, image:"src/assets/banner1.png" },
              { id:2, image:"src/assets/banner2.png" },
              { id:3, image:"src/assets/banner3.png" },
            ]}
            baseWidth={200}
            autoplay
            loop
            pauseOnHover
          />
          <p className="text-white font-semibold mt-3">Banner</p>
          <button className="mt-1 text-sm px-4 py-1 rounded-lg bg-[#7a3cff] text-white hover:bg-[#602bd8]">
            View
          </button>
        </div>
      </div>
    </div>
  );
}