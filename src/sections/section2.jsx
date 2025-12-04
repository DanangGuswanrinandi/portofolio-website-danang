import { Container, Row, Col } from "reactstrap";
import ElectricBorder from "../components/ElectricBorder";
import SplitText from "../components/SplitText";
import { motion } from "framer-motion";
import CountUp from "../components/CountUp";
import Foto2 from "../assets/IMG_1560.JPG";

export default function Section2() {
  return (
    <div
      className="
        relative 
        min-h-screen 
        flex md:items-center justify-center 
        px-6 sm:px-10
      "
    >
      <Container fluid>
        <Row className="w-full m-0 p-0 flex md:items-center">

          {/* LEFT */}
          <Col
            md="6"
            className="
              flex justify-center items-center 
              mb-10 md:mb-0
            "
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 60 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.3 }}
              className="w-full flex justify-center mt-10 md:mt-0"
            >
              <ElectricBorder
                color="#7a3cff"
                speed={0.7}
                chaos={0.9}
                thickness={3}
                className="rounded-2xl shadow-[0_0_20px_#7a3cff50]"
              >
                <div
                  className="
                    bg-white/5 backdrop-blur-xl 
                    transparent-corner-border
                    overflow-hidden
                    w-[250px]
                    md:w-full
                    h-auto
                    flex items-center justify-center
                  "
                >
                  <img
                    src={Foto2}
                    alt="About Me Foto"
                    className="
                      w-[300px] h-[200px]
                      md:w-150 md:h-120
                      rounded-xl 
                      object-cover
                      
                    "
                    style={{
                      WebkitMaskImage: `
                        linear-gradient(to right,
                          transparent 0%,
                          white 20%,
                          white 80%,
                          transparent 100%
                        ),
                        linear-gradient(to bottom,
                          transparent 0%,
                          white 20%,
                          white 80%,
                          transparent 100%
                        )
                      `,
                      maskComposite: 'intersect',
                      WebkitMaskComposite: 'source-in',
                    }}
                  />
                </div>
              </ElectricBorder>
            </motion.div>
          </Col>

          {/* RIGHT */}
          <Col
            md="6"
            className="
              flex flex-col 
              items-center md:items-start 
              justify-center 
              text-center md:text-left 
              px-4 sm:px-6 md:px-8
            "
          >
            <p className="text-sm tracking-widest text-white/70 uppercase">
              About Me
            </p>

            <div className="leading-tight mt-1">
              <SplitText
                text="SKUY!.."
                className="
                  fw-bold 
                  text-4xl sm:text-5xl md:text-5xl 
                  font-extrabold text-white
                "
                delay={80}
                duration={0.6}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                rootMargin="-50px"
              />

              <SplitText
                text="Kenalan Dulu"
                className="
                  italic fw-bold 
                  text-4xl sm:text-5xl md:text-5xl 
                  font-extrabold text-white
                "
                delay={160}
                duration={0.7}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 60 }}
                to={{ opacity: 1, y: 0 }}
                rootMargin="-50px"
              />
            </div>

            <p className="text-white/80 leading-relaxed max-w-2xl mt-3 md:text-start sm:text-center">
              Aku Danang, 21 tahun, mahasiswa Teknik Informatika di Universitas Muhammadiyah 
              Gresik. Menyukai dunia desain seperti flyer, banner, logo menggunakan CorelDRAW 
              & Photoshop. Juga tertarik pada web dev dengan HTML, CSS, React.js. Senang belajar 
              hal baru dan mengembangkan diri di dunia desain & teknologi.
            </p>

            {/* COUNTUP CARD WRAP */}
            <div className="mt-6 mb-4 flex flex-wrap gap-4 sm:gap-6 justify-center md:justify-start">
              
              {/* DESIGN PROJECT */}
              <div
                className="
                  w-32 sm:w-36 h-24 
                  bg-white/10 backdrop-blur-lg 
                  rounded-xl border border-white/10
                  flex flex-col items-center justify-center pt-2
                  shadow-[0_0_25px_#7a3cff40]
                "
              >
                <div className="flex items-center">
                  <CountUp
                    from={0}
                    to={133}
                    duration={1.8}
                    className="text-3xl sm:text-4xl font-medium text-white"
                  />
                  <span className="text-3xl sm:text-4xl text-[#a684ff] ml-1">+</span>
                </div>

                <p className="text-white/70 text-xs sm:text-sm mt-1 tracking-wide">
                  Design Projects
                </p>
              </div>

              {/* WEB PROJECT */}
              <div
                className="
                  w-32 sm:w-36 h-24  
                  bg-white/10 backdrop-blur-lg 
                  rounded-xl border border-white/10
                  flex flex-col items-center justify-center pt-2
                  shadow-[0_0_25px_#7a3cff40]
                "
              >
                <div className="flex items-center">
                  <CountUp
                    from={0}
                    to={3}
                    duration={1.8}
                    className="text-3xl sm:text-4xl font-medium text-white"
                  />
                  <span className="text-3xl sm:text-4xl text-[#a684ff] ml-1">+</span>
                </div>

                <p className="text-white/70 text-xs sm:text-sm mt-1 tracking-wide">
                  Web Projects
                </p>
              </div>
            </div>

            <a
              href="#contact"
              className="
                group relative flex items-center 
                rounded-full 
                bg-[#7a3cff] 
                p-1 pr-1 
                transition-all duration-300 
                hover:bg-[#9146ff]
                mt-2
                no-underline!
              "
            >
              <span className="bg-[#2f1b47] text-white font-semibold px-6 py-2 rounded-full group-hover:bg-[#3c2760]">
                Know More About Me
              </span>

              <span className="ml-2 w-8 h-8 rounded-full bg-white flex items-center justify-center text-black transition-all duration-300 group-hover:translate-x-1 mr-1">
                →
              </span>
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
