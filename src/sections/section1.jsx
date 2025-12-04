import { Row, Col } from "reactstrap";
import RotatingText from "../components/RotatingText";
import Squares from "../components/Squares";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { IoCodeSlash } from "react-icons/io5";
import { SiReact, SiAdobephotoshop, SiCoreldraw } from "react-icons/si";
import LogoLoop from "../components/LogoLoop";
import photoshop from "../assets/photoshop.png";
import coreldraw from "../assets/coreldraw.png";
import Foto from "../assets/Foto Danang.png";

export default function Section1() {
  const techLogos = [
    {
      node: (
        <div className="flex items-center gap-2 sm:gap-3">
          <SiReact className="text-white" />
          <span className="text-white text-sm sm:text-base md:text-xl font-semibold">React</span>
        </div>
      ),
      title: "React",
    },
    {
      node: (
        <div className="flex items-center gap-2 sm:gap-3">
          <SiAdobephotoshop className="text-white" />
          <span className="text-white text-sm sm:text-base md:text-xl font-semibold">Photoshop</span>
        </div>
      ),
      title: "Photoshop",
    },
    {
      node: (
        <div className="flex items-center gap-2 sm:gap-3">
          <SiCoreldraw className="text-white" />
          <span className="text-white text-sm sm:text-base md:text-xl font-semibold">Coreldraw</span>
        </div>
      ),
      title: "Coreldraw",
    },
  ];

  return (
    <div className="relative min-h-screen md:h-screen bg-[#181025] flex items-center overflow-hidden md:px-10">
      {/* Background Animation */}
      <Squares
        speed={0.5}
        squareSize={40}
        direction="diagonal"
        borderColor="#1e004f"
        hoverFillColor="#2e2c31"
        className="absolute inset-0 z-0"
      />

      <Row className="w-full mx-0 z-10 h-full px-4 md:px-5 pointer-events-none items-center">
        {/* LEFT CONTENT COLUMN - Full width on mobile */}
        <Col
          xs="12"
          md="6"
          className="flex flex-col items-center md:items-start justify-center text-center md:text-left pt-16 md:pt-0 px-2 sm:px-4"
        >
          <p className="text-xs sm:text-sm tracking-[0.2em] text-white/70 mb-3 sm:mb-2">
            DANANG HAEDAR GUSWANRINANDI
          </p>

          <h1 className="fw-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl fw-extrabold leading-tight text-white mb-4 sm:mb-3">
            HAY! I'M DANANG
          </h1>

          <div className="flex flex-col sm:flex-row items-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold gap-2 mb-6 justify-center md:justify-start w-full">
            <h1 className="text-white text-lg sm:text-xl fw-bold">I'M A</h1>

            <RotatingText
              texts={["Graphic Designer", "Web Developer", "UI/UX Enthusiast"]}
              mainClassName="px-3 py-1.5 sm:px-4 bg-[#2f1b47] text-white rounded-lg overflow-hidden transition-all text-base sm:text-lg md:text-xl lg:text-2xl"
              staggerFrom="last"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2000}
            />
          </div>

          <p className="sm:text-center md:text-left text-white/80 leading-relaxed max-w-2xl text-sm sm:text-base mb-6 sm:mb-4">
            Memiliki ketertarikan kuat pada desain grafis dan teknologi. Terampil
            menggunakan CorelDRAW dan Photoshop dalam membuat berbagai kebutuhan visual,
            serta berpengalaman berkolaborasi dalam proyek pengembangan sistem.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 mt-2 sm:mt-4 w-full">
            {/* Tombol Get in Touch */}
            <a
              href="#contact"
              className="
                px-15 py-2.5 sm:px-6 sm:py-3 
                rounded-full bg-[#2f1b47] text-white font-semibold 
                hover:bg-[#3c2760] transition-all duration-300 
                shadow-lg pointer-events-auto no-underline!
                text-sm sm:text-base w-full sm:w-auto text-center
                order-1
              "
            >
              Get in Touch
            </a>

            {/* Ikon Sosial */}
            <div className="flex items-center gap-3 pointer-events-auto order-2">
              {/* WhatsApp */}
              <a
                href="https://wa.me/6289502928258"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 
                  rounded-full bg-white/10 backdrop-blur-sm flex 
                  items-center justify-center text-green-400 hover:bg-white/20 
                  transition-all duration-300 text-lg sm:text-xl md:text-2xl
                "
              >
                <FaWhatsapp />
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com/danang_guswanrinandi"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 
                  rounded-full bg-white/10 backdrop-blur-sm flex 
                  items-center justify-center text-pink-400 hover:bg-white/20 
                  transition-all duration-300 text-lg sm:text-xl md:text-2xl
                "
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </Col>

        {/* RIGHT IMAGE COLUMN - Hidden on mobile, shown on medium screens and up */}
        <Col
          md="6"
          className="hidden md:flex justify-end items-end h-full pb-0 pointer-events-auto relative"
        >
          {/* Logo Photoshop */}
          <img
            src={photoshop}
            className="
              absolute bottom-85 right-85 w-40 opacity-80 
              transition-all duration-300
              -rotate-30
              hover:scale-110
              hover:brightness-150
              hover:drop-shadow-[0_0_12px_#0066ff]
              hover-stop-animation
              animate-[pulse-glow-blue_2.5s_ease-in-out_infinite]
            "
            alt="Photoshop Logo"
          />

          {/* Logo Coreldraw */}
          <img
            src={coreldraw}
            className="
              absolute top-80 right-10 w-35 opacity-80 
              transition-all duration-300
              rotate-10
              hover:scale-110
              hover:brightness-150
              hover:drop-shadow-[0_0_12px_#00ff88]
              hover-stop-animation
              animate-[pulse-glow-green_2.5s_ease-in-out_infinite]
            "
            alt="CorelDRAW Logo"
          />

          {/* Logo Coding */}
          <IoCodeSlash
            size={100}
            className="
              text-[#0066ff]
              absolute bottom-[110px] right-[315px] opacity-80
              transition-all duration-300
              -rotate-30
              hover:scale-110
              hover:brightness-150
              hover:drop-shadow-[0_0_12px_#0066ff]
              hover-stop-animation
              animate-[pulse-glow-blue_2.5s_ease-in-out_infinite]
            "
          />

          <img
            src={Foto}
            alt="Foto Saya"
            className="rounded-lg w-[300px] h-[500px] object-cover z-10 pointer-events-none md:mr-15"
          />
        </Col>

        {/* MOBILE IMAGE - Shown only on mobile */}
        <Col xs="12" className="md:hidden flex justify-center items-center mt-8">
          <div className="relative">
            <img
              src={Foto}
              alt="Foto Saya"
              className="rounded-lg w-48 h-100 mt-4 object-cover pointer-events-none "
            />
            {/* Mobile floating icons */}
            <img
              src={photoshop}
              className="
                absolute top-20 left-33 w-20 opacity-90 
                transition-all duration-300 -z-10
                -rotate-12
                animate-[pulse-glow-blue_2.5s_ease-in-out_infinite]
              "
              alt="Photoshop"
            />
            <img
              src={coreldraw}
              className="
                absolute bottom-30 right-35 w-20 sm:w-12 opacity-90 
                transition-all duration-300 -z-10
                rotate-12
                animate-[pulse-glow-green_2.5s_ease-in-out_infinite]
              "
              alt="CorelDRAW"
            />
            
            {/* Mobile coding icon */}
            <IoCodeSlash
              size={50}
              className="
                absolute bottom-15 -right-10 sm:-bottom-4 sm:-right-4
                text-[#0066ff] opacity-90 -z-10
                animate-[pulse-glow-blue_2.5s_ease-in-out_infinite]
                rotate-45
              "
            />
            {/* LOGO LOOP BAR */}
          </div>
            <div className="block md:hidden w-full h-12 bg-[#1b1327]/80 backdrop-blur-xl absolute bottom-0 left-0 px-0 mx-0 -z-1">
              <LogoLoop
                logos={techLogos}
                speed={90}
                direction="left"
                logoHeight={30}
                gap={120}
                hoverSpeed={0}
                scaleOnHover={false}
                fadeOut
                fadeOutColor="#000000"
              />
            </div>
        </Col>

        {/* LOGO LOOP BAR */}
        <div className="hidden md:block w-full h-15 bg-[#1b1327]/80 backdrop-blur-xl absolute bottom-0 left-0 px-0 mx-0 z-0">
          <LogoLoop
            logos={techLogos}
            speed={120}
            direction="left"
            logoHeight={40}
            gap={200}
            hoverSpeed={0}
            scaleOnHover
            fadeOut
            fadeOutColor="#000000"
            ariaLabel="Technology partners"
          />
        </div>
      </Row>
    </div>
  );
}