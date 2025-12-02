import { useRef, useState, useEffect } from "react";
import Carousel from "../components/Carousel";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { motion } from "framer-motion";
import BlurText from "../components/BlurText";

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

    const handleAnimationComplete = () => {
    console.log('Animation completed!');
  };

    const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -scrollRef.current.clientWidth, // scroll penuh 1 layar
        behavior: "smooth"
      });
    }
  };

const scrollRight = () => {
  if (scrollRef.current) {
    scrollRef.current.scrollBy({
      left: scrollRef.current.clientWidth, // scroll penuh 1 layar
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


  // Data carousel
  const carouselData = [
    {
      title: "Logo",
      items: [
        { id: 1, image: "src/assets/Mataf 25 Horizon.png" },
        { id: 2, image: "src/assets/DFG 17 Logo CL_Horizon.png" },
        { id: 3, image: "src/assets/Logo podcast 2.png" },
        { id: 4, image: "src/assets/lOGO ANGSA VER.png" },
        { id: 5, image: "src/assets/logo dfg 16.png" },
      ],
    },
    {
      title: "Banner",
      items: [
        { id: 1, image: "src/assets/Banner JJS CMYK rev.jpg" },
        { id: 2, image: "src/assets/Banner digital simus.jpg" },
        { id: 3, image: "src/assets/BG DIGITAL.jpg" },
        { id: 4, image: "src/assets/Banner digital milad.jpg" },
        { id: 5, image: "src/assets/Banner digitalSSSSS.jpg" },
      ],
    },
    {
      title: "Flyer",
      items: [
        { id: 1, image: "src/assets/pamflet desain.jpg" },
        { id: 2, image: "src/assets/HBD Danang.jpg" },
        { id: 3, image: "src/assets/Poster MnG.jpg" },
        { id: 4, image: "src/assets/Pormawa story (1).jpg" },
        { id: 5, image: "src/assets/pamflet 22.png" },
      ],
    },
    {
      title: "Sticker",
      items: [
        { id: 1, image: "src/assets/STICKER KI.png" },
        { id: 2, image: "src/assets/Sticker Gresik Sumpek.png" },
        { id: 3, image: "src/assets/Sticker DFG XVI.png" },
        { id: 4, image: "src/assets/Sticker Mataf 1.png" },
        { id: 5, image: "src/assets/Sticker Mataf 2.png" },
      ],
    },
    {
      title: "Instagram Feeds",
      items: [
        { id: 1, image: "src/assets/FEED PTI 4 COVER.jpg" },
        { id: 2, image: "src/assets/Feed KI.jpg" },
        { id: 3, image: "src/assets/feed 3.jpg" },
        { id: 4, image: "src/assets/mataf h3 (2).jpg" },
        { id: 5, image: "src/assets/Feed PV1.jpg" },
      ],
    },
    {
      title: "Instagram Feeds",
      items: [
        { id: 1, image: "src/assets/FEED PTI 4 COVER.jpg" },
        { id: 2, image: "src/assets/Feed KI.jpg" },
        { id: 3, image: "src/assets/feed 3.jpg" },
        { id: 4, image: "src/assets/mataf h3 (2).jpg" },
        { id: 5, image: "src/assets/Feed PV1.jpg" },
      ],
    },
    {
      title: "Instagram Feeds",
      items: [
        { id: 1, image: "src/assets/FEED PTI 4 COVER.jpg" },
        { id: 2, image: "src/assets/Feed KI.jpg" },
        { id: 3, image: "src/assets/feed 3.jpg" },
        { id: 4, image: "src/assets/mataf h3 (2).jpg" },
        { id: 5, image: "src/assets/Feed PV1.jpg" },
      ],
    },
  ];

  return (
    <div className="min-h-screen px-20 relative py-40">
      {/* TITLE */}
      <div className="text-center mb-5 mt-15 px-4">
        <BlurText
          text="My Work"
          delay={150}
          animateBy="words"
          direction="top"
          onAnimationComplete={handleAnimationComplete}
          className="text-white font-bold text-6xl justify-center"
        />

        {/* HR dengan glow ungu dan animasi expand */}
        <motion.div
          className="mx-auto my-1 h-0.5 bg-[#7a3cff] rounded-full border-0 shadow-[0_0_20px_#7a3cff88]"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 3, ease: "easeOut" }}
          style={{ width: "25%", transformOrigin: "center" }}
        />

        <BlurText
          text="Lastest Project"
          delay={150}
          animateBy="words"
          direction="top"
          onAnimationComplete={handleAnimationComplete}
          className="text-white/70 text-lg mt-1 justify-center"
        />
      </div>

      {/* LEFT ARROW */}
      {canScrollLeft && (
        <motion.button
          onClick={scrollLeft}
          className="
            absolute left-7 bottom-105 -translate-y-1/2 z-20
            bg-transparent border-none
            cursor-pointer select-none
          "
          whileHover={{ scale: 1.3, x: -4 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 250, damping: 18 }}
        >
          <FiChevronLeft className="text-white text-4xl drop-shadow-[0_0_18px_#7a3cff]" />
        </motion.button>
      )}

      {/* RIGHT ARROW */}
      {canScrollRight && (
        <motion.button
          onClick={scrollRight}
          className="
            absolute right-7 bottom-105 -translate-y-1/2 z-20
            bg-transparent border-none
            cursor-pointer select-none
          "
          whileHover={{ scale: 1.3, x: 4 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 250, damping: 18 }}
        >
          <FiChevronRight className="text-white text-4xl drop-shadow-[0_0_18px_#7a3cff]" />
        </motion.button>
      )}

      {/* ===== CAROUSEL LIST ===== */}
      <div
        ref={scrollRef}
        className="w-full flex gap-10 overflow-x-auto px-4 pb-6 scrollbar-hide scroll-smooth"
        style={{
          scrollbarWidth: "none",
          maskImage:
            "linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)",
        }}
      >
        {carouselData.map((section, idx) => (
          <motion.div
            key={idx}
            className="flex flex-col items-center shrink-0"
            ref={idx === 0 ? itemRef : null} // <--- Hanya item pertama yang diberi ref
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: idx * 0.2 }}
          >
            <Carousel
              items={section.items}
              baseWidth={200}
              autoplay
              loop
              pauseOnHover
            />
            <p className="text-white font-semibold mt-3">{section.title}</p>
            <a
              href="#"
              className="
                inline-flex items-center justify-center
                rounded-full px-10 py-2 my-2
                text-sm font-semibold text-white
                border border-[#7a3cff]
                shadow-[0_0_12px_#7a3cff80]
                hover:shadow-[0_0_25px_#7a3cffcc]
                transition-all duration-300
                hover:-translate-y-[3px]
                active:translate-y-px active:shadow-[0_2px_8px_rgba(122,60,255,0.5)]
                no-underline!
              "
            >
              View
            </a>
          </motion.div>
        ))}
      </div>
      <div className="w-full relative">
        <a
          href="#/projects"
          className="
            absolute -bottom-25 left-1/2 -translate-x-1/2 inline-block text-white font-semibold text-lg
            transition-all duration-300
            before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-0.5 before:bg-[#7a3cff] before:transition-all before:duration-300
            hover:before:w-full
            hover:text-[#7a3cff] hover:drop-shadow-[0_0_15px_#7a3cff]
            no-underline!
          "
        >
          View All My Project
        </a>
      </div>
    </div>
  );
}
