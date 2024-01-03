import React from "react";
import "./HowWeHelp.css";
import { Row, Col, Container } from "react-bootstrap";
import HeartImg1 from "../../../../images/HomePage-Images/heart-img-1.png";
import HeartImg2 from "../../../../images/HomePage-Images/heart-img-2.png";

function HowWeHelp() {
  return (
    <section className="howWeHelp">
      <div className="main-container">
        {/* Education of the Heart */}
        <Container fluid>
          <div className="education-of-the-heart">
            <h1 className="howWeHelp-header">
              How We Help: Education of the Heart
            </h1>
            <hr className="howWeHelp-education-line" />

            <Row className="howWeHelp-row">
              <Col md={4} className="howWeHelp-card">
                <p className="howWeHelp-card-text">
                  Everything you need to know about your heart health
                </p>
                <img
                  src={HeartImg1}
                  alt="Heart"
                  className="howWeHelp-heart-img"
                />
              </Col>
              <Col md={8}>
                <div className="howWeHelp-wrap-div">
                  <Row>
                    <Col md={6}>
                      {/* Heart Facts */}
                      <div className="howWeHelp-card-right">
                        <button className="howWeHelp-wrap-button">
                          Heart Facts
                        </button>
                        <p className="howWeHelp-wrap-p">
                          Sudden Cardiac Death statistics and warning signs.
                        </p>
                      </div>
                      {/* Screenings */}
                      <div className="howWeHelp-card-right">
                        <button className="howWeHelp-wrap-button">
                          Screenings
                        </button>
                        <p className="howWeHelp-wrap-p">
                          Learn the best way to detect heart complications.
                        </p>
                      </div>
                    </Col>
                    <Col md={6}>
                      {/* Emergencies */}
                      <div className="howWeHelp-card-right">
                        <button className="howWeHelp-wrap-button">
                          Emergencies
                        </button>
                        <p className="howWeHelp-wrap-p">
                          How to take action in the event of an emergency.
                        </p>
                      </div>
                      {/* Expert Health Tips */}
                      <div className="howWeHelp-card-right">
                        <button className="howWeHelp-wrap-button">
                          Expert Health Tips
                        </button>
                        <p className="howWeHelp-wrap-p">
                          Advice from professionals to live a healthy life.
                        </p>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
        {/* Gift of Art */}
        <Container fluid>
          <div className="gift-of-art">
            <h1 className="howWeHelp-header howWeHelp-header-second">
              How We Help: Gift of Art
            </h1>
            <hr className="howWeHelp-art-line" />

            <Row className="howWeHelp-row">
              <Col md={4} className="howWeHelp-card  howWeHelp-card-second">
                <p className="howWeHelp-card-text">
                  Nourishing the heart through art and stories
                </p>
                <img
                  src={HeartImg2}
                  alt="Heart"
                  className="howWeHelp-heart-img"
                />
              </Col>
              <Col md={8}>
                <div className="howWeHelp-wrap-div">
                  <Row>
                    <Col md={6}>
                      {/* Scholarships */}
                      <div className="howWeHelp-card-right">
                        <button className="howWeHelp-wrap-button">
                          Scholarships
                        </button>
                        <p className="howWeHelp-wrap-p">
                          Great opportunity for students.
                        </p>
                      </div>
                      {/* Plays */}
                      <div className="howWeHelp-card-right">
                        <button className="howWeHelp-wrap-button">Plays</button>
                        <p className="howWeHelp-wrap-p">
                          Learning experiences through storytelling and theatre.
                        </p>
                      </div>
                      {/* Films */}
                      <div className="howWeHelp-card-right">
                        <button className="howWeHelp-wrap-button">Plays</button>
                        <p className="howWeHelp-wrap-p">
                          Films with eye-opening messages.
                        </p>
                      </div>
                    </Col>
                    <Col md={6}>
                      {/* Books */}
                      <div className="howWeHelp-card-right">
                        <button className="howWeHelp-wrap-button">Books</button>
                        <p className="howWeHelp-wrap-p">
                          Stories that nourish the spirit.
                        </p>
                      </div>
                      {/* Upcoming Events */}
                      <div className="howWeHelp-card-right">
                        <button className="howWeHelp-wrap-button">
                          Upcoming Events
                        </button>
                        <p className="howWeHelp-wrap-p">
                          Check out our new coming events!
                        </p>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </section>
  );
}

export default HowWeHelp;
