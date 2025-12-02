import { Container, Row, Col } from "reactstrap";
import MagicBento from "../components/MagicBento";
export default function Section5() {
  return (
    <div className="h-screen flex justify-center">
        <Container>
            {/* ===== TITLE SECTION ===== */}
            <Row className="text-center pt-20">
              <Col >
                <p className="text-xl italic font-light tracking-wide text-white/60">
                  Education & Work
                </p>
                <p className="text-5xl italic font-light text-white/80 mt-1">
                  My <span className=" text-[#9260ff]">Academic and </span>
                </p>
                <p className="text-5xl fw-bold mt-2">
                  <span className=" text-[#9260ff]">Profesional </span> Journey
                </p>
              </Col>
            </Row>
            {/* ===== BENTO SECTION ===== */}
            <Row className="flex justify-center mt-10">
                <Col className="flex justify-center" md="auto">
                    <div className="w-[700px] max-w-full">
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
                        />
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  );
}