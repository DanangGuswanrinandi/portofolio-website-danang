import { Row, Col } from "reactstrap";
import RotatingText from "../components/RotatingText";
import Squares from "../components/Squares";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { IoCodeSlash } from "react-icons/io5";
import { SiReact, SiAdobephotoshop, SiCoreldraw } from "react-icons/si";
import LogoLoop from "../components/LogoLoop";

export default function Section1() {
  const techLogos = [
  { node: (
      <div className="flex items-center gap-3 ">
        <SiReact className="text-white" />
        <span className="text-white text-xl font-semibold ">React</span>
      </div>
    ), title: "React" },
  { node: (
      <div className="flex items-center gap-3 ">
        <SiAdobephotoshop className="text-white" />
        <span className="text-white text-xl font-semibold ">Photoshop</span>
      </div>
    ), title: "Photoshop"},
  { node: (
      <div className="flex items-center gap-3 ">
        <SiCoreldraw className="text-white" />
        <span className="text-white text-xl font-semibold ">Coreldraw</span>
      </div>
    ), title: "Coreldraw"},
];

  return (
    <div className="relative h-screen bg-[#181025] flex items-center overflow-hidden ">
      
      {/* Background Animation */}
      <Squares 
          speed={0.5}
          squareSize={40}
          direction="diagonal"
          borderColor="#1e004f"
          hoverFillColor="#2e2c31"
          className="absolute inset-0 z-0"
        />

        <Row className="w-full mx-5 z-10 h-full px-5 pointer-events-none">
          <Col
            md="6"
            className="flex flex-col items-center md:items-start justify-center text-center md:text-left p-8"
          >
            <p className="text-sm tracking-widest text-white/70">
              DANANG HAEDAR GUSWANRINANDI
            </p>

            <h1 className="fw-bold sm:text-7xl md:text-8xl font-extrabold leading-tight text-white">
              HAY! I'M DANANG
            </h1>

            <div className="flex items-center text-3xl sm:text-4xl font-bold gap-2 mb-3">
              <h1 className="text-white">I'M A</h1>

              <RotatingText
                texts={['Graphic Designer', 'Web Developer', 'UI/UX Enthusiast']}
                mainClassName="px-3 py-2 sm:px-4 bg-[#2f1b47] text-white rounded-lg overflow-hidden transition-all"
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

            <p className="text-left text-white/80 leading-relaxed max-w-2xl">
              Memiliki ketertarikan kuat pada desain grafis dan teknologi. Terampil
              menggunakan CorelDRAW dan Photoshop dalam membuat berbagai kebutuhan visual,
              serta berpengalaman berkolaborasi dalam proyek pengembangan sistem.
            </p>

            <div className="flex items-center gap-4 mt-6">

              {/* Tombol Get in Touch */}
              <a
                href="#contact"
                className="px-6 py-3 rounded-full bg-[#2f1b47] text-white font-semibold 
                           hover:bg-[#3c2760] transition-all duration-300 shadow-lg pointer-events-auto no-underline!"
              >
                Get in Touch
              </a>

              {/* Ikon Sosial */}
              <div className="flex items-center gap-3 pointer-events-auto">

                {/* WhatsApp */}
                <a
                  href="https://wa.me/6289502892865"
                  target="_blank"
                  className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex 
                             items-center justify-center text-green-400 hover:bg-white/20 
                             transition-all duration-300 text-2xl"
                >
                  <FaWhatsapp />
                </a>

                {/* Instagram */}
                <a
                  href="https://instagram.com/danang_guswanrinandi"
                  target="_blank"
                  className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex 
                             items-center justify-center text-pink-400 hover:bg-white/20 
                             transition-all duration-300 text-2xl"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>
          </Col>

          <Col md="6" className="hidden md:flex justify-end items-end h-full pb-0 pointer-events-auto">
          {/* Logo Photoshop */}
              <img
                src="./src/assets/photoshop.png"
                className="
                  absolute bottom-85 right-100 w-40 opacity-80 
                  transition-all duration-300
                  -rotate-30

                  hover:scale-110
                  hover:brightness-150
                  hover:drop-shadow-[0_0_12px_#0066ff]

                  hover-stop-animation

                  animate-[pulse-glow-blue_2.5s_ease-in-out_infinite]
                "
              />
            
             {/* Logo Coreldraw*/}
              <img
                src="src/assets/coreldraw.png"
                className="
                  absolute top-80 right-20 w-35 opacity-80 
                  transition-all duration-300
                  rotate-10
                
                  hover:scale-110
                  hover:brightness-150
                  hover:drop-shadow-[0_0_12px_#00ff88]
                
                  hover-stop-animation
                
                  animate-[pulse-glow-green_2.5s_ease-in-out_infinite]
                "
              />
              {/* Logo Coding */}
              <IoCodeSlash
                size={100}  // ukuran icon
                className="
                  text-[#0066ff]
                  absolute bottom-[110px] right-[360px] opacity-80
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
              src="src/assets/Foto Danang.png"
              alt="Foto Saya"
              className="rounded-lg w-md-full h-auto max-h-[80vh] object-cover z-10 pointer-events-none"
            />
          </Col>
          <div className="w-full h-18 bg-[#1b1327]/80 backdrop-blur-xl absolute bottom-0 left-0 z-1 pointer-events-auto px-0 mx-0">
            <LogoLoop
              logos={techLogos}
              speed={120}
              direction="left"
              logoHeight={45}
              gap={500}
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
