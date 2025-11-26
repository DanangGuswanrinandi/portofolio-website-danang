import { Container, Row, Col } from "reactstrap";
import ElectricBorder from "../components/ElectricBorder";
import SplitText from "../components/SplitText";
import { motion } from "framer-motion";
import CountUp from "../components/CountUp";

export default function Section2() {
  return (
    <div className="
      relative
      h-screen 
      flex items-center justify-center 
      px-10
    ">


      <Container fluid >
        <Row className="w-full m-0 p-0 flex items-center ">



          {/* LEFT */}
          <Col md="6" className="flex justify-center items-center ">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 60 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
              className="w-full flex justify-center"
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
                    w-full h-50
                    flex items-center justify-center
                  "
                >
                  <img
                    src="/assets/IMG_1560.JPG"
                    className="w-150 h-120 rounded-xl object-cover"
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
                      maskComposite: "intersect",
                      WebkitMaskComposite: "source-in",
                    }}
                  />
                </div>
              </ElectricBorder>
            </motion.div>
          </Col>

          {/* RIGHT */}
          <Col
            md="6"
            className="flex flex-col items-center md:items-start justify-center 
                       text-center md:text-left p-8"
          >
            {/* Subtitle */}
              <p className="text-sm tracking-widest text-white/70 uppercase">
                About Me
              </p>
                            
              {/* Judul dengan GSAP SplitText */}
              <div className="leading-tight mt-1">
                            
                {/* Bagian "SKUY!" */}
                <SplitText
                  text="SKUY!.."
                  className="fw-bold sm:text-6xl md:text-5xl font-extrabold text-white"
                  delay={80}
                  duration={0.6}
                  ease="power3.out"
                  splitType="chars"
                  from={{ opacity: 0, y: 40 }}
                  to={{ opacity: 1, y: 0 }}
                  rootMargin="-50px"
                />
              
                {/* Bagian "Kenalan Dulu" italic */}
                <SplitText
                  text="Kenalan Dulu"
                  className="italic fw-bold sm:text-6xl md:text-5xl font-extrabold text-white"
                  delay={160}
                  duration={0.7}
                  ease="power3.out"
                  splitType="chars"
                  from={{ opacity: 0, y: 60 }}
                  to={{ opacity: 1, y: 0 }}
                  rootMargin="-50px"
                />
            
              </div>

                          
            {/* Paragraf */}
            <p className="text-left md:text-left text-white/80 leading-relaxed max-w-2xl mt-1">
              Aku Danang, 21 tahun, mahasiswa Teknik Informatika di Universitas Muhammadiyah Gresik. Menyukai dunia desain, terutama pembuatan kebutuhan event seperti flyer, banner, logo dengan CorelDRAW dan Photoshop sebagai tools utama. Di sisi lain juga tertarik pada pengembangan web dan sudah terbiasa dengan HTML, CSS, serta React.js. Senang mencoba hal baru dan terus mengembangkan diri di bidang desain maupun teknologi.
            </p>

            {/* === COUNTUP CARD SECTION === */}
            <div className="mb-4 flex gap-6">
                              
              {/* DESIGN PROJECT CARD */}
              <div className="
                  w-35 h-27 
                  bg-white/10 backdrop-blur-lg 
                  rounded-xl border border-white/10
                  flex flex-col items-center justify-center pt-2
                  shadow-[0_0_25px_#7a3cff40]
                ">
                <div className="flex items-center">
                  <CountUp
                    from={0}
                    to={133}
                    duration={1.8}
                    className="text-4xl font-medium text-white"
                  />
                  <span className="text-4xl text-[#a684ff] font-medium ml-1">+</span>
                </div>
                              
                <p className="text-white/70 text-sm mt-2 tracking-wide">
                  Design Projects
                </p>
              </div>
                              
              {/* WEB PROJECT CARD */}
              <div className="
                  w-35 h-27
                  bg-white/10 backdrop-blur-lg 
                  rounded-xl border border-white/10
                  flex flex-col items-center justify-center pt-2
                  shadow-[0_0_25px_#7a3cff40]
                ">
                <div className="flex items-center">
                  <CountUp
                    from={0}
                    to={3}
                    duration={1.8}
                    className="text-4xl font-medium text-white"
                  />
                  <span className="text-4xl text-[#a684ff] font-medium ml-1">+</span>
                </div>
                              
                <p className="text-white/70 text-sm mt-2 tracking-wide">
                  Web Projects
                </p>
              </div>
                              
            </div>
                          
           <a
              href="#contact"
              className="group relative flex items-center rounded-full bg-[#7a3cff] p-1 pr-1 no-underline! transition-all duration-300 hover:bg-[#9146ff]"
            >
              <span className="bg-[#2f1b47] text-white font-semibold px-6 py-2 rounded-full transition-all duration-30 group-hover:bg-[#3c2760]">
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
