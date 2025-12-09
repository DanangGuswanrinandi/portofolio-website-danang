import { Container, Row, Col } from "reactstrap";
import SpotlightCard from "../components/SpotlightCard";
import { RiFilePaperFill } from "react-icons/ri";
import { IoIosBrowsers } from "react-icons/io";
import { PiDribbbleLogoFill } from "react-icons/pi";
import { motion } from "framer-motion";

export default function Section6() {
  return (
    <div className="min-h-screen flex justify-center items-center py-16 md:py-0">
      <Container>
        {/* ===== TITLE SECTION ===== */}
        <Row className="text-start mb-8 md:mb-10 px-3">
          <Col>
            <p className="text-lg md:text-xl italic font-light tracking-wide text-white/60">
              Service
            </p>
            <p className="text-3xl md:text-4xl lg:text-5xl font-light text-white/80 mt-1 leading-tight">
              <span className="italic text-[#9260ff]">Service</span>{" "}
              <span className="font-bold">I Provide</span>
            </p>
            <motion.div
              className="my-3 md:my-1 h-0.5 bg-[#7a3cff] rounded-full border-0 shadow-[0_0_20px_#7a3cff88]"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 3, ease: "easeOut" }}
              style={{ width: "30%", transformOrigin: "left" }}
            />
          </Col>
        </Row>

        {/* ===== CARD SECTION ===== */}
        <Row className="justify-center md:gap-0">
          <Col xs="12" md="4" className="flex justify-center mb-6 md:mb-8">
            <SpotlightCard
              className="w-full max-w-[280px] h-[280px] md:max-w-[350px] md:h-[230px] flex flex-col justify-center px-4 md:px-6 gap-2.5"
              spotlightColor="rgba(132, 0, 255, 0.45) "
            >
              {/* ICON */}
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#5e2eff] flex justify-center items-center mb-2 md:mb-2 shrink-0">
                <RiFilePaperFill className="text-white text-xl md:text-2xl" />
              </div>

              {/* TITLE */}
              <h2 className="text-white font-semibold text-lg md:text-xl mb-1">Flyer</h2>

              {/* DESCRIPTION */}
              <p className="text-white/60 text-xs md:text-sm leading-snug mb-3 md:mb-4">
                Membantu kebutuhan promosi bisnismu melalui desain flyer yang kreatif, informatif, dan sesuai identitas brand agar pesanmu tersampaikan dengan efektif
              </p>

              {/* LEARN MORE */}
              <a
                href="#"
                className="group relative flex items-center rounded-full bg-[#7a3cff] p-1 pr-1 no-underline! transition-all duration-300 hover:bg-[#9146ff] w-fit"
              >
                <span className="bg-[#2f1b47] text-white font-semibold px-4 md:px-5 py-1.5 md:py-2 rounded-full transition-all duration-300 group-hover:bg-[#3c2760] text-sm md:text-base">
                  Contact Me
                </span>

                <span className="ml-2 w-6 h-6 md:w-8 md:h-8 rounded-full bg-white flex items-center justify-center text-black transition-all duration-300 group-hover:translate-x-1 mr-1 text-sm">
                  →
                </span>
              </a>
            </SpotlightCard>
          </Col>

          <Col xs="12" md="4" className="flex justify-center mb-6 md:mb-8">
            <SpotlightCard
              className="w-full max-w-[280px] h-[280px] md:max-w-[350px] md:h-[230px] flex flex-col justify-center px-4 md:px-6 gap-2.5"
              spotlightColor="rgba(132, 0, 255, 0.45)"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#5e2eff] flex justify-center items-center mb-2 md:mb-2 shrink-0">
                <IoIosBrowsers className="text-white text-xl md:text-2xl" />
              </div>
              <h2 className="text-white font-semibold text-lg md:text-xl mb-1">Sosial Media</h2>
              <p className="text-white/60 text-xs md:text-sm leading-snug mb-3 md:mb-4">
                Menyediakan layanan desain konten sosial media seperti Feed Instagram dan Story Instagram, dengan visual yang konsisten dan sesuai brand untuk meningkatkan kepercayaan serta daya tarik audiens.
              </p>
              <a
                href="#"
                className="group relative flex items-center rounded-full bg-[#7a3cff] p-1 pr-1 no-underline! transition-all duration-300 hover:bg-[#9146ff] w-fit"
              >
                <span className="bg-[#2f1b47] text-white font-semibold px-4 md:px-5 py-1.5 md:py-2 rounded-full transition-all duration-300 group-hover:bg-[#3c2760] text-sm md:text-base">
                  Contact Me
                </span>

                <span className="ml-2 w-6 h-6 md:w-8 md:h-8 rounded-full bg-white flex items-center justify-center text-black transition-all duration-300 group-hover:translate-x-1 mr-1 text-sm">
                  →
                </span>
              </a>
            </SpotlightCard>
          </Col>

          <Col xs="12" md="4" className="flex justify-center">
            <SpotlightCard
              className="w-full max-w-[280px] h-[280px] md:max-w-[350px] md:h-[230px] flex flex-col justify-center px-4 md:px-6 gap-2.5"
              spotlightColor="rgba(132, 0, 255, 0.45)"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#5e2eff] flex justify-center items-center mb-2 md:mb-2 shrink-0">
                <PiDribbbleLogoFill className="text-white text-xl md:text-2xl" />
              </div>
              <h2 className="text-white font-semibold text-lg md:text-xl mb-1">Logo</h2>
              <p className="text-white/60 text-xs md:text-sm leading-snug mb-3 md:mb-4">
                Menciptakan desain logo yang kuat dan mudah dikenali untuk membangun identitas brand yang profesional dan berkesan.
              </p>
              <a
                href="#"
                className="group relative flex items-center rounded-full bg-[#7a3cff] p-1 pr-1 no-underline! transition-all duration-300 hover:bg-[#9146ff] w-fit"
              >
                <span className="bg-[#2f1b47] text-white font-semibold px-4 md:px-5 py-1.5 md:py-2 rounded-full transition-all duration-300 group-hover:bg-[#3c2760] text-sm md:text-base">
                  Contact Me
                </span>

                <span className="ml-2 w-6 h-6 md:w-8 md:h-8 rounded-full bg-white flex items-center justify-center text-black transition-all duration-300 group-hover:translate-x-1 mr-1 text-sm">
                  →
                </span>
              </a>
            </SpotlightCard>
          </Col>
        </Row>
      </Container>
    </div>
  );
}