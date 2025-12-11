import { Container } from "reactstrap";
import Foto2 from "../assets/Foto Danang 2.png"; 
import Colour from "../assets/colour bord.png";
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import Squares from "../components/Squares";
import image3 from "../assets/seeking.png";
import image4 from "../assets/Hi.png";



export default function Section1() {

  const mainControls = useAnimation();
  const image4Controls = useAnimation();

    useEffect(() => {
    let isMounted = true;
    
    const runAnimation = async () => {
      if (!isMounted) return;
      
      // Reset position
      mainControls.set({ x: -200 });
      image4Controls.set({ scale: 0, opacity: 0 });
      
      while (isMounted) {
        // 1. Bergerak ke kanan (1.5 detik)
        await mainControls.start({
          x: 0,
          transition: {
            duration: 1.5,
            ease: [0.2, 0, 0, 1]
          }
        });
        
        // 2. Jeda di kanan + tampilkan image4 (3 detik)
        // Tampilkan image4 dengan animasi
        await image4Controls.start({
          scale: 1,
          opacity: 1,
          transition: {
            duration: 0.5,
            ease: "backOut"
          }
        });
        
        // Tunggu sisa waktu jeda (3 - 0.5 = 2.5 detik)
        await new Promise(resolve => setTimeout(resolve, 2500));
        
        // 3. Sembunyikan image4 (0.3 detik)
        await image4Controls.start({
          scale: 0,
          opacity: 0,
          transition: { duration: 0.3 }
        });
        
        // 4. Kembali ke kiri (3.5 detik)
        await mainControls.start({
          x: -200,
          transition: {
            duration: 3.5,
            ease: [0.2, 0, 0, 1]
          }
        });
        
        // 5. Jeda sebelum repeat (opsional)
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
    };
    
    runAnimation();
    
    return () => {
      isMounted = false;
      mainControls.stop();
      image4Controls.stop();
    };
  }, [mainControls, image4Controls]);

  return (
    <div className="h-screen w-full bg-linear-to-br from-[#120c1f] via-[#181025] to-[#2a1d41] relative overflow-hidden flex items-center justify-end">

        {/* Setengah lingkaran putih di kiri */}

        <Squares
        speed={0.5}
        squareSize={40}
        direction="diagonal"
        borderColor="#1e004f"
        hoverFillColor="#2e2c31"
        className="absolute inset-0 z-0"
      />
        <motion.div
          animate={mainControls}
          initial={{ x: -200 }}
          className="absolute left-0 top-1/2 -translate-y-1/2 w-[350px] h-[600px]"
        >
          <img
            src={image3}
            className="absolute top-20 left-12 w-110 brightness-130 rotate-3"
            alt="image3"
          />

          <motion.img
            animate={image4Controls}
            initial={{ scale: 0, opacity: 0 }}
            src={image4}
            className="absolute top-28 left-105 w-45"
            alt="image4"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>


        <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/3 w-[300px] h-[550px] bg-[#1C1239] rounded-r-full"></div>
        <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/3 w-[260px] h-[490px] bg-[#7a3cff] rounded-r-full"></div>

        
        
            <div className="absolute right-0 top-12 md:top-50 md:right-[130px] 
                  w-[400px] md:w-[650px] flex flex-col gap-2 text-left">

                {/* JUDUL */}
                <div className="text-left">
                  <p className="text-5xl md:text-7xl fw-bold text-white">About Me</p>

                  <motion.div
                    className="my-3 md:my-3 h-[2px] bg-[#7a3cff] rounded-full shadow-[0_0_20px_#7a3cff88]"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2, ease: "easeOut" }}
                    style={{ width: "42%", transformOrigin: "left" }}
                  />

                  <h5
                    className="text-sm md:text-base fw-light text-white/70"
                    style={{ letterSpacing: "0.9em" }}
                  >
                    KENALAN DULU
                  </h5>
                </div>


              {/* CARD TEKS */}
              <div className="bg-[#5e2eff]/10 backdrop-blur-lg rounded-xl p-6 text-white shadow-lg">
                <p className="text-[15px] leading-relaxed pr-5">
                  Saya <span className="fw-semibold">Danang Haedar Guswanrinandi dari Gresik</span>.
                  Memiliki ketertarikan yang kuat pada dunia <span className="fw-semibold">desain grafis dan
                  teknologi</span>. Saya senang mempelajari dan mengulik hal-hal baru terkait desain,
                  khususnya dalam penggunaan <span className="fw-semibold">CorelDRAW</span> dan
                  <span className="fw-semibold"> Photoshop</span> untuk berbagai kebutuhan visual.
                  Meskipun masih dalam proses belajar, saya berambisi untuk terus mengembangkan kemampuan
                  desain saya dan siap berkolaborasi dalam proyek yang dapat memperluas pengalaman saya.
                </p>
              </div>

              <a
                href="#"
                className="group relative flex items-center rounded-full bg-[#7a3cff] p-1 pr-1 no-underline! transition-all duration-300 hover:bg-[#9146ff] w-fit mt-3"
              >
                <span className="bg-[#2f1b47] text-white font-semibold px-4 md:px-5 py-1.5 md:py-2 rounded-full transition-all duration-300 group-hover:bg-[#3c2760] text-sm md:text-base">
                  Download CV
                </span>

                <span className="ml-2 w-6 h-6 md:w-8 md:h-8 rounded-full bg-white flex items-center justify-center text-black transition-all duration-300 group-hover:translate-x-1 mr-1 text-sm">
                  →
                </span>
              </a>
              

            </div>

          {/* Gambar kanan bawah */}
          <img
            src={Colour}
            alt="Colour Border"
            className="absolute bottom-49 right-0 w-22 h-auto -rotate-5 shadow-lg"
          />
          <img
            src={Foto2}
            alt="Danang Haedar"
            className="absolute right-0 bottom-0 w-[300px] md:w-[350px] h-auto object-cover"
          />


          {/* Optional: Container untuk responsivitas jika perlu */}
          <Container className="relative z-10"></Container>
    </div>
  );
}
