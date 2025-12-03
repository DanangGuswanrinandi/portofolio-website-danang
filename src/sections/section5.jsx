import { Container, Row, Col } from "reactstrap";
import MagicBento from "../components/MagicBento";
export default function Section5() {
  return (
    <div className="min-h-screen md:h-screen flex justify-center items-center py-16 md:py-0">
      <Container>
        {/* ===== TITLE SECTION ===== */}
        <Row className="text-center pt-8 md:pt-20">
          <Col>
            <p className="text-lg md:text-xl italic font-light tracking-wide text-white/60">
              Education & Work
            </p>
            <p className="text-3xl md:text-4xl lg:text-5xl italic font-light text-white/80 mt-1">
              My <span className="text-[#9260ff]">Academic and </span>
            </p>
            <p className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2">
              <span className="text-[#9260ff]">Profesional </span> Journey
            </p>
          </Col>
        </Row>
        {/* ===== BENTO SECTION ===== */}
        <Row className="flex justify-center mt-8 md:mt-10">
          <Col className="flex justify-center" md="auto">
            <div className="w-full max-w-[700px] px-4 md:px-0">
              <MagicBento
                textAutoHide={true}
                enableStars={true}
                enableSpotlight={true}
                enableBorderGlow={true}
                enableTilt={true}
                enableMagnetism={true}
                clickEffect={true}
                spotlightRadius={300}
                particleCount={12}
                glowColor="132, 0, 255"
                className="w-full"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}