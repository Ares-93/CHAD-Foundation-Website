import React from "react";
import "./Board.css";
import AboutUsNavigation from "../AboutUsNavigation";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LinkedinIcon from "../../../../images/Footer-Images/linkedin.png";

const Board = () => {
  return (
    <section className="Board">
      <AboutUsNavigation currentPage="board" />
      <div className="main-container">
        <Container fluid>
          {/* Board of Directors */}
          <Row>
            <h2 className="board-header">Board of Directors</h2>
            {/* LEFT */}
            <Col>
              {/* ONE */}
              <h3 className="board-subheader">Arista</h3>
              <div className="board-paragraph">
                <p className="board-p">President & Founder</p>
              </div>
              {/* TWO */}
              <h3 className="board-subheader">Collin Aaron Butrum</h3>
              <div className="board-paragraph">
                <p className="board-p">1st V.P. - Secretary</p>
              </div>
            </Col>
            {/* RIGHT */}
            <Col>
              {/* ONE */}
              <h3 className="board-subheader">Curt Adam Butrum</h3>
              <div className="board-paragraph">
                <p className="board-p">2nd V.P. - Treasurer</p>
              </div>
            </Col>
          </Row>
          {/* Founding Members */}
          <Row>
            <h2 className="board-header">Founding Members</h2>
            {/* LEFT */}
            <Col>
              {/* ONE */}
              <h3 className="board-subheader">Michael Tidik</h3>
              <div className="board-paragraph">
                <p className="board-p">V.P., UBS</p>
              </div>
              {/* TWO */}
              <h3 className="board-subheader">Keven Simmons</h3>
              <div className="board-paragraph">
                <p className="board-p">Film Transportation</p>
              </div>
              {/* THREE */}
              <h3 className="board-subheader">Sean Smith</h3>
              <div className="board-paragraph">
                <p className="board-p">Media Exec.</p>
              </div>
              {/* FOUR */}
              <h3 className="board-subheader">Louis Milito</h3>
              <div className="board-paragraph">
                <p className="board-p">TV/Film Director</p>
              </div>
              {/* FIVE */}
              <h3 className="board-subheader">Maria Ellis</h3>
              <div className="board-paragraph">
                <p className="board-p">Teacher</p>
              </div>
            </Col>
            {/* RIGHT */}
            <Col>
              {/* ONE */}
              <h3 className="board-subheader">Joan Ellis</h3>
              <div className="board-paragraph">
                <p className="board-p">in memoriam</p>
              </div>
              <div className="board-paragraph board-paragraph2">
                <p className="board-p">Nurse</p>
              </div>
              {/* TWO */}
              <h3 className="board-subheader">Tammi McMeekin</h3>

              {/* THREE */}
              <h3 className="board-subheader">Shelli McMeekin</h3>
              <div className="board-paragraph">
                <p className="board-p">Film Exec.</p>
              </div>
              {/* FOUR */}
              <h3 className="board-subheader">Jake Downey</h3>
              <div className="board-paragraph">
                <p className="board-p">TV Producer</p>
              </div>
            </Col>
          </Row>
          {/* Advisory Board - Gift of Heart*/}
          <Row>
            <h2 className="board-header">Advisory Board – Gift of Heart</h2>

            {/* LEFT */}
            <Col>
              {/* ONE */}
              <h3 className="board-subheader">Michael Silka, M.D.</h3>
              <div className="board-paragraph">
                <p className="board-p">
                  Professor of Pediatrics, Keck’s School of Med USC;
                  electrophysiology <br />
                  Children’s Hospital Los Angeles Heart Institute, Los Angeles,
                  CA
                </p>
              </div>
              {/* TWO */}
              <h3 className="board-subheader">Pierre Wong, M.D.</h3>
              <div className="board-paragraph">
                <p className="board-p">
                  Director of Echocardiography <br />
                  Children’s Hospital Los Angeles Heart Institute Los Angeles,
                  CA
                </p>
              </div>
              {/* THREE */}
              <h3 className="board-subheader">Alan Lewis, M.D.</h3>
              <div className="board-paragraph">
                <p className="board-p">
                  Professor of Pediatrics –USC; Cardiomyopathy, Myocarditis
                  <br />
                  Children’s Hospital Los Angeles Heart Institute Los Angeles,
                  CA
                </p>
              </div>
              {/* FOUR */}
              <h3 className="board-subheader">Masato Takahashi, M.D.</h3>
              <div className="board-paragraph">
                <p className="board-p">
                  Professor of Pediatrics-USC Keck School of Medicine; Kawasaki
                  <br />
                  disease, Children’s Hospital Los Angeles Heart Institute
                </p>
              </div>
            </Col>
            {/* RIGHT */}
            <Col>
              {/* ONE */}
              <h3 className="board-subheader">
                Theodore P. Abraham, M.D., F.A.C.C., F.A.S.E.
              </h3>
              <div className="board-paragraph">
                <p className="board-p">
                  Director, <br />
                  UCSF Adult Cardiac Echocardiography
                </p>
              </div>
              {/* TWO */}
              <h3 className="board-subheader">Craig Sable, M.D.</h3>
              <div className="board-paragraph">
                <p className="board-p">
                  Director of Echocardiography <br />
                  Children’s National Medical, Washington D.C.
                </p>
              </div>
              {/* THREE */}
              <h3 className="board-subheader">Christine Seidman, M.D.</h3>
              <div className="board-paragraph">
                <p className="board-p">
                  Director, Seidman Laboratory
                  <br />
                  Harvard Medical School, Boston, MA
                </p>
              </div>
              {/* FOUR */}
              <h3 className="board-subheader">Jared C. Lacorte, MD</h3>
              <div className="board-paragraph">
                <p className="board-p">
                  Pediatric Cardiologist - American Board of Pediatrics /
                  Pediatric Cardiology
                  <br />
                  Northwell Health, Staten Island University Hospital, New York
                </p>
              </div>
            </Col>
          </Row>
          {/* Advisory Board - Gift of Art*/}
          <Row>
            <h2 className="board-header">Advisory Board – Gift of Art</h2>

            {/* LEFT */}
            <Col>
              {/* ONE */}
              <h3 className="board-subheader">Joe Black</h3>
              <div className="board-paragraph">
                <p className="board-p">Producer</p>
              </div>
              {/* TWO */}
              <h3 className="board-subheader">Tony Macy-Perez</h3>
              <div className="board-paragraph">
                <p className="board-p">Director/Playwright</p>
              </div>
              {/* THREE */}
              <h3 className="board-subheader">Stephen Cosentino</h3>
              <div className="board-paragraph">
                <p className="board-p">Artist - Painter, Muralist</p>
              </div>
            </Col>
            {/* RIGHT */}
            <Col>
              {/* ONE */}
              <h3 className="board-subheader">Nadeema Agard</h3>
              <div className="board-paragraph">
                <p className="board-p">Native American Artist</p>
              </div>
              {/* TWO */}
              <h3 className="board-subheader">Charles Taylor</h3>
              <div className="board-paragraph">
                <p className="board-p">Educator/Development</p>
              </div>
            </Col>
          </Row>
          {/* Development Team */}
          <Row>
            <h2 className="board-header">Development Team</h2>
            {/* LEFT */}
            <Col>
              {/* ONE */}
              <div className="board-dev-p">
                <h3 className="board-subheader">Jonathan Antonio</h3>
                <a
                  href="https://www.linkedin.com/in/j-antonio/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={LinkedinIcon} alt="alt" width={45} />
                </a>
              </div>

              <div className="board-paragraph">
                <p className="board-p">UX/UI Product Designer</p>
              </div>
              {/* TWO */}
              <div className="board-dev-p">
                <h3 className="board-subheader">Eunsil Kim</h3>
                <a
                  href="https://www.linkedin.com/in/eunsil-kim/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={LinkedinIcon} alt="alt" width={45} />
                </a>
              </div>
              <div className="board-paragraph">
                <p className="board-p">UX/UI Product Designer</p>
              </div>
              {/* THREE */}
              <div className="board-dev-p">
                <h3 className="board-subheader">Ralph Andre</h3>
                <a
                  href="https://www.linkedin.com/in/ralphandre/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={LinkedinIcon} alt="alt" width={45} />
                </a>
              </div>
              <div className="board-paragraph">
                <p className="board-p">Lead, UFX Designer</p>
              </div>
            </Col>
            {/* RIGHT */}
            <Col>
              {/* ONE */}
              <div className="board-dev-p">
                <h3 className="board-subheader">Tetiana Korchynska</h3>
                <a
                  href="https://www.linkedin.com/in/tetiana-korchynska/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={LinkedinIcon} alt="alt" width={45} />
                </a>
              </div>

              <div className="board-paragraph">
                <p className="board-p">Web Developer</p>
              </div>
              {/* TWO */}
              <div className="board-dev-p">
                <h3 className="board-subheader">Mohammad Ariz Haider</h3>
                <a
                  href="https://www.linkedin.com/in/mhaider93/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={LinkedinIcon} alt="alt" width={45} />
                </a>
              </div>
              <div className="board-paragraph">
                <p className="board-p">Web Developer</p>
              </div>
              {/* THREE */}
              {/* <div className="board-dev-p">
                <h3 className="board-subheader">Ajinkya Patil</h3>
                <a
                  href="https://www.linkedin.com/in/ajinkya-patil-828115178/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={LinkedinIcon} alt="alt" width={45} />
                </a>
              </div>
              <div className="board-paragraph">
                <p className="board-p">Back-end Developer</p>
              </div> */}
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};
export default Board;
