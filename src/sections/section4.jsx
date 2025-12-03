import { useRef, useState, useEffect } from "react";
import Carousel from "../components/Carousel";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { motion } from "framer-motion";
import BlurText from "../components/BlurText";
import bannermilad from "../assets/Banner digital milad.jpg";
import bannerjjs from "../assets/Banner JJS CMYK rev.jpg";
import pamflet from "../assets/pamflet desain.jpg";
import sticker1 from "../assets/Sticker Gresik Sumpek.png";
import feed1 from "../assets/FEED PTI 4 COVER.jpg";
import feed2 from "../assets/Feed KI.jpg";
import feed3 from "../assets/feed 3.jpg";
import feed4 from "../assets/mataf h3 (2).jpg";
import feed5 from "../assets/Feed PV1.jpg";
import logo1 from "../assets/Mataf 25 Horizon.png";
import logo2 from "../assets/DFG 17 Logo CL_Horizon.png";
import logo3 from "../assets/Logo podcast 2.png";
import logo4 from "../assets/lOGO ANGSA VER.png";
import logo5 from "../assets/logo dfg 16.png";
import bannerdigital from "../assets/Banner digital simus.jpg";
import bgdigital from "../assets/BG DIGITAL.jpg";
import bannerdigitalsimus from "../assets/Banner digitalSSSSS.jpg";
import pamflet2 from "../assets/HBD Danang.jpg";
import pamflet3 from "../assets/Poster MnG.jpg";
import pamflet4 from "../assets/Pormawa story (1).jpg"; 
import pamflet5 from "../assets/pamflet 22.png";
import sticker2 from "../assets/STICKER KI.png";
import sticker3 from "../assets/Sticker DFG XVI.png";
import sticker4 from "../assets/Sticker Mataf 1.png";
import sticker5 from "../assets/Sticker Mataf 2.png";



export default function Section4() {
  const scrollRef = useRef(null);
  const itemRef = useRef(null);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [itemWidth, setItemWidth] = useState(0);

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
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -scrollRef.current.clientWidth,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: scrollRef.current.clientWidth,
        behavior: "smooth",
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

  const carouselData = [
    {
      title: "Logo",
      items: [
        { id: 1, image: logo1 },
        { id: 2, image: logo2 },
        { id: 3, image: logo3 },
        { id: 4, image: logo4 },
        { id: 5, image: logo5 },
      ],
    },
    {
      title: "Banner",
      items: [
        { id: 1, image: bannerjjs },
        { id: 2, image: bannerdigitalsimus },
        { id: 3, image: bgdigital },
        { id: 4, image: bannermilad },
        { id: 5, image: bannerdigital },
      ],
    },
    {
      title: "Flyer",
      items: [
        { id: 1, image: pamflet },
        { id: 2, image: pamflet2 },
        { id: 3, image: pamflet3 },
        { id: 4, image: pamflet4 },
        { id: 5, image: pamflet5 },
      ],
    },
    {
      title: "Sticker",
      items: [
        { id: 1, image: sticker1 },
        { id: 2, image: sticker2 },
        { id: 3, image: sticker3 },
        { id: 4, image: sticker4 },
        { id: 5, image: sticker5 },
      ],
    },
    {
      title: "Instagram Feeds",
      items: [
        { id: 1, image: feed1 },
        { id: 2, image: feed2 },
        { id: 3, image: feed3 },
        { id: 4, image: feed4 },
        { id: 5, image: feed5 },
      ],
    },
    {
      title: "Instagram Feeds",
      items: [
        { id: 1, image: feed1 },
        { id: 2, image: feed2 },
        { id: 3, image: feed3 },
        { id: 4, image: feed4 },
        { id: 5, image: feed5 },
      ],
    },
    {
      title: "Instagram Feeds",
      items: [
        { id: 1, image: feed1 },
        { id: 2, image: feed2 },
        { id: 3, image: feed3 },
        { id: 4, image: feed4 },
        { id: 5, image: feed5 },
      ],
    },
  ];

  return (
    <div className="min-h-screen px-4 md:px-20 relative py-20 md:py-30">

      {/* TITLE */}
      <div className="text-center md:mb-12 mt-12 md:mt-15 px-4">
        <BlurText
          text="My Work"
          delay={150}
          animateBy="words"
          direction="top"
          className="text-white font-bold text-4xl md:text-5xl lg:text-6xl justify-center"
        />

        <motion.div
          className="mx-auto my-3 md:my-1 h-0.5 bg-[#7a3cff] rounded-full shadow-[0_0_20px_#7a3cff88]"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 3, ease: "easeOut" }}
          style={{ width: "20%", transformOrigin: "center" }}
        />

        <BlurText
          text="Lastest Project"
          delay={150}
          animateBy="words"
          direction="top"
          className="text-white/70 text-base md:text-lg mt-2 md:mt-1 justify-center"
        />
      </div>

      {/* ARROWS (DESKTOP ONLY) */}
      <div className="hidden md:block">
        {canScrollLeft && (
          <motion.button
            onClick={scrollLeft}
            className="absolute left-7 bottom-87 -translate-y-1/2 z-20"
            whileHover={{ scale: 1.3, x: -4 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 250, damping: 18 }}
          >
            <FiChevronLeft className="text-white text-4xl drop-shadow-[0_0_18px_#7a3cff]" />
          </motion.button>
        )}

        {canScrollRight && (
          <motion.button
            onClick={scrollRight}
            className="absolute right-7 bottom-87 -translate-y-1/2 z-20"
            whileHover={{ scale: 1.3, x: 4 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 250, damping: 18 }}
          >
            <FiChevronRight className="text-white text-4xl drop-shadow-[0_0_18px_#7a3cff]" />
          </motion.button>
        )}
      </div>

      {/* CAROUSEL LIST */}
      <div
        ref={scrollRef}
        className="w-full flex gap-6 md:gap-15 overflow-x-auto px-10 md:px-10 pb-6 scrollbar-hide scroll-smooth"
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
            className="flex flex-col items-center shrink-0 w-64 md:w-auto"
            ref={idx === 0 ? itemRef : null}
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
              className="w-30 md:w-auto"
            />

            <p className="text-white font-semibold mt-3 text-sm md:text-base">
              {section.title}
            </p>

            <a
              href="#"
              className="
                inline-flex items-center justify-center
                rounded-full px-6 md:px-10 py-1.5 md:py-2 my-2
                text-xs md:text-sm font-semibold text-white
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

      {/* VIEW ALL BUTTON */}
      <div className="w-full relative mt-8 md:mt-0">
        <a
          href="#/projects"
          className="
            relative md:absolute -bottom-20 md:-bottom-25 left-1/2 -translate-x-1/2 
            inline-block text-white font-semibold text-base md:text-lg
            transition-all duration-300 text-center
            before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-0.5 
            before:bg-[#7a3cff] before:transition-all before:duration-300
            hover:before:w-full
            hover:text-[#7a3cff] hover:drop-shadow-[0_0_15px_#7a3cff]
            no-underline! px-4
          "
        >
          View All My Project
        </a>
      </div>
    </div>
  );
}
