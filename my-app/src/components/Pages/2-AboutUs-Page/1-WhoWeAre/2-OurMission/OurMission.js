import React from "react";
import "./OurMission.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MissionHearts from "../../../../../images/AboutUs-Images/our-mission-hearts.png"

const OurMission = () => {
  return (
    <section className="OurMission">
      <div className="main-container">
        <h2 className="ourMission-header">Our Story</h2>
        <Container className="OurMission-container">
          <Row
            xs={1}
            md={1}
            lg={3}
            className="g-4 justify-content-center ourMission-row"
          >
            <Col className="ourMission-col">
              <div className="ourMission-subheader">
                <p className="ourMission-subheader-text">
                  1. Education of the Heart
                </p>
              </div>
              <div className="ourMission-main">
                <p className="ourMission-main-text">
                  Providing the opportunity to get{" "}
                  <span className="ourMission-main-span">
                    information about sudden cardiac death
                  </span>
                </p>
              </div>
              <button className="ourMission-bth">Learn more</button>
            </Col>
            <Col className="ourMission-col">
              <div className="ourMission-subheader">
                <p className="ourMission-subheader-text">2. The Gift of Art</p>
              </div>
              <div className="ourMission-main">
                <p className="ourMission-main-text">
                  <span className="ourMission-main-span">
                    Expanding student access
                  </span>
                  to books, films, documentaries, and theatre experiences
                </p>
              </div>
              <button className="ourMission-bth">Learn more</button>
            </Col>
            <Col className="ourMission-col">
              <div>
                <img
                  src={MissionHearts}
                  alt="hearts"
                  className="ourMissionHearts"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};
export default OurMission;
