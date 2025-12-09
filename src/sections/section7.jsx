import { SiReact, SiAdobephotoshop, SiCoreldraw } from "react-icons/si";
import { NavLink } from "react-router-dom";
import {
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import LogoLoop from "../components/LogoLoop";
import { Container, Row, Col } from "reactstrap";

export default function Section7() {
  const techLogos = [
    {
      node: (
        <div className="flex items-center gap-2 md:gap-3">
          <SiReact className="text-white text-lg md:text-xl" />
          <span className="text-white text-base md:text-xl font-semibold">React</span>
        </div>
      ),
      title: "React",
    },
    {
      node: (
        <div className="flex items-center gap-2 md:gap-3">
          <SiAdobephotoshop className="text-white text-lg md:text-xl" />
          <span className="text-white text-base md:text-xl font-semibold">Photoshop</span>
        </div>
      ),
      title: "Photoshop",
    },
    {
      node: (
        <div className="flex items-center gap-2 md:gap-3">
          <SiCoreldraw className="text-white text-lg md:text-xl" />
          <span className="text-white text-base md:text-xl font-semibold">Coreldraw</span>
        </div>
      ),
      title: "Coreldraw",
    },
  ];

  return (
    <div className="bg-[#060010] flex flex-col">
      {/* === LOGO LOOP === */}
      <div className="w-full h-16 md:h-16 bg-[#1b1327]/80 backdrop-blur-xl px-0 mx-0 justify-center">
        <LogoLoop
          logos={techLogos}
          speed={120}
          direction="left"
          logoHeight={35}
          gap={300}
          hoverSpeed={0}
          scaleOnHover
          fadeOut
          fadeOutColor="#000000"
          ariaLabel="Technology partners"
        />
      </div>

      {/* === MAIN FOOTER CONTENT === */}
      <Container className="py-12 md:py-16 px-4 md:px-0">
        {/* TITLE SECTION */}
        <div className="mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white/80">
            Let's <span className="text-[#9260ff] font-semibold">Connect</span> there
          </h2>
          <div className="w-40 md:w-85 h-1 bg-[#7a3cff] rounded-full mt-4 shadow-[0_0_15px_#7a3cff77]" />
        </div>

        <Row className="justify-between items-start text-white min-h-[150px]">
          {/* BRAND COLUMN */}
          <Col md="4" className="mb-8 md:mb-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#5e2eff] flex justify-center items-center text-lg md:text-xl font-bold">
                D
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white">Danang.</h3>
            </div>

            <p className="text-xs md:text-sm leading-relaxed text-white mb-4 md:mb-6">
              Building digital experiences with creativity and clean code.
            </p>

            <div className="flex gap-2 md:gap-3 flex-wrap">
              {[<FaInstagram />, <FaLinkedinIn />, <FaGithub />, <FaTwitter />, <FaYoutube />].map(
                (Icon, idx) => (
                  <div
                    key={idx}
                    className="w-8 h-8 md:w-10 md:h-10 bg-[#5e2eff] rounded-full flex items-center justify-center text-white text-sm md:text-lg hover:bg-[#4a14fb] transition shadow-[0_0_15px_#7a3cff55]"
                  >
                    {Icon}
                  </div>
                )
              )}
            </div>
          </Col>

          {/* NAVIGATION + CONTACT */}
          <Col md="8" className="mb-8 md:mb-0">
            {/* NAVIGATION */}
            <h4 className="text-lg md:text-xl font-semibold text-[#9260ff] mb-3 md:mb-4">
              Navigation
            </h4>          
            <ul className="flex flex-wrap items-center gap-x-4 md:gap-x-6 gap-y-2 text-white/70 text-xs md:text-sm mb-6 md:mb-10 ">
              {[
                { label: "Home", path: "/" },
                { label: "About", path: "/about" },
                { label: "Projects", path: "/projects" },
                { label: "Services", path: "/services" },
                { label: "Contact", path: "/contact" },
              ].map((item, i) => (
                <NavLink
                  key={i}
                  to={item.path}
                  className={({ isActive }) =>
                    `
                      cursor-pointer transition-colors duration-200
                      no-underline! hover:text-white!
                      ${isActive ? "text-white! font-semibold!" : "text-white/70!"}
                    `
                  }

                >
                  {item.label}
                </NavLink>
              ))}
            </ul>

            {/* CONTACT */}
            <h4 className="text-lg md:text-xl font-semibold text-[#9260ff] mb-3 md:mb-4">
              Contact
            </h4>
            <ul className="flex flex-col md:flex-row flex-wrap items-start md:items-center gap-x-4 md:gap-x-6 gap-y-2 text-white/70 text-xs md:text-sm">
              <li>089502928258</li>
              <li>bit.ly/WebPortoDanang</li>
            </ul>
            <ul className="flex flex-col md:flex-row flex-wrap items-start md:items-center gap-x-4 md:gap-x-6 gap-y-2 text-white/70 text-xs md:text-sm mt-2">
              <li>haedardanang@gmail.com</li>
            </ul>
            <ul className="flex flex-col md:flex-row flex-wrap items-start md:items-center gap-x-4 md:gap-x-6 gap-y-2 text-white/70 text-xs md:text-sm mt-2">
              <li className="wrap-break-word max-w-md">
                Perum Grand Gresik Harmoni B6-19, Kembangan, Sekarkurung, 
                Kec. Kebomas, Kabupaten Gresik, Jawa Timur 61124
              </li>
            </ul>
          </Col>
        </Row>

        {/* SEPARATOR */}
        <div className="w-full h-px bg-[#7a3cff]/40 mt-12 md:mt-16 mb-4 md:mb-6"></div>

        {/* COPYRIGHT */}
        <Row>
          <Col className="text-center text-white/50 text-xs md:text-sm">
            © {new Date().getFullYear()} <span className="text-[#9260ff]">Danang</span>. All Rights
            Reserved.
          </Col>
        </Row>
      </Container>
    </div>
  );
}