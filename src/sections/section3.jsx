import { Container, Row, Col } from "reactstrap";
import CountUp from "../components/CountUp";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Section3() {
    const [showIcons, setShowIcons] = useState(false);
  return (
    <div className="h-screen flex items-center justify-center text-white relative z-10 px-10">
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
    p-10 overflow-hidden hologram-card
  "
>
      
      <Container>
        {/* ===== TITLE SECTION ===== */}
        <Row className="text-center mb-12">
          <Col className="z-100">
            <p className="text-xl italic font-light tracking-wide text-white/60">
              My Favorite Tool
            </p>
            <p className="text-5xl italic font-light text-white/80 mt-1">
              Eksploring Tools
            </p>
            <h1 className="text-5xl fw-bold mt-2">
              Behind My Design
            </h1>
          </Col>
        </Row>

        {/* ===== CARD SECTION ===== */}
        <Row className="items-center mx-5">
          
          {/* CORELDRAW */}
          <Col className="flex flex-col items-center">
            <div className="w-40 h-60 bg-white/10 backdrop-blur-lg 
                            rounded-2xl border border-white/10 
                            flex flex-col items-center justify-center
                            shadow-[0_8px_30px_rgba(0,0,0,0.25)]
                            ">
              <img 
                src="public/assets/coreldraw.png" 
                className="w-auto h-18 mb-4 object-contain hover:scale-150
                  hover:brightness-150
                  hover:drop-shadow-[0_0_12px_#00ff88] transition-all
                  duration-300
                  "
                alt="Corel icon"
              />
              <div className="flex">  
                <CountUp from={0} to={95} duration={1.5} className="text-4xl font-semibold" />
                <span className="ml-1 text-4xl text-white fw-bold">%</span>
              </div>
            </div>
            <p className="text-white/70 text-sm mt-3">CorelDRAW</p>
          </Col>

          {/* PHOTOSHOP */}
          <Col className="flex flex-col items-center">
            <div className="w-40 h-60 bg-white/10 backdrop-blur-lg 
                            rounded-2xl border border-white/10 
                            flex flex-col items-center justify-center
                            duration-300 
                            shadow-[0_8px_30px_rgba(0,0,0,0.25)]
                            ">
              <img 
                src="public/assets/photoshop.png" 
                className="w-auto h-18 mb-4 object-contain hover:scale-150
                  hover:brightness-150
                  hover:drop-shadow-[0_0_12px_#0066ff] transition-all
                  duration-300
                  "
                alt="Photoshop icon"
              />
              <div className="flex">
                <CountUp from={0} to={70} duration={1.5} className="text-4xl font-semibold" />
                <span className="ml-1 text-4xl text-white fw-bold">%</span>
              </div>
            </div>
            <p className="text-white/70 text-sm mt-3">Photoshop</p>
          </Col>

          {/* FIGMA */}
          <Col className="flex flex-col items-center">
            <div className="w-40 h-62 bg-white/10 backdrop-blur-lg 
                            rounded-2xl border border-white/10 
                            flex flex-col items-center justify-center
                            shadow-[0_8px_30px_rgba(0,0,0,0.25)]">
              <img 
                src="public/assets/figma.png" 
                className="w-auto h-22 mb-3 object-contain hover:scale-150
                  hover:brightness-120
                  hover:drop-shadow-[0_0_12px_#FF7262] transition-all
                  duration-300
                  "
                alt="Figma icon"
              />
              <div className="flex">  
                <CountUp from={0} to={50} duration={1.5} className="text-4xl font-semibold" />
                <span className="ml-1 text-4xl text-white fw-bold">%</span>
              </div>
            </div>
            <p className="text-white/70 text-sm mt-3">Figma</p>
          </Col>

          {/* WEBSITE DESIGN - FIXED VERSION */}
            <Col className="flex flex-col items-center">

          <div
            className="
              w-40 h-60 bg-white/10 backdrop-blur-lg 
              rounded-2xl border border-white/10 
              flex flex-col items-center justify-center 
              relative overflow-visible
              shadow-[0_8px_30px_rgba(0,0,0,0.25)]
            "
          >     

            {/* ===== ICONS + LABEL YANG MUNCUL SAAT HOVER ===== */}
            <div className="absolute -top-20 flex flex-col items-center gap-2 pointer-events-none">     

              {/* ICON ROW */}
              <div className="flex gap-14">
                {/* React Icon */}
                
                <FaReact
                  className={`
                    text-5xl text-[#61DBFB]
                    drop-shadow-[0_0_10px_#61DBFB90]
                    transition-all duration-500 ease-out
                    ${showIcons
                      ? "opacity-100 translate-y-0 scale-100 blur-0"
                      : "opacity-0 translate-y-4 scale-50 blur-sm"}
                  `}
                  style={{ transitionDelay: "80ms" }}
                />      

                {/* Tailwind Icon */}
                <SiTailwindcss
                  className={`
                    text-5xl text-[#38bdf8]
                    drop-shadow-[0_0_10px_#38bdf890]
                    transition-all duration-500 ease-out
                    ${showIcons
                      ? "opacity-100 translate-y-0 scale-100 blur-0"
                      : "opacity-0 translate-y-4 scale-50 blur-sm"}
                  `}
                  style={{ transitionDelay: "160ms" }}
                />
              </div>        

              {/* LABEL ROW */}
              <div className="flex gap-8">
                {/* React Label */}
                <span
                  className={`
                    text-sm text-white/70 font-light
                    transition-all duration-500 ml-5
                    ${showIcons
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-2"}
                  `}
                  style={{ transitionDelay: "200ms" }}
                >
                  React.js
                </span>     

                {/* Tailwind Label */}
                <span
                  className={`
                    text-sm text-white/70 font-light
                    transition-all duration-500 ml-2
                    ${showIcons
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-2"}
                  `}
                  style={{ transitionDelay: "260ms" }}
                >
                  TailwindCSS
                </span>
              </div>        

            </div>      

            {/* ===== ICON UTAMA ===== */}
            <img
                onMouseEnter={() => setShowIcons(true)}
                onMouseLeave={() => setShowIcons(false)}
                className="w-auto h-22 mb-3 object-containtransition-all duration-300
                hover:scale-150 hover:brightness-125
                hover:drop-shadow-[0_0_15px_#0066ff]"   
                src="public/assets/Visual.png" 
                alt="Viscode Icon" />      

            {/* PERCENTAGE */}
            <div className="flex">
              <CountUp from={0} to={70} duration={1.5} className="text-4xl font-semibold" />
              <span className="ml-1 text-4xl text-white fw-bold">%</span>
            </div>
          </div>        

          {/* LABEL */}
          <p className="text-white/70 text-sm mt-3">Website Design</p>      

        </Col>

        </Row>
      </Container>
      
      </motion.div>
      <div className="
        w-full h-24
        bg-linear-to-t from-[#0d0915]/80 via-[#1b1327]/30 to-transparent
        backdrop-blur-2xl
        absolute bottom-0 left-0
        border-t border-white/10
        flex justify-center items-center
        pointer-events-none
      ">
        <button
          onClick={() =>
            document.getElementById("section4")?.scrollIntoView({ behavior: "smooth" })
          }
          className="
            pointer-events-auto
            w-12 h-12
            rounded-full
            bg-[#5e2eff]/40
            backdrop-blur-xl
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
            className="w-5 h-5 text-white drop-shadow-[0_0_6px_#c8b6ff]"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

    </div>
  );
}