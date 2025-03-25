import React from "react";
import "./OurMission.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MissionHearts from "../../../../../images/AboutUs-Images/our-mission-hearts.png";

const OurMission = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    arrows: false,
  };

  return (
    <section className="OurMission">
      <div className="main-container">
        <h2 className="ourMission-header">Our Mission</h2>
        <Container className="OurMission-container">
          <Row
            xs={1}
            md={1}
            lg={3}
            className="g-4 justify-content-center ourMission-row"
          >
            {/* First Column + Slider */}
            <Col className="ourMission-col">
              <div className="ourMission-subheader">
                <p className="ourMission-subheader-text">
                  1. Education of the Heart
                </p>
              </div>
              <Slider {...sliderSettings} className="ourMission-slider">
                <div className="ourMission-main">
                  <p className="ourMission-main-text">
                    Providing <br />
                    important information about{" "}
                    <strong>Sudden Cardiac Death and its prevention</strong>
                  </p>
                </div>
                <div className="ourMission-main">
                  <p className="ourMission-main-text">
                    Finding benefits of <br />
                    <strong>heart screenings and screening resources</strong>
                  </p>
                </div>
                <div className="ourMission-main">
                  <p className="ourMission-main-text">
                    Giving people access to{" "}
                    <strong>
                      good health tips <br />
                      from experts
                    </strong>
                  </p>
                </div>
              </Slider>
              <button className="ourMission-btn">Learn more</button>
            </Col>

            {/* Second Column + Slider */}
            <Col className="ourMission-col">
              <div className="ourMission-subheader">
                <p className="ourMission-subheader-text">2. The Gift of Art</p>
              </div>
              <Slider {...sliderSettings} className="ourMission-slider">
                <div className="ourMission-main">
                  <p className="ourMission-main-text">
                    Creating, books, film, docu’s and theatre <br />{" "}
                    <strong>
                      experiences
                      <br />
                    </strong>
                  </p>
                </div>
                <div className="ourMission-main">
                  <p className="ourMission-main-text">
                    Emphasizing how to cope with{" "}
                    <strong>substance abuse and societal injustice</strong>
                  </p>
                </div>
                <div className="ourMission-main">
                  <p className="ourMission-main-text">
                    <strong>
                      Challenging <br />
                      the mind and <br /> healing the spirit
                    </strong>
                  </p>
                </div>
              </Slider>
              <button className="ourMission-btn">Learn more</button>
            </Col>

            {/* Third Column */}
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
