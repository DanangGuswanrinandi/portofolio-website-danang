import { Container, Row, Col } from "reactstrap";
import CountUp from "../components/CountUp";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { useState } from "react";
import { motion } from "framer-motion";
import coreldraw from "../assets/coreldraw.png";
import photoshop from "../assets/photoshop.png";
import figma from "../assets/figma.png";
import visual from "../assets/Visual.png";

export default function Section3() {
  const [showIcons, setShowIcons] = useState(false);

  return (
    <div
      className="
        min-h-screen md:h-screen 
        flex items-center justify-center 
        text-white relative z-10 
        px-4 md:px-10 
        py-16 md:py-0
      "
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.85, filter: "blur(14px)" }}
        whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true }}
        className="
          relative w-full max-w-[1100px] mx-auto
          bg-white/10 backdrop-blur-2xl
          border border-white/20 
          rounded-3xl shadow-[0_0_40px_#00000050]
          p-6 md:p-10 
          overflow-hidden hologram-card
          mb-5
        "
      >
        <Container>
          {/* TITLE */}
          <Row className="text-center mb-8 md:mb-12">
            <Col className="z-100">
              <p className="text-lg md:text-xl italic font-light tracking-wide text-white/60">
                My Favorite Tool
              </p>

              <p className="text-3xl md:text-5xl italic font-light text-white/80 mt-1">
                Eksploring Tools
              </p>

              <h1 className="text-3xl md:text-5xl font-bold mt-2">
                Behind My Design
              </h1>
            </Col>
          </Row>

          {/* ===== CARD SECTION - GRID 2x2 MOBILE ===== */}
          <div className="
            grid grid-cols-2 gap-4 
            md:flex md:flex-row md:items-center md:justify-between
            md:gap-0 lg:px-20 md:px-0
          ">
            {/* ========= CORELDRAW ========= */}
            <div className="flex flex-col items-center">
              <div
                className="
                  w-full max-w-40 md:w-40 
                  h-44 md:h-60 
                  bg-white/10 backdrop-blur-lg 
                  rounded-2xl border border-white/10 
                  flex flex-col items-center justify-center
                  shadow-[0_8px_30px_rgba(0,0,0,0.25)]
                  hover:scale-105 transition-transform duration-300
                "
              >
                <img
                  src={coreldraw}
                  className="
                    w-auto h-12 md:h-18 mb-3 md:mb-4 object-contain 
                    hover:scale-150 hover:brightness-150
                    hover:drop-shadow-[0_0_12px_#00ff88]
                    transition-all duration-300
                  "
                />
                <div className="flex">
                  <CountUp from={0} to={95} duration={1.5} className="text-2xl md:text-4xl font-semibold" />
                  <span className="ml-1 text-2xl md:text-4xl text-white font-bold">%</span>
                </div>
              </div>
              <p className="text-white/70 text-xs md:text-sm mt-2 md:mt-3">CorelDRAW</p>
            </div>

            {/* ========= PHOTOSHOP ========= */}
            <div className="flex flex-col items-center">
              <div
                className="
                  w-full max-w-40 md:w-40 
                  h-44 md:h-60 
                  bg-white/10 backdrop-blur-lg 
                  rounded-2xl border border-white/10 
                  flex flex-col items-center justify-center
                  shadow-[0_8px_30px_rgba(0,0,0,0.25)]
                  hover:scale-105 transition-transform duration-300
                "
              >
                <img
                  src={photoshop}
                  className="
                    w-auto h-12 md:h-18 mb-3 md:mb-4 object-contain 
                    hover:scale-150 hover:brightness-150
                    hover:drop-shadow-[0_0_12px_#0066ff]
                    transition-all duration-300
                  "
                />
                <div className="flex">
                  <CountUp from={0} to={70} duration={1.5} className="text-2xl md:text-4xl font-semibold" />
                  <span className="ml-1 text-2xl md:text-4xl text-white font-bold">%</span>
                </div>
              </div>
              <p className="text-white/70 text-xs md:text-sm mt-2 md:mt-3">Photoshop</p>
            </div>

            {/* ========= FIGMA ========= */}
            <div className="flex flex-col items-center">
              <div
                className="
                  w-full max-w-40 md:w-40 
                  h-44 md:h-60 
                  bg-white/10 backdrop-blur-lg 
                  rounded-2xl border border-white/10 
                  flex flex-col items-center justify-center
                  shadow-[0_8px_30px_rgba(0,0,0,0.25)]
                  hover:scale-105 transition-transform duration-300
                "
              >
                <img
                  src={figma}
                  className="
                    w-auto h-14 md:h-22 mb-2 md:mb-3 object-contain
                    hover:scale-150 hover:brightness-120
                    hover:drop-shadow-[0_0_12px_#FF7262]
                    transition-all duration-300
                  "
                />
                <div className="flex">
                  <CountUp from={0} to={50} duration={1.5} className="text-2xl md:text-4xl font-semibold" />
                  <span className="ml-1 text-2xl md:text-4xl text-white font-bold">%</span>
                </div>
              </div>
              <p className="text-white/70 text-xs md:text-sm mt-2 md:mt-3">Figma</p>
            </div>

            {/* ========= WEBSITE DESIGN ========= */}
            <div className="flex flex-col items-center">
              <div
                className="
                  w-full max-w-40 md:w-40 
                  h-44 md:h-60 
                  bg-white/10 backdrop-blur-lg 
                  rounded-2xl border border-white/10 
                  flex flex-col items-center justify-center
                  relative overflow-visible
                  shadow-[0_8px_30px_rgba(0,0,0,0.25)]
                  hover:scale-105 transition-transform duration-300
                "
              >
                {/* ICONS POPUP - Only show on desktop */}
                <div className="md:block absolute -top-20 flex flex-col items-center gap-2 pointer-events-none">
                  <div className="flex gap-14">
                    <FaReact
                      className={`
                        text-5xl text-[#61DBFB]
                        drop-shadow-[0_0_10px_#61DBFB90]
                        transition-all duration-500
                        ${showIcons ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-4 scale-50"}
                      `}
                      style={{ transitionDelay: "80ms" }}
                    />
                    <SiTailwindcss
                      className={`
                        text-5xl text-[#38bdf8]
                        drop-shadow-[0_0_10px_#38bdf890]
                        transition-all duration-500
                        ${showIcons ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-4 scale-50"}
                      `}
                      style={{ transitionDelay: "160ms" }}
                    />
                  </div>

                  <div className="flex gap-8">
                    <span
                      className={`
                        text-sm text-white/70 
                        transition-all duration-500
                        ${showIcons ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}
                      `}
                      style={{ transitionDelay: "200ms" }}
                    >
                      React.js
                    </span>

                    <span
                      className={`
                        text-sm text-white/70 
                        transition-all duration-500
                        ${showIcons ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}
                      `}
                      style={{ transitionDelay: "260ms" }}
                    >
                      TailwindCSS
                    </span>
                  </div>
                </div>

                {/* MAIN ICON */}
                <img
                  onMouseEnter={() => setShowIcons(true)}
                  onMouseLeave={() => setShowIcons(false)}
                  className="
                    w-auto h-14 md:h-22 mb-3 md:mb-3 object-contain
                    transition-all duration-300
                    hover:scale-125 md:hover:scale-125 hover:brightness-125
                    hover:drop-shadow-[0_0_15px_#0066ff]
                  "
                  src={visual}
                />

                {/* PERCENT */}
                <div className="flex">
                  <CountUp from={0} to={70} duration={1.5} className="text-2xl md:text-4xl font-semibold" />
                  <span className="ml-1 text-2xl md:text-4xl text-white font-bold">%</span>
                </div>
              </div>

              <p className="text-white/70 text-xs md:text-sm mt-2 md:mt-3">Website Design</p>
            </div>
          </div>
        </Container>
      </motion.div>

      {/* ===== BOTTOM GRADIENT SCROLL BUTTON ===== */}
      <div
        className="
          w-full h-20 md:h-24 
          bg-linear-to-t from-[#0d0915]/80 via-[#1b1327]/30 to-transparent
          backdrop-blur-2xl
          absolute bottom-0 left-0
          border-t border-white/10
          flex justify-center items-center
          pointer-events-none
        "
      >
        <a
          onClick={() =>
            document.getElementById("section4")?.scrollIntoView({
              behavior: "smooth",
            })
          }
          className="
            pointer-events-auto
            w-10 h-10 md:w-12 md:h-12
            rounded-full
            bg-[#5e2eff]/40 backdrop-blur-xl
            border border-[#7a54ff70]
            flex items-center justify-center
            shadow-[0_0_12px_#7a54ff60]
            hover:shadow-[0_0_20px_#a07bff]
            hover:bg-[#7a54ff]/70
            hover:scale-110
            transition-all duration-300
            animate-bounce-slow
          "
        >
          <svg
            className="w-4 h-4 md:w-5 md:h-5 text-white drop-shadow-[0_0_6px_#c8b6ff]"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </a>
      </div>
    </div>
  );
}