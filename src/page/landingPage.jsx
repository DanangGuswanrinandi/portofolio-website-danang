import { Container, Row, Col } from "reactstrap";
import Section1 from "../sections/section1.jsx";
import Section2 from "../sections/section2.jsx";
import Section3 from "../sections/section3.jsx";
import Section4 from "../sections/section4.jsx";
import Section5 from "../sections/section5.jsx";
import Section6 from "../sections/section6.jsx";
import Section7 from "../sections/section7.jsx";
import bgMusic from "../assets/1209.mp3";
import { useEffect } from "react";
export default function LandingPage() {

  useEffect(() => {
    const element = document.getElementById("bgMusic"); 

    const playOnScroll = () => {
      if (element && element.paused) {
        element.volume = 0.3;
        element.play().catch(() => {});
        window.removeEventListener("scroll", playOnScroll);
      }
    };  

    window.addEventListener("scroll", playOnScroll);  

    return () => {
      window.removeEventListener("scroll", playOnScroll);
    };
  }, []);
  
  return (
    <div className="
      relative w-screen min-h-screen text-white overflow-x-hidden max-w-full
      bg-linear-to-tl 
      from-[#120c1f] via-[#181025] to-[#0a0814]
    ">
      <audio id="bgMusic" loop>
        <source src={bgMusic} type="audio/mp3" />
      </audio>
      
      {/* 🔥 Glow Global */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute w-[450px] h-[450px] bg-[#7a3cff40] blur-[180px] top-[-120px] left-[-150px] rounded-full"></div>
        <div className="absolute w-[400px] h-[400px] bg-[#ff6bf340] blur-[220px] bottom-[-200px] right-[-100px] rounded-full"></div>
      </div>
    <Container fluid className="p-0 text-white relative">
      
      {/* 1️⃣ Hero Section */}
      <section >
        <Section1 />
      </section>

      {/* 2️⃣ About Section */}
      <section>
        <Section2 />
      </section>

      {/* 3️⃣ Services / Skills */}
      <section>
        <Section3 />
      </section>
      <div className="bg-linear-to-b from-[#181025] via-[#2a1d41] to-[#7a54ff20]">
      {/* 4️⃣ Portfolio / Projects */}
      <section id="section4">
        <Section4 />
      </section>

      {/* 5️⃣ Testimonials */}
      <section>
        <Section5 />
      </section>
      
      {/* 6️⃣ Contact / Call to Action */}
      <section>
        <Section6 />
      </section>
      </div>

      {/* 7️⃣ Footer */}
      <section>
        <Section7 />
      </section>
    </Container>
    </div>
  );
}