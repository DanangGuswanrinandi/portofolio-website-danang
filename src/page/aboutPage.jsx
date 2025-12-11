import { Container, Row, Col } from "reactstrap";
import Section1 from "../sections/a_section1_about.jsx";

export default function ComponentName() {
  return (
    <Container fluid className="p-0 text-white">
      {/* 1️⃣ Hero Section */}
      <section>
        <Section1 />
      </section>

      {/* 2️⃣ About Section */}
      <section className="h-screen bg-orange-500 d-flex align-items-center justify-content-center">
        <Row className="text-center w-full mx-0">
          <Col>
            <h1 className="text-5xl font-bold">Section 2 — About</h1>
          </Col>
        </Row>
      </section>

      {/* 3️⃣ Services / Skills */}
      <section className="h-screen bg-yellow-500 flex items-center justify-center text-gray-900">
        <Row className="text-center w-full mx-0">
          <Col>
            <h1 className="text-5xl font-bold">Section 3 — Services</h1>
          </Col>
        </Row>
      </section>

      {/* 4️⃣ Portfolio / Projects */}
      <section className="h-screen bg-green-500 flex items-center justify-center">
        <Row className="text-center w-full mx-0">
          <Col>
            <h1 className="text-5xl font-bold">Section 4 — Portfolio</h1>
          </Col>
        </Row>
      </section>

      {/* 5️⃣ Testimonials */}
      <section className="h-screen bg-blue-500 flex items-center justify-center">
        <Row className="text-center w-full mx-0">
          <Col>
            <h1 className="text-5xl font-bold">Section 5 — Testimonials</h1>
          </Col>
        </Row>
      </section>

      {/* 6️⃣ Contact / Call to Action */}
      <section className="h-screen bg-indigo-500 flex items-center justify-center">
        <Row className="text-center w-full mx-0">
          <Col>
            <h1 className="text-5xl font-bold">Section 6 — Contact</h1>
          </Col>
        </Row>
      </section>

      {/* 7️⃣ Footer */}
      <section className="h-screen bg-purple-600 flex items-center justify-center">
        <Row className="text-center w-full mx-0">
          <Col>
            <h1 className="text-5xl font-bold">Section 7 — Footer</h1>
          </Col>
        </Row>
      </section>
    </Container>
  );
}